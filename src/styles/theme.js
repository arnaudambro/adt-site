
const black = 'rgba(19,21,22,1)'
export const white = 'rgba(252,252,252,1)'
export const grey = 'rgba(235,234,239,1)'
export const darkGrey = 'rgba(200,200,200,1)'
const boxShadow = '0px 0px 26px 0px rgba(220,220,220,0.5)'

const theme = {
  color: {
    black,
    white,
    primary: black,
    grey,
    darkGrey,
    leftPanelBg: 'rgba(243,242,242,1.00)',
    mainContentBg: 'rgba(249,248,248,1.00)',
    defaultColor: 'rgba(116,122,141,1.00)',
    defaultColorFaded: 'rgba(116,122,141,0.17)',
  },
  boxShadow: {
    default: boxShadow
  },
  zIndex: {},
  borderRadius: {
  },
  height: {
    header: 160,
    menuItem: 20,
    logo: 170 * 60 / 96,
    desktop: {
      logo: 250 * 60 / 96,
    }
  },
  width: {
    min: {
      app: 315
    },
    max: {
      headerColumn: 300
    },
    logo: 170,
    desktop: {
      logo: 250,
    }

  },
  margin: {
    top: {
      content: 34
    },
    bottom: {
    },
    right: {
    },
    left: {
    }
  },
  padding: {
    X: {
      header: 16,
      content: 16,
    },
    Y: {
      header: 25
    }
  },
  duration: {}
}

export default theme
