import { fade, makeStyles } from '@material-ui/core';
import { DURATION } from 'constant';

export const useStyles = makeStyles(
    (theme) => ({
      asset: {
        cursor: "default",
        color: theme.palette.common.white,
        transition: theme.transitions.create(["background-color"], {
          duration: DURATION,
        }),
      },
      up: {
        backgroundColor: `${fade(theme.palette.success.main, 0.4)} !important`,
        color: `${theme.palette.common.black}`,
      },
      down: {
        backgroundColor: `${fade(theme.palette.error.main, 0.4)} !important`,
        color: `${theme.palette.common.black}`,
      },
      text: {
        color: theme.palette.common.white,
      },
      table: {
        backgroundColor: "#14202c",
        color: theme.palette.common.white,
      },
      title_up: {
        fontSize: `1.5rem`,
        padding: `1rem`,
        color: fade(theme.palette.success.main, 0.3),
        borderRadius: theme.shape.borderRadius,
      },
      title_down: {
        fontSize: `1.5rem`,
        padding: `1rem`,
        color: fade(theme.palette.error.main, 0.3),
        borderRadius: theme.shape.borderRadius,
      },
    }),
    {
      name: "AssetItem",
    }
  );