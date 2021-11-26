import {server, trades, XLM, QADSAN} from './constants.js';

const tradesList = (resp) => {
    console.log('resp: ', resp);
    if(resp.counter_asset_type === "native"){
        resp.counter_asset_code = "XLM";
    }
    if(resp.base_asset_type === "native"){
        resp.base_asset_code = "XLM";
    }
    const baseAmount = Number(resp.base_amount) ;
    const counterAmount = Number(resp.counter_amount);
    let OperatElement = document.querySelector('#trades-List').content.cloneNode(true);
    OperatElement.querySelector('.wallet_buy').textContent = (resp.base_account.slice(0,5) + '...' + resp.base_account.slice(-5));
    OperatElement.querySelector('.wallet_sell').textContent = (resp.counter_account.slice(0,5) + '...' + resp.counter_account.slice(-5));
    OperatElement.querySelector('.buy_amount').textContent = baseAmount.toFixed(5);
    OperatElement.querySelector('.wallet_link_buy').href = ('https://stellar.expert/explorer/public/account/'+resp.base_account);
    OperatElement.querySelector('.wallet_link_sell').href = ('https://stellar.expert/explorer/public/account/'+resp.counter_account);
    OperatElement.querySelector('.sell_amount').textContent = counterAmount.toFixed(5);
    OperatElement.querySelector('.date').textContent = resp.ledger_close_time;
    OperatElement.querySelector('.asset_buy_code').textContent = resp.base_asset_code;
    OperatElement.querySelector('.asset_sell_code').textContent = resp.counter_asset_code;
    trades.prepend(OperatElement);
    let CountBLocks = document.querySelectorAll('.operations__list')
    if (CountBLocks.length > 5){
        trades.lastElementChild.remove();
    }
    const DeleteButton = document.querySelector(".popup__close");
    DeleteButton.addEventListener("click", function (evt) {
    evt.target.parentElement.remove();

});
}

const tradesOnline = (AssetSell, AssetBuy) => {
    const tradesHandler = async function (resp) {
        tradesList(resp);
};

    let es = server
    .trades()
    .forAssetPair(
        AssetSell,
        AssetBuy,
    )
    .cursor("now")
    .stream({ onmessage: tradesHandler });
}

// Все с XLM
export const check = async () =>  {
tradesOnline(QADSAN, XLM);
tradesOnline(XLM, QADSAN);

//AllAssets.forEach ((asset) => {TradesOnline(asset, XLM)});
//AllAssets.forEach ((asset) => {TradesOnline(XLM, asset);});
//Все с QADSAN
// TradesOnline(QADSAN, STABLECENT);
// TradesOnline(STABLECENT, QADSAN);
// TradesOnline(QADSAN, ELGOOG);
// TradesOnline(ELGOOG, QADSAN);
// TradesOnline(QADSAN, ASIV);
// TradesOnline(ASIV, QADSAN);
// TradesOnline(QADSAN, LAPYAP);
// TradesOnline(LAPYAP, QADSAN);
// TradesOnline(QADSAN, ASIV);
// TradesOnline(ASIV, QADSAN);
// TradesOnline(QADSAN, EKIN);
// TradesOnline(EKIN, QADSAN);
// TradesOnline(QADSAN, EKOOBECAF);
// TradesOnline(EKOOBECAF, QADSAN);
// TradesOnline(QADSAN, TFOSORCIM);
// TradesOnline(TFOSORCIM, QADSAN);
// TradesOnline(QADSAN, ELPPA);
// TradesOnline(ELPPA, QADSAN);
// TradesOnline(QADSAN, ALSET);
// TradesOnline(ALSET, QADSAN);
}
