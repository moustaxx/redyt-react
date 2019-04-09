import * as styledComponents from 'styled-components';
import { darkTheme, lightTheme, IThemeInterface } from './theme';

const {
	default: styled,
	css,
	createGlobalStyle,
	keyframes,
	ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<IThemeInterface>;

export default styled;
export { darkTheme, lightTheme, css, createGlobalStyle, keyframes, ThemeProvider };
