
var reverseString = function(s) {
    function swap(s, left, right) {
        let temp;
        temp = s[right]
        s[right] = s[left];
        s[left] = temp;

    }
    let right = s.length-1;
    let left = 0;
    while (left < right) {
        swap(s, left, right);
        left++;
        right--;
    }
    // return s
    cons

};

console.log(reverseString('hello'))