/** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react";
import { convertPxToRem } from "../util/convertPxToRem";

export const GlobalStyles = () => (
	<Global
		styles={css`
      :root {
        /* colors */
        --color-neutral900: hsl(227, 75%, 14%);
        --color-neutral800: hsl(226, 25%, 17%);
        --color-neutral700: hsl(225, 23%, 24%);
        --color-neutral600: hsl(226, 11%, 37%);
        --color-neutral300: hsl(0, 0%, 78%);
        --color-neutral200: hsl(217, 61%, 90%);
        --color-neutral100: hsl(0, 0%, 93%);
        --color-neutral0: hsl(200, 60%, 99%);
        --color-red400: hsl(3, 86%, 64%);
        --color-red500: hsl(3, 71%, 56%);
        --color-red700: hsl(3, 77%, 44%);
        --light-gradient: linear-gradient(180deg, #ebf2fc 0%, #eefbf9 100%);
        --dark-gradient: linear-gradient(180deg, #04091b 0%, #091540 100%);
        /* spacing */
        --spacing-0: ${convertPxToRem(0)};
        --spacing-025: ${convertPxToRem(2)};
        --spacing-050: ${convertPxToRem(4)};
        --spacing-075: ${convertPxToRem(6)};
        --spacing-100: ${convertPxToRem(8)};
        --spacing-125: ${convertPxToRem(10)};
        --spacing-150: ${convertPxToRem(12)};
        --spacing-200: ${convertPxToRem(16)};
        --spacing-250: ${convertPxToRem(20)};
        --spacing-300: ${convertPxToRem(24)};
        --spacing-400: ${convertPxToRem(32)};
        --spacing-500: ${convertPxToRem(40)}; 
        --spacing-600: ${convertPxToRem(48)};
        --spacing-800: ${convertPxToRem(64)};
        --spacing-1000: ${convertPxToRem(80)};
        --radius-0: ${convertPxToRem(0)};
        --radius-4: ${convertPxToRem(4)};
        --radius-6: ${convertPxToRem(6)};
        --radius-8: ${convertPxToRem(8)};
        --radius-10: ${convertPxToRem(10)};
        --radius-12: ${convertPxToRem(12)};
        --radius-16: ${convertPxToRem(16)};
        --radius-20: ${convertPxToRem(20)};
        --radius-24: ${convertPxToRem(24)};
        --radius-full: ${convertPxToRem(999)};
        /* typography scale */
        --font-family-base: "Noto Sans", sans-serif;
        --font-weight-regular: 400;
        --font-weight-medium: 500;
        --font-weight-bold: 700;
        --font-size-16: ${convertPxToRem(16)};
        --font-size-20: ${convertPxToRem(20)};
        --font-size-34: ${convertPxToRem(34)};
        --line-height-100: 100%;
        --line-height-120: 120%;
        --line-height-140: 140%;
        --letter-spacing-1: ${convertPxToRem(-1)};
        --letter-spacing-2: ${convertPxToRem(-0.2)};
        --letter-spacing-3: ${convertPxToRem(-0.3)};
        --letter-spacing-5: ${convertPxToRem(-0.5)};
        --textPresetOne-fontSize: var(--font-size-34);
        --textPresetOne-lineHeight: var(--line-height-100);
        --textPresetOne-letterSpacing: var(--letter-spacing-1);
        --textPresetOne-fontWeight: var(--font-weight-bold);
        --textPresetTwo-fontSize: var(--font-size-20);
        --textPresetTwo-lineHeight: var(--line-height-120);
        --textPresetTwo-letterSpacing: var(--letter-spacing-2);
        --textPresetTwo-fontWeight: var(--font-weight-bold);
        --textPresetThree-fontSize: var(--font-size-20);
        --textPresetThree-lineHeight: var(--line-height-140);
        --textPresetThree-letterSpacing: var(--letter-spacing-3);
        --textPresetThree-fontWeight: var(--font-weight-regular);
        --textPresetFour-fontSize: var(--font-size-20);
        --textPresetFour-lineHeight: var(--line-height-140);
        --textPresetFour-letterSpacing: var(--letter-spacing-3);
        --textPresetFour-fontWeight: var(--font-weight-medium);
        --textPresetFive-fontSize: var(--font-size-16);
        --textPresetFive-lineHeight: var(--line-height-140);
        --textPresetFive-letterSpacing: var(--letter-spacing-5);
        --textPresetFive-fontWeight: var(--font-weight-regular);
        --textPresetSix-fontSize: var(--font-size-16);
        --textPresetSix-lineHeight: var(--line-height-140);
        --textPresetSix-letterSpacing: var(--letter-spacing-5);
        --textPresetSix-fontWeight: var(--font-weight-medium);
      }

      /* base reset */
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      * {
        margin: 0;
        padding: 0;
      }

      body {
        line-height: 1.1;
        -webkit-font-smoothing: antialiased;
      }

      img,
      picture,
      video,
      canvas,
      svg {
        display: block;
        max-width: 100%;
      }

      input,
      button,
      textarea,
      select {
        font: inherit;
      }

      p,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        overflow-wrap: break-word;
      }

      p {
        text-wrap: pretty;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        text-wrap: balance;
      }

      #root,
      #__next {
        isolation: isolate;
      }

      /* typography */
      @font-face {
        font-family: "Noto Sans";
        src: url("../assets/fonts/static/NotoSans-Regular.ttf");
        font-weight: 400;
        font-style: normal;
        font-display: swap;
      }
      
      @font-face {
        font-family: "Noto Sans";
        src: url("../assets/fonts/static/NotoSans-Medium.ttf");
        font-weight: 500;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: "Noto Sans";
        src: url("../assets/fonts/static/NotoSans-Bold.ttf");
        font-weight: 700;
        font-style: normal;
        font-display: swap;
      }

      body {
        font-family: var(--font-family-base);
      }

    `}
	/>
);
