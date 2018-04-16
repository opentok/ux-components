import { withInfo } from "@storybook/addon-info";
const wInfoStyle = {
  header: {
    h1: {
      fontFamily: "sans-serif",
      fontWeight: "300",
      marginRight: "20px",
      fontSize: "32px",
      display: "inline"
    },
    body: {
      paddingTop: 0,
      paddingBottom: 0,
      marginBottom: 0,
    },
    h2: {
      display: "inline",
      fontFamily: "sans-serif",
      fontWeight: "300",
      color: "#999",
    }
  },
  infoBody: {
    fontFamily: "sans-serif",
    fontWeight: "300",
    backgroundColor: "#eee",
    padding: "10px",
    lineHeight: "2",
    h1: {
      fontFamily: "sans-serif",
      fontWeight: "300",
    },
    h2: {
      fontFamily: "sans-serif",
      fontWeight: "300",
    },
  },
  source: {
    h1: {
      fontFamily: "sans-serif",
      fontWeight: "300",
      marginTop: "10px",
    },
    h2: {
      fontFamily: "sans-serif",
      fontWeight: "300",
    },
  },
  propTableHead: {
    fontFamily: "sans-serif",
    fontWeight: 300,
    marginTop: "5px"
  }
};
export const wInfo = text => withInfo({ inline: true, source: false, styles: wInfoStyle, text: text });
