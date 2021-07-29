import { Typography } from "@material-ui/core";
import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        color: "white",
        textAlign: "center",
      }}
    >
      <Typography style={{ color: "white" }} variant="h5">
        Made by{" "}
        <a
          style={{ marginLeft: "10px" }}
          href="https://tadesseabel.com/"
          target="_blank"
          rel="noreferrer"
        >
          Abel
        </a>
      </Typography>
    </footer>
  );
}
