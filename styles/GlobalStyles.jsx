import { createGlobalStyle } from 'styled-components';

import { breakpoints } from './MediaQueries';

export const GlobalStyles = createGlobalStyle`
   :root {
      --main-red: #e86060;
      --dark-red-second: #662323;
      --soft-gray: #bdbdbd;
      --gray: #828282;
      --light-red: #ff7676;
      --footer-color: #eb5757;
      --white: #ffffff;
   }
   * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
   }
   html {
      font-size: 100%;
      ${breakpoints.tablet}{
         font-size: 80%;
      }
      ${breakpoints.phone}{
         font-size: 60%;
      }
   }

   body {
      background-color: var(--white);
      font-family: 'Quicksand', sans-serif;
   }

   a {
      text-decoration: none;
      color: unset;
   }

   button,
   input {
      outline: 0;
   }

   ul {
      list-style-type: none;
   }

   img {
      max-width: 100%;
   }

   .container {
      max-width: 1660px;
      margin: auto 1rem;
      border: 1px solid red;
   }

   .grid {
      display: grid;
      grid-template-columns: 330px calc(100% - 330px);

      ${breakpoints.tablet}{
         grid-template-columns: 100%;
      }
   }

   .flex {
      display: flex;
      justify-content: center;
      align-items: center
   }

   .mb-3 {
      margin-bottom: 3rem;
   }

   .mb-2 {
      margin-bottom: 2rem;
   }

   .section {
      padding: 0 2rem;
   }
`;
