cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.plugin.sms/www/sms.js",
        "id": "org.apache.cordova.plugin.sms.Sms",
        "pluginId": "org.apache.cordova.plugin.sms",
        "clobbers": [
            "window.sms"
        ]
    },
    {
        "file": "plugins/com.cordova.plugins.sms/www/sms.js",
        "id": "com.cordova.plugins.sms.Sms",
        "pluginId": "com.cordova.plugins.sms",
        "clobbers": [
            "window.sms"
        ]
    },
    {
        "file": "plugins/com.boyvanderlaak.cordova.plugin.orientationchanger/www/orientationchanger.js",
        "id": "com.boyvanderlaak.cordova.plugin.orientationchanger.OrientationChanger",
        "pluginId": "com.boyvanderlaak.cordova.plugin.orientationchanger",
        "clobbers": [
            "window.plugins.orientationchanger"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{}
// BOTTOM OF METADATA
});