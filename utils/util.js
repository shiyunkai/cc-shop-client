//将wx函数转化成 返回为promise 的函数
const promisic = function (func) {
  return function (params = {}) {
    return new Promise((resolve, reject) => {
      const args = Object.assign(params, {
        success: (res) => {
          resolve(res);
        },
        fail: (error) => {
          reject(error);
        }
      });
      func(args);
    });
  };
};

// 组合算法
// size: 从arr数组中选择的个数，如3选择1，则size=1
// return 组合结果
const combination = function (arr, size) {
  var r = [];

  function _(t, a, n) {
    if (n === 0) {
      r[r.length] = t;
      return;
    }
    for (var i = 0, l = a.length - n; i <= l; i++) {
      var b = t.slice();
      b.push(a[i]);
      _(b, a.slice(i + 1), n - 1);
    }
  }

  _([], arr, size);
  return r;
}

export {
  promisic,
  combination
}
