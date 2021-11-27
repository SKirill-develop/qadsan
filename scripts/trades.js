import { server, trades, XLM, QADSAN, AllAssetsForTrade } from "./constants.js";

const tradesList = resp => {
  console.log("resp: ", resp);
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
  operatElement.querySelector(".wallet_buy").textContent =
    resp.base_account.slice(0, 5) + "..." + resp.base_account.slice(-5);
  operatElement.querySelector(".wallet_sell").textContent =
    resp.counter_account.slice(0, 5) + "..." + resp.counter_account.slice(-5);
  operatElement.querySelector(".buy_amount").textContent =
    baseAmount.toFixed(5);
  operatElement.querySelector(".wallet_link_buy").href =
    "https://stellar.expert/explorer/public/account/" + resp.base_account;
  operatElement.querySelector(".wallet_link_sell").href =
    "https://stellar.expert/explorer/public/account/" + resp.counter_account;
  operatElement.querySelector(".sell_amount").textContent =
    counterAmount.toFixed(5);
  operatElement.querySelector(".date").textContent = resp.ledger_close_time;
  operatElement.querySelector(".asset_buy_code").textContent =
    resp.base_asset_code;
  operatElement.querySelector(".asset_sell_code").textContent =
    resp.counter_asset_code;

  trades.prepend(operatElement);

  const deleteButton = document.querySelectorAll(".popup__close");
  const blocks = document.querySelectorAll(".operations__list");

  if (blocks.length > 5) {
    trades.lastElementChild.remove();
  }

  deleteButton.forEach((item) => {
    item.addEventListener("click", function () {
      blocks.forEach(item => item.remove());
    })
  })
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

export const checkTrade = () => {
  tradesOnline(QADSAN, XLM);
  tradesOnline(XLM, QADSAN);
  AllAssetsForTrade.forEach((asset) => {
    tradesOnline(asset, QADSAN);
  });
  AllAssetsForTrade.forEach((asset) => {
    tradesOnline(QADSAN, asset);
  });
};
