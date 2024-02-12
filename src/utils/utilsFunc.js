export const uniqueId = (length = 10) => {
  return parseInt(
    Math.ceil(Math.random() * Date.now())
      .toPrecision(length)
      .toString()
      .replace(".", "")
  );
};

export const AlphabeticID = {
  index: "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",

  /**
   *  [@function](https://twitter.com/function) AlphabeticID.encode
   *  [@description](https://twitter.com/description) Encode a number into short string
   *  [@param](https://twitter.com/param) integer
   *  [@return](https://twitter.com/return) string
   **/
  encode: function (_number) {
    if ("undefined" == typeof _number) {
      return null;
    } else if ("number" != typeof _number) {
      throw new Error("Wrong parameter type");
    }

    let ret = "";

    for (
      let i = Math.floor(
        Math.log(parseInt(_number)) / Math.log(AlphabeticID.index.length)
      );
      i >= 0;
      i--
    ) {
      ret =
        ret +
        AlphabeticID.index.substr(
          Math.floor(
            parseInt(_number) / AlphabeticID.bcpow(AlphabeticID.index.length, i)
          ) % AlphabeticID.index.length,
          1
        );
    }

    return ret.split("").reverse().join("");
  },

  /**
   *  [@function](https://twitter.com/function) AlphabeticID.decode
   *  [@description](https://twitter.com/description) Decode a short string and return number
   *  [@param](https://twitter.com/param) string
   *  [@return](https://twitter.com/return) integer
   **/
  decode: function (_string) {
    if ("undefined" == typeof _string) {
      return null;
    } else if ("string" != typeof _string) {
      throw new Error("Wrong parameter type");
    }

    let str = _string.split("").reverse().join("");
    let ret = 0;

    for (let i = 0; i <= str.length - 1; i++) {
      ret =
        ret +
        AlphabeticID.index.indexOf(str.substr(i, 1)) *
          AlphabeticID.bcpow(AlphabeticID.index.length, str.length - 1 - i);
    }

    return ret;
  },

  /**
   *  [@function](https://twitter.com/function) AlphabeticID.bcpow
   *  [@description](https://twitter.com/description) Raise _a to the power _b
   *  [@param](https://twitter.com/param) float _a
   *  [@param](https://twitter.com/param) integer _b
   *  [@return](https://twitter.com/return) string
   **/
  bcpow: function (_a, _b) {
    return Math.floor(Math.pow(parseFloat(_a), parseInt(_b)));
  },
};
