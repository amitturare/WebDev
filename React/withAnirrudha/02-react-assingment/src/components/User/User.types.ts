export interface IUserProps {
	name: string;
	address: string;
	age: number;
	friends: string[];
	isBestFriend: boolean;
	location: {
		city: string;
		country: string;
	};
	showInUpperCase: (name: string) => string;
}
