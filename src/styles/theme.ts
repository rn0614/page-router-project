
const pixelToRem = (size:number) => `${size / 16}rem`

const breakPoint = {
  mobile: "600px",
  tablet: "1024px",
  labtop: "1280px",
};

const spacing = {
  xxxs: "0.25rem",
  xxs: "0.5rem",
  xs: "0.75rem",
  sm: "1rem",
  md: "1.5rem",
  lg: "2rem",
  xl: "3rem",
  xxl: "4.5rem",
  xxxl: "6rem",
};

const font = {
  primary: "Helvetica Neue, Helvetica, Roboto, sans-serif",
  pre: "Consolas, Liberation Mono, Menlo, Courier, monospace",
  quote: "Georgia, serif",
};

const palette={
  inherit:'inherit',
  primary:['#0e7cf4','#fff','#a0edf7'],
  secondary:'secondary',
  success:'success',
  error:'error',
  info:'info',
  warning:'warning',
}

const fontSize = {
  xs: "0.75rem",
  sm: "0.875rem",
  base: "1rem",
  lg: "1.125rem",
  xl: "1.5rem",
};

const HeadingSize = {
  h1: ["3.5rem", "5rem"],
  h2: ["3rem", "4rem"],
  h3: ["2rem", "3rem"],
  h4: ["1.5rem", "2rem"],
  h5: ["1.125rem", "1.5rem"],
  h6: ["0.75rem", "1.125rem"],
};

const LinkSize = {
  large: ["1.25rem", "1.5rem"],
  normal: ["1.25rem", "1.5rem"],
  medium: ["1rem", "1.25rem"],
  small: ["0.875rem", "1rem"],
};

const fontWeight = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

//[font-size, line-height, padding-updown, padding-side]
const buttonSize = {
  xs: ["0.875rem", "1rem", "0.5rem", "1.5rem"],
  sm: ["0.875rem", "1rem", "0.75rem", "1.5rem"],
  md: ["1rem", "1.25rem", "0.875rem", "2rem"],
  lg: ["1.25rem", "1.5rem", "1rem", "2rem"],
  xl: ["1.25rem", "1.5rem", "1.25rem", "2rem"],
};
const color = {
  main: "#074684",
  sub1: "#0e7cf4",
  sub2: "#0ea5c6",
  sub3: "#a0edf7",
  sub4: "#f2efb6",
  sub5: "#faf15d",
};

const buttonVariant = {
  contained: "contained",
  outlined: "outlined",
  text: "text",
  string: "string",
};

const theme = {
  breakPoint,
  font,
  fontSize,
  fontWeight,
  HeadingSize,
  LinkSize,
  spacing,
  buttonSize,
  buttonVariant,
  color,
  palette
};

export default theme;
