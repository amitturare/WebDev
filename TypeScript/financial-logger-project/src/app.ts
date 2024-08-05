const form = document.querySelector(".new-item-form") as HTMLFormElement;

// Inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
const ul = document.querySelector("ul")!;

// Interfaces
interface HasFormatter {
    format(): string;
}

// Classes
class Invoice implements HasFormatter {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
class Payment implements HasFormatter {
    recipients: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number) {
        this.recipients = c;
        this.details = d;
        this.amount = a;
    }

    format() {
        return `${this.recipients} owes $${this.amount} for ${this.details}`;
    }
}
class ListTemplate {
    container: HTMLUListElement;

    constructor(c: HTMLUListElement) {
        this.container = c;
    }

    render(item: HasFormatter, heading: string, pos: "start" | "end") {
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        const p = document.createElement("p");

        h4.innerText = heading;
        p.innerText = item.format();

        li.append(h4);
        li.append(p);

        if (pos === "start") {
            this.container.prepend(li);
        } else {
            this.container.append(li);
        }
    }
}

const list = new ListTemplate(ul)!;

// Event Listeners
form.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;

    let values: [string, string, number] = [
        toFrom.value,
        details.value,
        amount.valueAsNumber,
    ];

    if (type.value === "invoice") {
        doc = new Invoice(...values);
    } else {
        doc = new Payment(...values);
    }

    list.render(doc, type.value, "end");
});
