export interface IToggleProps {
	name: string;
	serverName: string;
	status: "ON" | "OFF";
}

export interface IToggleList {
	togglesData: IToggleProps[];
}
