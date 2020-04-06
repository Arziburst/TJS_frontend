/* eslint-disable init-declarations */

// Core
import 'styled-components';
// Assets
import { DefaultLightTheme } from '../theme';

declare module 'styled-components' {
    export interface DefaultTheme extends DefaultLightTheme {}
}
