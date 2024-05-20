var imageUrlChecker = function (url) {
  return new Promise(function (resolve, reject) {
    var image = new Image();
    image.src = url;
    image.onload = function () {
      return resolve(url);
    };
    image.onerror = function () {
      return reject(new Error('Image loading error'));
    };
  });
};
export default imageUrlChecker;
