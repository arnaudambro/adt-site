const black = "rgba(19,21,22,1)"
export const white = "rgba(252,252,252,1)"
export const grey = "rgba(235,234,239,1)"
export const darkGrey = "rgba(200,200,200,1)"
const boxShadow = "0px 0px 26px 0px rgba(220,220,220,0.5)"

const dividerWidth = 1000
const sideColumnWidth = 380

const theme = {
  color: {
    black,
    white,
    primary: black,
    grey,
    darkGrey,
    leftPanelBg: "rgba(243,242,242,1.00)",
    mainContentBg: "rgba(249,248,248,1.00)",
    defaultColor: "rgba(116,122,141,1.00)",
    defaultColorFaded: "rgba(116,122,141,0.17)",
  },
  boxShadow: {
    default: boxShadow,
  },
  zIndex: {},
  borderRadius: {},
  height: {
    header: 160,
    menuItem: 17,
    logo: 70 * 0.75,
    desktop: {
      logo: 70,
      logoLine: 64,
      menuItem: 20,
    },
  },
  width: {
    min: {
      app: 315,
    },
    max: {
      app: 490,
      headerColumn: 300,
      content: (dividerWidth - sideColumnWidth) * 0.75,
    },
    arrows: 50,
    hideScrollbar: 18,
    scrollBar: 14,
    logo: 150 * 0.75,
    indicator: 15,
    material: 280,
    desktop: {
      material: 385,
      logo: 150,
      sideColumn: sideColumnWidth,
      centerColumn: 300,
      divider: dividerWidth,
      indicator: 30,
    },
  },
  margin: {
    top: {
      content: 34,
    },
    bottom: {
      projetName: 18,
      contentSummary: 30,
      contentItem: 30,
    },
    right: {
      indicator: 5,
      desktop: {
        indicator: 15,
      },
    },
    left: {
      indicator: 7,
      desktop: {
        indicator: 35,
      },
    },
    X: {
      min: {
        app: 16,
      },
    },
  },
  padding: {
    X: {
      header: 16,
      content: 16,
    },
    Y: {
      header: 25,
      desktop: {
        main: 236,
      },
    },
  },
  duration: {},
}

export default theme
