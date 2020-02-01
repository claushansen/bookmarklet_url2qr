//Capture page url with windows.location
var url = encodeURI(window.location.href);
//generate google chart url
var GoogleQrUrl = "https://chart.googleapis.com/chart?cht=qr&chl=" + url + "&chs=400x400";
//Open result in new or window
window.open(GoogleQrUrl, '_blank');