document.__isMobile = function() {
  return /iPhone|iPad|iPod|Android|IEMobile|webOS|BlackBerry|Opera Mini/i.test(navigator.userAgent);
}
