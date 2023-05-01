import { css } from "styled-components";

export const theme = css`
  html[theme="light"] {
    --primary: #313037;
    --primary2: #5b5a62;
    --secondary: #a8a8a8;
    --white: #ffffff;
    --gray: #e7e7e7;
    --light: #f7f7f7;
    --red: #fc857f;
    --blue: #d7e4fd;
    --green: #caeff0;
    --orange: #fee9e2;
    --purple: #f4eefd;
    --white2: #ffffff;
  }

  html[theme="dark"] {
    --primary: #f7f7f7;
    --primary2: #ffffff;
    --secondary: #e7e7e7;
    --white: #5b5a62;
    --gray: #a8a8a8;
    --light: #313037;
    --red: #fc857f;
    --blue: #d7e4fd;
    --green: #caeff0;
    --orange: #fee9e2;
    --purple: #a8a8a8;
    --white2: #ffffff;
  }
`;
