import React from "react";
import Container from "@material-ui/core/Container";

export const Layout = (props: any) => {
  return (
    <>
      <Container maxWidth="sm">{props.children}</Container>
    </>
  );
};
