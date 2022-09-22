/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import UseContext from './apps/UseContext';
import {name as appName} from './app.json';
import Remove from './src/Remove';

AppRegistry.registerComponent(appName, () => Remove);
