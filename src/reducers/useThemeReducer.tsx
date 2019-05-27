import * as React from 'react';
import { IColors } from 'Components/Forum/Forum.apollo';
import { darkTheme, lightTheme, IThemeInterface } from 'Src/theme';

interface IState {
	palette: 'dark' | 'light';
	theme: IThemeInterface;
	customColors: IColors | null;
}

interface IAction {
	type: 'toggle' | 'overwrite';
	payload?: IColors;
}

const initialState: IState = {
	palette: 'dark' as const,
	theme: darkTheme,
	customColors: null
};

const themeReducer: React.Reducer<IState, IAction> = (prevState, { type, payload = null }) => {
	switch (type) {
		case 'toggle':
			const { customColors } = prevState;
			return prevState.palette === 'dark'
				? { palette: 'light', theme: { ...lightTheme, ...customColors }, customColors }
				: { palette: 'dark', theme: { ...darkTheme, ...customColors }, customColors };
		case 'overwrite':
			if (JSON.stringify(payload) === JSON.stringify(prevState.customColors)) return prevState;
			return {
				...prevState,
				theme: Object.assign({}, prevState.theme, payload),
				customColors: payload
			};
		default:
			throw new Error();
	}
};

const useThemeReducer = () => React.useReducer(themeReducer, initialState);

export type TThemeDispatch = React.Dispatch<IAction>;
export default useThemeReducer;
