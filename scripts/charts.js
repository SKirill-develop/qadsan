const date = new Date();
const day = date.getDate();
const week = [day-6,day-5,day-4,day-3,day-2,day-1,day];

const data = {
  labels: week,
  datasets: [
    {
      label: 'Price $',
      data: [5,4,3,4,15,6,10],
      backgroundColor: '#51C571',
      fill: true,
      tension: 0.4
    }
  ]
};

export const config = {
  type: 'line',
  data: data,
};
