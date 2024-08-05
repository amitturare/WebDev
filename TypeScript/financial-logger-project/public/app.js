"use strict";
const form = document.querySelector(".new-item-form");
// Inputs
const type = document.querySelector("#type");
const toFrom = document.querySelector("#toFrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector("ul");
// Classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
class Payment {
    constructor(c, d, a) {
        this.recipients = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.recipients} owes $${this.amount} for ${this.details}`;
    }
}
class ListTemplate {
    constructor(c) {
        this.container = c;
    }
    render(item, heading, pos) {
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        const p = document.createElement("p");
        h4.innerText = heading;
        p.innerText = item.format();
        li.append(h4);
        li.append(p);
        if (pos === "start") {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
const list = new ListTemplate(ul);
// Event Listeners
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    let values = [
        toFrom.value,
        details.value,
        amount.valueAsNumber,
    ];
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
});
