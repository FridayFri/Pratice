var reformatDate = function (date) {
  const monthObj = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12',
  };

  const tem = date.split(" ");
  const year = tem[2];
  const month = monthObj[tem[1]];
  const dayTem = tem[0].replace(tem[0].slice(-2), "");
  const day = dayTem < 10 ? `0${dayTem}` : dayTem;
  return `${year}-${month}-${day}`;
};

console.log(reformatDate("22nd Apr 2023"));
