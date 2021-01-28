var insert = function(intervals, newInterval) {
    let res = [];
    intervals.push(newInterval);
    let len = intervals.length;
    if(len == 0) return [];
    intervals.sort((a,b) => a[0] - b[0]);
    let i = 0;
    while(i < len){
        let currLeft = intervals[i][0];
        let currRight = intervals[i][1];
        while(i < len - 1 && intervals[i+1][0] <= currRight){
            i++;
            currRight = Math.max(intervals[i][1],currRight);
        }
        res.push([currLeft,currRight]);
        i++;
    }
    return res;
};


console.log(
  insert(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5]
  )
);
