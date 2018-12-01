import * as styledComponents from 'styled-components';

export interface IThemeInterface {
	mainSubforumColor: string;
	secondarySubforumColor: string;
	tertiarySubforumColor: string;
	fontColor: string;
	iconColor: string;
	mainBgColor: string;
	secondaryBgColor: string;
	searchBoxBgColor: string;
	buttonBgColor: string;
	secondButtonBgColor: string;
	borderColor: string;
}

// export const theme = {
// 	mainSubforumColor: 'hsl(200, 21%, 39%)',
// 	secondarySubforumColor: 'hsl(206, 100%, 41%)',
// 	tertiarySubforumColor: 'hsl(169, 44%, 36%)',
// 	fontColor: '#1a1a1b',
// 	iconColor: '#878a8c',
// 	mainBgColor: '#dae0e6',
// 	borderColor: '#cccccc'
// };

export const theme = {
	mainSubforumColor: 'hsl(200, 21%, 39%)',
	secondarySubforumColor: 'hsl(206, 100%, 41%)',
	tertiarySubforumColor: 'hsl(169, 44%, 36%)',
	fontColor: '#b3b3b3',
	iconColor: '#878a8c',
	mainBgColor: '#212121',
	secondaryBgColor: '#333333',
	searchBoxBgColor: '#212121',
	buttonBgColor: 'hsl(169,44%,36%)',
	secondButtonBgColor: 'hsl(204, 7%, 85%)',
	borderColor: '#4e4e4e'
};

const {
	default: styled,
	css,
	createGlobalStyle,
	keyframes,
	ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<IThemeInterface>;

export default styled;
export { css, createGlobalStyle, keyframes, ThemeProvider };

