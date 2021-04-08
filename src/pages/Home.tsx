import zipmex from "zipmex.svg";
import { useOrder } from "hooks";
import { AssetTable, OrderForm } from "components";
import { orderBookStream } from "helpers";
import { TOrderForm } from "@types";

const Home = () => {
  const { sell, buy } = useOrder();
  const handleSubmitOrder: TOrderForm["submitOrder"] = (
    side,
    { price, amount }
  ) => orderBookStream.addOrder(side, { price, amount });
  return (
    <>
      <header className="App-header">
        <img src={zipmex} className="App-logo" alt="logo" />
      </header>
      <OrderForm submitOrder={handleSubmitOrder} />
      <AssetTable assetList={buy} type="buy" />
      <AssetTable assetList={sell} type="sell" />
    </>
  );
};

export default Home;
