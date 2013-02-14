function retinaScript(img){
  if (window.devicePixelRatio > 1){
    if (img.attr('src').indexOf('@2x') == -1){
      var parts = img.attr('src').split('.');
      var retinaImg = parts[0]+'@2x.'+parts[1];
      img.attr('src', retinaImg);
    }
  }
}