 var log = document.getElementById("log");

 log.innerHTML += "Log created <br />";

// Cordova is loading.....
document.addEventListener("deviceready", onDeviceReady, false);
// Now the Cordova is ready       
function onDeviceReady() {
    log.innerHTML += "Device ready <br />";

    var element = document.getElementById('device_details');

    element.innerHTML = 'Device Name: '     + device.name       + '<br />' +'<br/>'     +
                        'Device Cordova: '  + device.cordova    + '<br />' + '<br/>'    +
                        'Device Platform: ' + device.platform   + '<br />' + '<br/>'    +
                        'Device UUID: '     + device.uuid       + '<br />' + '<br/>'    +
                        'Device Version: '  + device.version    + '<br />' + '<br/>';

    log.innerHTML += "Device details updated <br />";
}
