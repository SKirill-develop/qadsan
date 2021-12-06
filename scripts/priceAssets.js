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
  ELPPA,
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
    .then((resp) => {
     if(resp.records.length > 0) {
      return resp.records[0].open_r.d / resp.records[0].open_r.n;
     }else{
       return 0
     }
    })
    .then((price) => {
      content.querySelector(".assets__price_now_in_doll").textContent =
        "$" + (price / 100).toFixed(7);
      content.querySelector(".assets__price_now").textContent =
        price.toFixed(7) + " QADSAN";
      getPriceYesterday(asset, content, price);
    })
    .catch(function (err) {
      console.error(err);
    });
};

const getPriceYesterday = (asset, content, price) => {
  const base = QADSAN;
  const counter = asset;
  const now = new Date();
  const startTime24 = now.getTime() - 172800000;
  const endTime24 = now.getTime() - 86400000;
  const resolution = 3600000;
  const offset = 0;

  server
    .tradeAggregation(base, counter, startTime24, endTime24, resolution, offset)
    .limit(1)
    .order("desc")
    .call()
    .then((resp) => resp.records[0].open_r.d / resp.records[0].open_r.n)
    .then((priceYesterdey) => {
      const procent = ((price - priceYesterdey) / priceYesterdey) * 100;
      return procent;
    })
    .then((procent) => {
      if (procent > 0) {
        content.querySelector(".assets__price_variance_24").textContent =
          "+" + procent.toFixed(2) + "%";
      } else {
        content.querySelector(".assets__price_variance_24").textContent =
          procent.toFixed(2) + "%";
        content.querySelector(".assets__price_variance_24").style.color = "red";
      }
    })
    .then(() => {
      getPrice12(asset, content, price);
    })
    .catch(function (err) {
      console.error(err);
    });
};

const getPrice12 = (asset, content, price) => {
  const base = QADSAN;
  const counter = asset;
  const now = new Date();
  const startTime12 = now.getTime() - 86400000;
  const endTime12 = now.getTime() - 43200000;
  const resolution = 3600000;
  const offset = 0;

  server
    .tradeAggregation(base, counter, startTime12, endTime12, resolution, offset)
    .limit(1)
    .order("desc")
    .call()
    .then((resp) => resp.records[0].open_r.d / resp.records[0].open_r.n)
    .then((priceYesterdey) => {
      const procent = ((price - priceYesterdey) / priceYesterdey) * 100;
      return procent;
    })
    .then((procent) => {
      if (procent > 0) {
        content.querySelector(".assets__price_variance_12").textContent =
          "+" + procent.toFixed(2) + "%";
      } else {
        content.querySelector(".assets__price_variance_12").textContent =
          procent.toFixed(2) + "%";
        content.querySelector(".assets__price_variance_12").style.color = "red";
      }
    })
    .then(() => {
      getPrice6(asset, content, price);
    })
    .catch(function (err) {
      console.error(err);
    });
};

const getPrice6 = (asset, content, price) => {
  const base = QADSAN;
  const counter = asset;
  const now = new Date();
  const startTime6 = now.getTime() - 43200000;
  const endTime6 = now.getTime() - 21600000;
  const resolution = 3600000;
  const offset = 0;

  server
    .tradeAggregation(base, counter, startTime6, endTime6, resolution, offset)
    .limit(1)
    .order("desc")
    .call()
    .then((resp) => resp.records[0].open_r.d / resp.records[0].open_r.n)
    .then((priceYesterdey) => {
      const procent = ((price - priceYesterdey) / priceYesterdey) * 100;
      return procent;
    })
    .then((procent) => {
      if (procent > 0) {
        content.querySelector(".assets__price_variance_6").textContent =
          "+" + procent.toFixed(2) + "%";
      } else {
        content.querySelector(".assets__price_variance_6").textContent =
          procent.toFixed(2) + "%";
        content.querySelector(".assets__price_variance_6").style.color = "red";
      }
      content.querySelector(".loader__charts").classList.add("not-active");
    })
    .catch(function (err) {
      console.error(err);
    });
};

export const price = async () => {
  await getPrice(ALSET, ALSETContent);
  await getPrice(ELPPA, ELLPAContent);
  await getPrice(ELGOOG, ELGOOGContent);
  await getPrice(EKIN, EKINContent);
  await getPrice(EKOOBECAF, KOOBECAFContent);
  await getPrice(ISPEP, ISPEPContent);
  await getPrice(MARGELET, MARGALETContent);
  await getPrice(ASIV, ASIVContent);
  await getPrice(TFOSORCIM, TFOSORCIMContent);
  await getPrice(LAPYAP, LAPYAPContent);
};
