import * as React from 'react';
import { IColors } from 'Components/Forum/Forum.apollo';

const SetThemeContext = React.createContext(
	(a: 'overwrite' | 'toggle' = 'toggle', b?: IColors | false) => {/**/ }
);

export default SetThemeContext;
