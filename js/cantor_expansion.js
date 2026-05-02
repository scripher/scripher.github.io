function per2ord(n, num) {
  let i, j, ans = 0, temp = 1;
  let fac = new Array(n);

  // 提前计算所有阶乘
  for (i = 1; i <= n; i++) {temp *= i; fac[i-1] = temp;}

  // 计算康托展开
  for (i = 0; i < n; i++) {
    temp = 0;
    for (j = i+1; j < n; j++) {if (num[j] < num[i]) {temp++;}}
    ans += (temp * fac[n-1-i]);
  }
  return ans;
}

function ord2per(n, ord) {
  let a, i, temp = 1;
  let num = new Array(n), ans = new Array(n), fac = new Array(n);

  // 初始化num数组和fac数组
  for (i = 1; i <= n; i++) {
    temp *= i;
    fac[i-1] = temp;
    num[i-1] = i;
  }

  // 处理异常
  if (ord > fac[n-1]) {
    return ord2per(n, fac[n-1]);
  } else if (ord < 0) {
    return ord2per(n, 0);
  }

  for (i = n-1; i > 0; i--) {
    temp = ord % fac[i-1];
    a = (ord - temp) / fac[i-1];
    ans[n-1-i] = num.splice(a, 1)[0];
    ord = temp;
  }
  ans[n-1] = num[0];
  return ans;
}
