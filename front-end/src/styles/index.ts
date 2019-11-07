import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: Nanum Brush Script;
        src: url(/fonts/NanumBrushScript-Regular.ttf) format('woff2'),
            url(/fonts/NanumBrushScript-Regular.ttf) format('woff'),
            url(/fonts/NanumBrushScript-Regular.ttf) format('truetype');
    }
    @font-face {
        font-family: Nanum Pen Script;
        src: url(/fonts/NanumPenScript-Regular.ttf) format('woff2'),
            url(/fonts/NanumPenScript-Regular.ttf) format('woff'),
            url(/fonts/NanumPenScript-Regular.ttf) format('truetype');
    }
    @font-face {
        font-family: Yeon Sung;
        src: url(/fonts/YeonSung-Regular.ttf) format('woff2'),
            url(/fonts/YeonSung-Regular.ttf) format('woff'),
            url(/fonts/YeonSung-Regular.ttf) format('truetype');
    }
    body {
        font-family: Yeon Sung, Nanum Brush Script, Nanum Pen Script;
        background: #ecf0f1;
        margin: 0;
    }
`;

export { GlobalStyle };
