var reverseList = function(head) {
    let [prev, curr] = [null, head];
    while (curr) {
        [curr.next, prev, curr] = [prev, curr, curr.next];
    }
    return prev;
};
