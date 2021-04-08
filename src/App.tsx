import "./App.css";
import { Layout } from "layouts";
import loadable from "@loadable/component";
import { LoadingContent } from "components";

const Home = loadable(() => import("./pages/Home"), {
  fallback: <LoadingContent />,
});


function App() {
  // const handleSubmitOrder: TOrderForm["submitOrder"] = (
  //   side,
  //   { price, amount }
  // ) => {
  //   orderBookStream.addOrder(side, { price, amount });
  // };

  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
