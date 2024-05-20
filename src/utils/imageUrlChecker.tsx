const imageUrlChecker = (url: string) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = url;

    image.onload = () => resolve(url);
    image.onerror = () => reject(new Error('Image loading error'));
  });
};

export default imageUrlChecker;
