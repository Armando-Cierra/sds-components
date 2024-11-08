const testLinkType = (link: string): 'Image' | 'Video' | 'Invalid' => {
  const imageRegex = /\.(jpg|jpeg|png|gif|bmp|webp|svg|tiff)(\?.*)?$/i;
  const videoRegex = /\.(mp4|avi|mov|flv|wmv|3gp|webm)(\?.*)?$/i;
  const dataUrlRegex =
    /^data:image\/(jpg|jpeg|png|gif|bmp|webp|svg|tiff);base64,/i;

  if (imageRegex.test(link) || dataUrlRegex.test(link)) {
    return 'Image';
  } else if (videoRegex.test(link)) {
    return 'Video';
  } else {
    return 'Invalid';
  }
};

function validateLink(value: string) {
  return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
    value
  );
}

const colors = [
  'rgb(144, 144, 153)',
  'rgb(53, 121, 245)',
  'rgb(46, 208, 34)',
  'rgb(77, 95, 214)',
  'rgb(147, 219, 36)',
  'rgb(253, 114, 15)',
  'rgb(239, 39, 107)',
  'rgb(143, 53, 241)',
  'rgb(240, 16, 16)',
  'rgb(54, 182, 180)',
  'rgb(248, 165, 6)',
];

export { testLinkType, validateLink, colors };
