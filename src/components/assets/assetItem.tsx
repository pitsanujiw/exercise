import { TableCell, TableRow } from "@material-ui/core";

import clsx from "clsx";

import { PriceDirection } from "constant";
import { useLivePrice } from "hooks";
import { Format } from "helpers";
import { useStyles } from "./assets.theme";
import { IPropAsset } from "@types";

export const AssetItem: React.FC<IPropAsset> = ({
  asset,
  type,
}: IPropAsset) => {
  const classes = useStyles();
  const { direction } = useLivePrice(asset.price, type);

  return (
    <TableRow
      className={clsx(classes.table, classes.asset, {
        [classes.up]: direction === PriceDirection.UP,
        [classes.down]: direction === PriceDirection.DOWN,
      })}
    >
      <TableCell align="center" className={classes.text}>
        {Format.currency(parseFloat(asset.price))}
      </TableCell>
      <TableCell align="center" className={classes.text}>
        {Format.currency(parseFloat(asset.amount))}
      </TableCell>
    </TableRow>
  );
};
