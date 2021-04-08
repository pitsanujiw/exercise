import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
  Paper,
  TableRow,
  Box,
} from "@material-ui/core";
import { TOrder, TSide } from "@types";
import clsx from "clsx";
import { Format } from "helpers";
import { AssetItem } from "./assetItem";
import { useStyles } from "./assets.theme";

export const AssetTable = ({
  assetList,
  type,
}: {
  assetList: TOrder[];
  type: TSide;
}) => {
  const classes = useStyles();
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow className={classes.table}>
              <TableCell align="center" className={classes.table}>
                Price (USD)
              </TableCell>
              <TableCell align="center" className={classes.table}>
                Amount (USD)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {assetList.map((asset, index) => (
              <AssetItem asset={asset} key={index} type={type} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        className={clsx({
          [classes.title_up]: type === "buy",
          [classes.title_down]: type === "sell",
        })}
      >
        {Format.currency(
          assetList.reduce(
            (accumulator, value) => accumulator + parseFloat(value.amount),
            0
          )
        )}
      </Box>
    </>
  );
};
