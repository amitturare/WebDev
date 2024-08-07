export function getDateString(date: Date) {
	const year = date.getFullYear();
	const month = date.toLocaleString("en-US", { month: "long" });
	const day = date.toLocaleString("en-US", { day: "2-digit" });

	return { yearStr: year, monthStr: month, dayStr: day };
}
