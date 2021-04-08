import React, { useState } from "react";
import { TOrderForm, TOrderFormData } from "@types";
import {
  createStyles,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Theme,
  Button,
} from "@material-ui/core";

const initialFormData: TOrderFormData = {
  side: "buy",
  price: "",
  amount: "",
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      padding: theme.spacing(2),
      minWidth: 120,
      display: "flex",
      flexDirection: "row",
    },
    input_padding: {
      margin: theme.spacing(1),
      color: theme.palette.common.white,
      "&:hover": {
        color: theme.palette.common.white,
      },
      "&:focused": {
        color: theme.palette.common.white,
      },
    },
    button: {
      height: "40px",
      margin: "auto",
      color: theme.palette.common.white,
      backgroundColor: "#14202c",
    },
    selectEmpty: {
      marginTop: theme.spacing(1),
    },
  })
);

export const OrderForm: React.FC<TOrderForm> = ({ submitOrder }) => {
  const [formData, updateFormData] = useState<TOrderFormData>(initialFormData);
  const classes = useStyles();
  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: any }>
  ) => {
    const name = event.target.name as keyof typeof formData;
    updateFormData({
      ...formData,
      [name]: event.target.value.trim(),
    });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitOrder(formData.side, {
      price: formData.price,
      amount: formData.amount,
    });
  };

  return (
    <div>
      <form className={classes.formControl} onSubmit={onSubmit}>
        <Select
          name="side"
          onChange={handleChange}
          className={classes.input_padding}
        >
          <MenuItem value="buy">Buy</MenuItem>
          <MenuItem value="sell">Sell</MenuItem>
        </Select>
        <TextField
          label="Price"
          name="price"
          variant="filled"
          type="number"
          onChange={handleChange}
          InputProps={{
            className: classes.input_padding,
          }}
        />
        <TextField
          label="Amount"
          name="amount"
          variant="filled"
          type="number"
          onChange={handleChange}
          InputProps={{
            className: classes.input_padding,
          }}
        />
        <Button variant="contained" className={classes.button} type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};
