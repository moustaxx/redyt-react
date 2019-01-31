import * as styledComponents from 'styled-components';
import { theme, IThemeInterface } from './theme';

const {
	default: styled,
	css,
	createGlobalStyle,
	keyframes,
	ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<IThemeInterface>;

export default styled;
export { theme, css, createGlobalStyle, keyframes, ThemeProvider };
