const debounce = (func, timeout) => {
  let timer;

  return function () {
    let ctx = this;
    let args = arguments;
    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(ctx, args);
    }, timeout);
  };
};

export default debounce;