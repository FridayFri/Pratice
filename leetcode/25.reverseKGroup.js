var reverseKGroup = function (head, k) {
  let temp = [],
    newList = new ListNode(null),
    resList = newList;
  while (head) {
    temp.push(head.val);
    head = head.next;
  }
  let res = [];
  let resTemp = [];
  for (let i = 0; i < temp.length; i++) {
    resTemp.push(temp[i]);
    if (!((i + 1) % k)) {
      res.push(resTemp.reverse());
      resTemp = [];
    }
  }
  // 处理符合反转条件的
  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < k; j++) {
      const node = new ListNode(res[i][j]);
      newList.next = node;
      newList = newList.next;
    }
  }
  // 处理剩余的
  for (let i = 0; i < resTemp.length; i++) {
    const node = new ListNode(resTemp[i]);
    newList.next = node;
    newList = newList.next;
  }
  return resList.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
const head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
};

console.log(reverseKGroup(head, 3));
