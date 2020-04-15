export const colors = {
  // primary: "#",
  // primaryLight: "#",
  primaryDark: "#2C3E50",
  primaryActive: "#18BC9C",
  // primaryDisabled: "#",
  // primaryHelp: "#",

  // secondary: "#",
  // secondaryLight: "#",
  // secondaryDark: "#",
  // secondaryActive: "#",
  // secondaryDisabled: "#",
  // secondaryHelp: "#",

  // complementary: "#",
  // complementaryLight: "#",
  // complementaryDark: "#",
  // complementaryActive: "#",
  // complementaryDisabled: "#",
  // complementaryHelp: "#",

  dim: "#DCE4EC",
  dimLight: "#ECF0F1",
  dimDark: "#7B8A8B",
  // dimActive: "#",
  // dimDisabled: "#",
  // dimHelp: "#",

  // success: "green",
  // successLight: "#",
  // successDark: "#",
  // successActive: "#",
  // successDisabled: "#",
  // successHelp: "#",

  // info: "#",
  // infoLight: "#",
  // infoDark: "#",
  // infoActive: "#",
  // infoDisabled: "#",
  // infoHelp: "#",

  // notice: "#",
  // noticeLight: "#",
  // noticeDark: "#",
  // noticeActive: "#",
  // noticeDisabled: "#",
  // noticeHelp: "#",

  // warning: "#",
  // warningLight: "#",
  // warningDark: "#",
  // warningActive: "#",
  // warningDisabled: "#",
  // warningHelp: "#",

  // error: "#",
  // errorLight: "#",
  // errorDark: "#",
  // errorActive: "#",
  // errorDisabled: "#",
  // errorHelp: "#",

  white: "#f5f5f5", // "whitesmoke"
  black: "#1a1a1a",
  shadow: "rgba(0, 0, 0, 0.15)",
  invisible: "rgba(0, 0, 0, 0)",
};

export const layout = {
  breakpoints: {
    tiny: "20rem", // 320px
    small: "30rem", // 480px
    medium: "37.5rem", // 600px
    large: "48rem", // 768px
    xlarge: "60rem", // 960px
  },
  borderRadiusTiny: "0.25rem",
  borderRadiusSmall: "0.375rem",
  borderRadiusMedium: "0.5rem",
  border: {
    thin: "0.0625rem", // 1px
    medium: "0.125rem", // 2px
    thick: "0.25rem", // 4px
  },
  buttonBorderRadius: "1.75rem",
  buttonBorderRadiusSmall: "1.375rem",
  buttonBorderRadiusLarge: "3.125rem",
  boxShadow: `0rem 0.0625rem 0.3125rem ${colors.shadow}`,
  spacing: {
    xxlarge: "6rem", // 96px
    xlarge: "3rem", // 48px
    large: "2rem", // 32px
    medium: "1.5rem", // 24px
    body: "1rem", // 16px
    regular: "0.75rem", // 12px
    small: "0.5rem", // 8px
    tiny: "0.25rem", // 4px
  },
  elements: {
    panel: {
      width: {
        tiny: "9.375rem", // 150px
        small: "20rem", // 320px
        medium: "25rem", // 400px
      },
      height: {
        small: "2.5rem", // 40px
        medium: "3.75rem", // 60px
      },
    },
    image: {
      font: {
        xlarge: "3rem",
        large: "2rem",
        medium: "1.5rem",
        body: "1rem",
        small: "0.5rem",
        tiny: "0.25rem",
      },
      svg: {
        xlarge: "48",
        large: "32",
        medium: "24",
        body: "16",
        small: "8",
        tiny: "4",
      },
    },
  },
  zIndexes: {
    cookiePolicyBanner: 800,
    languageSelector: 400,
  },
};
export const typography = {
  font: {
    base: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif;',
    headings: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif;',
  },
  size: {
    xxxlarge: "3rem", // 48px
    xxlarge: "2.5rem", // 40px
    xlarge: "2rem", // 32px
    large: "1.5rem", // 24px
    medium: "1.25rem", // 20px
    body: "1rem", // 16px
    small: "0.875rem", // 14px
    tiny: "0.75rem", // 12px
  },
  weight: {
    heavy: "600",
    medium: "400",
    light: "200",
  },
  lineHeight: {
    xxlarge: "3.5rem", // 56px
    xlarge: "2.5rem", // 40px
    large: "2rem", // 32px
    medium: "1.75rem", // 28px
    body: "1.5rem", // 24px
    small: "1.375rem", // 22px
    tiny: "1.25rem", // 20px
  },
};

export default {
  colors,
  layout,
  typography,
};
