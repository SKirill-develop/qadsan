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

const getPrice = async (asset, content) => {
  const base = QADSAN;
  const counter = asset;
  const now = new Date();
  const startTime = now.getTime() - 21600000;
  const endTime = now.getTime();
  const resolution = 3600000;
  const offset = 0;

  server
    .tradeAggregation(base, counter, startTime, endTime, resolution, offset)
    .limit(1)
    .call()
    .then(resp => resp.records[0].open_r.d / resp.records[0].open_r.n)
    .then(price => {
      content.querySelector(".assets__price_now_in_doll").textContent = '$' + (price/100).toFixed(7);
      content.querySelector(".assets__price_now").textContent = price.toFixed(7) + ' QADSAN';
      getPriceYesterday(asset, content, price);
      getPrice12(asset, content, price)
      getPrice6(asset, content, price)
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
    .then(resp => resp.records[0].open_r.d / resp.records[0].open_r.n)
    .then(priceYesterdey => {
      const procent = (price - priceYesterdey)/priceYesterdey * 100;
      return procent;
    })
    .then(procent => {
    if (procent > 0){
      content.querySelector(".assets__price_variance_24").textContent = '+' + procent.toFixed(2) + '%';
    } else {
      content.querySelector(".assets__price_variance_24").textContent =  procent.toFixed(2) + '%';
      content.querySelector(".assets__price_variance_24").style.color = 'red';
    }
    })
    .catch(function (err) {
      console.error(err);
    });
};

const getPrice12 = (asset, content, price) => {
  const base = QADSAN;
  const counter = asset;
  const now = new Date();
  const startTime = now.getTime() - 86400000;
  const endTime = now.getTime() - 43200000;
  const resolution = 3600000;
  const offset = 0;

  server
    .tradeAggregation(base, counter, startTime, endTime, resolution, offset)
    .limit(1)
    .order("desc")
    .call()
    .then(resp => resp.records[0].open_r.d / resp.records[0].open_r.n)
    .then(priceYesterdey => {
      const procent = (price - priceYesterdey)/priceYesterdey * 100;
      return procent;
    })
    .then(procent => {
    if (procent > 0){
      content.querySelector(".assets__price_variance_12").textContent = '+' + procent.toFixed(2) + '%';
    } else {
      content.querySelector(".assets__price_variance_12").textContent =  procent.toFixed(2) + '%';
      content.querySelector(".assets__price_variance_12").style.color = 'red';
    }
    })
    .catch(function (err) {
      console.error(err);
    });
};

const getPrice6 = (asset, content, price) => {
  const base = QADSAN;
  const counter = asset;
  const now = new Date();
  const startTime = now.getTime() - 43200000;
  const endTime = now.getTime() - 21600000;
  const resolution = 3600000;
  const offset = 0;

  server
    .tradeAggregation(base, counter, startTime, endTime, resolution, offset)
    .limit(1)
    .order("desc")
    .call()
    .then(resp => resp.records[0].open_r.d / resp.records[0].open_r.n)
    .then(priceYesterdey => {
      const procent = (price - priceYesterdey)/priceYesterdey * 100;
      return procent;
    })
    .then(procent => {
    if (procent > 0){
      content.querySelector(".assets__price_variance_6").textContent = '+' + procent.toFixed(2) + '%';
    } else {
      content.querySelector(".assets__price_variance_6").textContent =  procent.toFixed(2) + '%';
      content.querySelector(".assets__price_variance_6").style.color = 'red';
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
