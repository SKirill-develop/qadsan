import {config} from '../scripts/charts.js'
import {alsetChart, ellpaChart, elgoogChart, ekinChart, koobecafChart, ispepChart, margeletChart, asivChart, trosorcimChart, lapyapChart} from '../scripts/constants.js'

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

var url = './scripts/api.php?x=hello';

let myObj = {1:2, 2:3}
fetch(url, {
method: "GET",
})
.then(function (response) {
  return response.json();
})
.then(function (body) {
  console.log(body);
});
