import { style } from "@vanilla-extract/css";
import OpenColor from "open-color";
const styles = {
  form: style({
    display: "flex",
    flexDirection: "column",
    padding: 30,
    rowGap: 20,
  }),
  login: style({
    backgroundColor: OpenColor.red[7],
    color: OpenColor.gray[0],
  }),
  forgot: style({
    backgroundColor: "transparent",
    ":hover": {
      textDecoration: "underline",
    },
  }),
  new: style({
    backgroundColor: "transparent",
    textAlign: "left",
    paddingLeft: 0,
    color: OpenColor.gray[5],
  }),
  span: style({
    color: OpenColor.gray[1],
  }),
};

export default styles;
