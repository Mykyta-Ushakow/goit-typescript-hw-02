/*
  Створіть новий тип даних, який підходить для цих двох об'єктів.
*/

type MyObj = {
	title: string;
	likes: number;
	accounts: string[];
	status: "open" | "close";
	details?: {
		createAt?: Date;
		updateAt?: Date;
		[key: string]: unknown;
	};
	[key: string]: unknown;
};

const page1: MyObj = {
	title: "The awesome page",
	likes: 100,
	accounts: ["Max", "Anton", "Nikita"],
	status: "open",
	details: {
		createAt: new Date("2021-01-01"),
		updateAt: new Date("2021-05-01"),
	},
};

const page2: MyObj = {
	title: "Python or Js",
	likes: 5,
	accounts: ["Alex"],
	status: "close",
};

export {};
