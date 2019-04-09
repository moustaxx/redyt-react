export interface IThemeInterface {
	subforum: {
		primary: string;
		secondary: string;
		tertiary: string;
	};
	fontColor: string;
	iconColor: string;
	background: {
		primary: string;
		secondary: string;
		searchBox: string;
	};
	button: {
		primary: string;
		secondary: string;
	};
	borderColor: string;
	defaultFont: string;
	lightTheme: boolean;
}

export const darkTheme = {
	subforum: {
		primary: 'hsl(200, 21%, 39%)',
		secondary: 'hsl(206, 100%, 41%)',
		tertiary: 'hsl(169, 44%, 36%)',
	},
	fontColor: 'hsl(0, 0%, 81%)',
	iconColor: 'hsl(204, 2%, 54%)',
	background: {
		primary: 'hsl(228, 10%, 10%)',
		secondary: 'hsl(220, 12%, 14%)',
		searchBox: 'hsl(228, 10%, 12%)',
	},
	button: {
		primary: 'hsl(169,44%,36%)',
		secondary: 'hsl(204, 7%, 85%)',
	},
	borderColor: 'hsl(0, 0%, 24%)',
	defaultFont: 'Source Sans Pro',
	lightTheme: false,
};

export const lightTheme = {
	subforum: {
		primary: 'hsl(200, 21%, 39%)',
		secondary: 'hsl(206, 100%, 41%)',
		tertiary: 'hsl(169, 44%, 36%)',
	},
	fontColor: 'hsl(240, 2%, 10%)',
	iconColor: 'hsl(204, 2%, 54%)',
	background: {
		primary: 'hsl(210, 19%, 88%)',
		secondary: 'hsl(0, 0%, 100%)',
		searchBox: 'hsl(210, 13%, 90%)',
	},
	button: {
		primary: 'hsl(169,44%,36%)',
		secondary: 'hsl(204, 7%, 85%)',
	},
	borderColor: 'hsl(210, 13%, 90%)',
	defaultFont: 'Source Sans Pro',
	lightTheme: true,
};
