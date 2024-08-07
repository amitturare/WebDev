export interface IExpenseListProps {
	filteredExpenses: {
		id: string;
		title: string;
		amount: number;
		date: Date;
	}[];
}
