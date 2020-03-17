// Core
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

// Fonts
import { fonts } from '../';

export default {
    GlobalReset: createGlobalStyle`
    ${reset}

    input, select, button {
      outline: none;
    }

    button {
      cursor:  pointer;
      border:  none;
      padding: 0px;
    }

    .Toastify__toast {
      min-height: auto !important;
      margin-bottom: 0 !important;
    }

    .Toastify__toast-container {
      top: 0 !important;
      padding: 0 !important;
    }
  `,

    GlobalFonts: createGlobalStyle`
      @font-face {
        font-family: PacificoRegular;
        src: url('${fonts.PacificoRegular}') format('opentype');
      }
      @font-face {
        font-family: RobotoRegular;
        src: url('${fonts.RobotoRegular}') format('opentype');
      }
  `,
};
