document.__isMobile = function() {
  if( /iPhone|iPad|iPod|Android|IEMobile|webOS|BlackBerry|Opera Mini/i.test(navigator.userAgent) ) {
    return true;
  }
  return false;
}
