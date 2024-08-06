export interface IExpensesProps {
	expenses: {
		id: string;
		title: string;
		amount: number;
		date: Date;
	}[];
}
