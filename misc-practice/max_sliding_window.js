var maxSlidingWindow = function (nums, k) {
  const result = [];
  if (nums.length == 0) return result;
  const deque = [];

  function add(n) {
    while (deque.length > 0 && n > deque[deque.length - 1]) {
      deque.pop();
    }
    deque.push(n);
  }
  function remove(n) {
    if (n == deque[0]) {
      deque.shift();
    }
  }

  let j = 0;
  nums.forEach((n, index) => {
    add(n);
    if (index >= (k - 1)) {
      result.push(deque[0]);
      remove(nums[j]);
      j++;
    }
  });
  return result;
};

/*
                    j    n
Input: nums = [1,3,-1,-3,5,3,6,7], and k = 3

Output: [3,3,5,5,6,7]


result = [3,3,5]
dequeue = [5]
