import React from "react";
import { PulseLoader } from "react-spinners";
import { Fade, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(
  (theme) => ({
    loading: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "fixed",
      backgroundColor: theme.palette.common.white,
      zIndex: 1103,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  }),
  {
    name: "Loading",
  }
);

export const LoadingContent: React.FC = (): React.ReactElement => {
  const classes = useStyles();

  return (
    <Fade in={true}>
      <div className={classes.loading}>
        <PulseLoader color={'#183047'} />
      </div>
    </Fade>
  );
};
