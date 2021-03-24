export function init(ratioParam) {
  const screenRatioByDesign = ratioParam || 16 / 9;
  const docEle = document.documentElement;
  function setHtmlFontSize() {
    var screenRatio = docEle.clientWidth / docEle.clientHeight;
    var fontSize = (
      screenRatio > screenRatioByDesign
        ? (screenRatioByDesign / screenRatio)
        : 1
    ) * docEle.clientWidth / 100;
    docEle.style.fontSize = fontSize.toFixed(3) + 'px';
  }
  setHtmlFontSize();
  window.addEventListener('resize', setHtmlFontSize);
}
init(1920 / 1080);
