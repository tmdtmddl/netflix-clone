import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import OpenColor from "open-color";

const icon = style({
  width: 30,
  height: 30,
  borderRadius: 20,
  backgroundColor: "transparent",
  border: "2px solid",
  color: OpenColor.gray[0],
  padding: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
});

const styles = {
  container: style({
    position: "relative",
  }),
  hover: {
    container: recipe({
      base: {
        border: "1px solid",
        position: "absolute",
        visibility: "hidden",
        opacity: 0,
        transform: "scale(.5)",
        transition: "all .3s",
        backgroundColor: OpenColor.gray[8],
        color: OpenColor.gray[0],
        width: "100%",
        zIndex: 1,
      },
      variants: {
        isHovering: {
          true: {
            borderColor: "tomato",
            visibility: "visible",
            opacity: 1,
            transform: "scale(1)",
          },
        },
      },
    }),
    icons: {
      wrap: style({
        display: "flex",
        justifyContent: "space-between",
      }),
      ul: style({ display: "flex", columnGap: 10 }),
    },
    play: style([
      icon,
      {
        border: "none",
        backgroundColor: OpenColor.gray[0],
        color: OpenColor.gray[9],
      },
    ]),
    div: style({
      // width: 100,
      height: 4,
      borderRadius: 1,
      backgroundColor: OpenColor.gray[7],
      width: "100%",
    }),
    span: style({
      backgroundColor: OpenColor.red[7],
      width: "10%",
      height: "100%",
      display: "block",
      transition: "all .2s",
    }),
    time: style({}),
    icon,
    img: style({
      width: "100%",
      objectFit: "cover",
      height: 120,
    }),
    wrap: style({
      padding: 20,
    }),
    times: style({
      display: "flex",
      alignItems: "center",
      columnGap: 20,
      marginTop: 20,
    }),
  },
};

export default styles;
