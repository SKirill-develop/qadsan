import {
  server,
  ALSETContent,
  ELLPAContent,
  ELGOOGContent,
  EKINContent,
  KOOBECAFContent,
  ISPEPContent,
  MARGALETContent,
  ASIVContent,
  TFOSORCIMContent,
  LAPYAPContent,
  QADSAN,
  ALSET,
  ELGOOG,
  ASIV,
  LAPYAP,
  EKIN,
  EKOOBECAF,
  TFOSORCIM,
  ISPEP,
  MARGELET,
  ELPPA
} from "./constants.js";

const getPrice = (asset, content) => {
  const base = QADSAN;
  const counter = asset;
  const now = new Date();
  const startTime = now.getTime() - 86400000;
  const endTime = now.getTime();
  const resolution = 3600000;
  const offset = 0;

  server
    .tradeAggregation(base, counter, startTime, endTime, resolution, offset)
    .limit(1)
    .call()
    .then(resp => resp.records[0].close_r.d / resp.records[0].close_r.n)
    .then(price => {
      content.querySelector(".assets__price_now").textContent = price;
      getPriceYesterday(asset, content, price)
    })
    .catch(function (err) {
      console.error(err);
    });
};

const getPriceYesterday = (asset, content, price) => {
  const base = QADSAN;
  const counter = asset;
  const now = new Date();
  const startTime = now.getTime() - 172800000;
  const endTime = now.getTime() - 86400000;
  const resolution = 3600000;
  const offset = 0;

  server
    .tradeAggregation(base, counter, startTime, endTime, resolution, offset)
    .limit(1)
    .order("desc")
    .call()
    .then(resp => resp.records[0].close_r.d / resp.records[0].close_r.n)
    .then(priceYesterdey => {
      const procent = (price - priceYesterdey)/priceYesterdey * 100;
      return procent;
    })
    .then(procent => {
    if (procent > 0){
      content.querySelector(".assets__price_variance").textContent = '+' + procent.toFixed(2) + '%';
    } else {
      content.querySelector(".assets__price_variance").textContent = procent.toFixed(2) + '%';
      content.querySelector(".assets__price_variance").style.color = 'red';
    }


    })
    .catch(function (err) {
      console.error(err);
    });
};

export const price = () => {
  getPrice(ALSET, ALSETContent);
  getPrice(ELPPA, ELLPAContent);
  getPrice(ELGOOG, ELGOOGContent);
  getPrice(EKIN, EKINContent);
  getPrice(EKOOBECAF, KOOBECAFContent);
  getPrice(ISPEP, ISPEPContent);
  getPrice(MARGELET, MARGALETContent);
  getPrice(ASIV, ASIVContent);
  getPrice(TFOSORCIM, TFOSORCIMContent);
  getPrice(LAPYAP, LAPYAPContent);
};
