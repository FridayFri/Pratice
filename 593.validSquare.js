var validSquare = function (p1, p2, p3, p4) {
  const p = [p1, p2, p3, p4];
  const length1 = (p[0][0] - p[1][0]) ** 2 + (p[0][1] - p[1][1]) ** 2;
  const length2 = (p[0][0] - p[2][0]) ** 2 + (p[0][1] - p[2][1]) ** 2;
  const length3 = (p[3][0] - p[1][0]) ** 2 + (p[3][1] - p[1][1]) ** 2;
  const length4 = (p[3][0] - p[2][0]) ** 2 + (p[3][1] - p[2][1]) ** 2;
  const cos1 = (p[3][0] - p[0][0]) ** 2 + (p[3][1] - p[0][1]) ** 2;
  const cos2 = (p[1][0] - p[2][0]) ** 2 + (p[1][1] - p[2][1]) ** 2;
  const a =[length1, length2, length3, length4, cos1, cos2];
  console.log(a)
  const b = []
  a.forEach(item=>{
    if(item && !b.includes(item)){
        b.push(item)
    }
  })
  console.log(b)
  return b.length === 2 && new Set(a).size ===2;
};

const p1 = [0, 0],
  p2 = [1, 1],
  p3 = [1, 0],
  p4 = [1, 1];
console.log(validSquare(p1, p2, p3, p4));
