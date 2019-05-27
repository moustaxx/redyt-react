import * as React from 'react';
import { TThemeDispatch } from 'Src/reducers/useThemeReducer';

const ThemeContext = React.createContext<TThemeDispatch>(() => {/* */ });

export default ThemeContext;
