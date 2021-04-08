import { TOrder, TSide } from "@types";

export interface AppProps {
  children: JSX.Element | JSX.Element[];
}
export interface IPropAsset {
  asset: TOrder;
  type: TSide;
}
