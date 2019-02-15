alert(checkSpam('buy ViAgRA now') == true);
alert(checkSpam('free xxxxx') == true);
alert(checkSpam("innocent rabbit") == false);

function checkSpam(str) {
  if (~str.toLowerCase().indexOf('viagra') 
   || ~str.toLowerCase().indexOf('xxx')) {
    return true;
  }
  return false;
}