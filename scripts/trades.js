import { server, trades, XLM, QADSAN, AllAssetsForTrade, tradesContent } from "./constants.js";

const tradesList = (resp) => {
  if (resp.counter_asset_type === "native") {
    resp.counter_asset_code = "XLM";
  }
  if (resp.base_asset_type === "native") {
    resp.base_asset_code = "XLM";
  }
  const baseAmount = Number(resp.base_amount);
  const counterAmount = Number(resp.counter_amount);
  const operatElement = document
    .querySelector("#trades-List")
    .content.cloneNode(true);
  operatElement.querySelector(".buy_amount").textContent =
    baseAmount.toFixed(2);
  operatElement.querySelector(".sell_amount").textContent =
    counterAmount.toFixed();
  operatElement.querySelector(".asset_buy_code").textContent =
  ' ' + resp.base_asset_code;
  operatElement.querySelector(".asset_sell_code").textContent =
  ' ' + resp.counter_asset_code;
  operatElement.querySelector(".operations__price").textContent =
  (counterAmount/baseAmount).toFixed(6);
  operatElement.querySelector('.operations__link').href =
  ('https://stellar.expert/explorer/public/account/'+resp.counter_account);

  if(trades.classList.contains('not-active')){
    trades.classList.remove('not-active');
  }
  tradesContent.prepend(operatElement);

  const blocks = document.querySelectorAll(".operations__list");

  if (blocks.length > 3) {
    tradesContent.lastElementChild.remove();
  }
};

const tradesOnline = (AssetSell, AssetBuy) => {
  const tradesHandler = async function (resp) {
    tradesList(resp);
  };

  let es = server
    .trades()
    .forAssetPair(AssetSell, AssetBuy)
    .cursor("now")
    .stream({ onmessage: tradesHandler });
};

export const checkTrade = async () => {
  await tradesOnline(XLM, QADSAN);
  AllAssetsForTrade.forEach((asset) => {
    setTimeout(() =>
    tradesOnline(asset, QADSAN)
    , 2000)
  });
};
