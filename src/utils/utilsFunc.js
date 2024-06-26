export const uniqueId = (length = 10) => {
  return parseInt(
    Math.ceil(Math.random() * Date.now())
      .toPrecision(length)
      .toString()
      .replace(".", "")
  );
};

export const convertBlobToBase64 = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      return resolve({
        status: true,
        value: reader.result,
      });
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
      return resolve({
        status: false,
        value: null,
      });
    };
  });
};

export const isImage = (type) => {
  const imageTypes = ["webp", "png", "jpeg", "jpg"];
  return imageTypes.some((elem) => type.toLowerCase().includes(elem));
};
export const isVideo = (type) => {
  const imageTypes = ["mp4", "mov"];
  return imageTypes.some((elem) => type.toLowerCase().includes(elem));
};

export function downloadBase64File(contentBase64, fileName = "qr") {
  try {
    if (!Boolean(contentBase64)) return;
    const linkSource = `data:image/png;base64,${contentBase64}`;
    const downloadLink = document.createElement("a");
    document.body.appendChild(downloadLink);

    downloadLink.href = linkSource;
    downloadLink.target = "_self";
    downloadLink.download = fileName;
    downloadLink.click();

    document.body.removeChild(downloadLink);
  } catch (err) {
    console.log(err);
  }
}

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
