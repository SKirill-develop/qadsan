import {config} from '../scripts/charts.js';
import {trustAsset} from '../scripts/openTrusts.js';
import {checkTrade} from '../scripts/trades.js';
import {alsetChart, ellpaChart, elgoogChart, ekinChart, koobecafChart, ispepChart, margeletChart, asivChart, trosorcimChart, lapyapChart} from '../scripts/constants.js';

checkTrade();

const Alset = new Chart(alsetChart,config);
const Ellpa = new Chart(ellpaChart,config);
const Elgoog = new Chart(elgoogChart,config);
const Ekin = new Chart(ekinChart,config);
const Koobecaf = new Chart(koobecafChart,config);
const Ispep = new Chart(ispepChart,config);
const Margelet = new Chart(margeletChart,config);
const Asiv = new Chart(asivChart,config);
const Trosorcim = new Chart(trosorcimChart,config);
const Lapyap = new Chart(lapyapChart,config);

document.querySelector('.charts__button').addEventListener("click", function () {
  trustAsset()
});


