let now = new Date();
let time = now.getTime();
now = new Date(time - (time % 86400000));
let arr = [];
let lastWeek = [];
for (let i = 0; i < 7; i++, now.setDate(now.getDate() - 1)) {
  arr.push(new Date(now.getTime()));
  lastWeek.push(now.getDate() + '.' + (now.getMonth() + 1));
}

const data = {
  labels: lastWeek.reverse(),
  datasets: [
    {
      label: 'Price $',
      data: [0.2,0.2,0.3,0.4,0.3,0.2,0.4],
      options: {
        scales: {
            y: {
              min: 0,
              max: 1,
            }
        }
      },
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
