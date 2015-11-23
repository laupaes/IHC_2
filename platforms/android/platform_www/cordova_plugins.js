cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.boyvanderlaak.cordova.plugin.orientationchanger/www/orientationchanger.js",
        "id": "com.boyvanderlaak.cordova.plugin.orientationchanger.OrientationChanger",
        "pluginId": "com.boyvanderlaak.cordova.plugin.orientationchanger",
        "clobbers": [
            "window.plugins.orientationchanger"
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
        "file": "plugins/com.monday.contact-chooser/www/ContactChooser.js",
        "id": "com.monday.contact-chooser.ContactChooser",
        "pluginId": "com.monday.contact-chooser",
        "clobbers": [
            "ContactChooser"
        ]
    },
    {
        "file": "plugins/com.teamnemitoff.phonedialer/www/dialer.js",
        "id": "com.teamnemitoff.phonedialer.phonedialer",
        "pluginId": "com.teamnemitoff.phonedialer",
        "merges": [
            "phonedialer"
        ]
    },
    {
        "file": "plugins/cordova-plugin-contacts/www/contacts.js",
        "id": "cordova-plugin-contacts.contacts",
        "pluginId": "cordova-plugin-contacts",
        "clobbers": [
            "navigator.contacts"
        ]
    },
    {
        "file": "plugins/cordova-plugin-contacts/www/Contact.js",
        "id": "cordova-plugin-contacts.Contact",
        "pluginId": "cordova-plugin-contacts",
        "clobbers": [
            "Contact"
        ]
    },
    {
        "file": "plugins/cordova-plugin-contacts/www/ContactAddress.js",
        "id": "cordova-plugin-contacts.ContactAddress",
        "pluginId": "cordova-plugin-contacts",
        "clobbers": [
            "ContactAddress"
        ]
    },
    {
        "file": "plugins/cordova-plugin-contacts/www/ContactError.js",
        "id": "cordova-plugin-contacts.ContactError",
        "pluginId": "cordova-plugin-contacts",
        "clobbers": [
            "ContactError"
        ]
    },
    {
        "file": "plugins/cordova-plugin-contacts/www/ContactField.js",
        "id": "cordova-plugin-contacts.ContactField",
        "pluginId": "cordova-plugin-contacts",
        "clobbers": [
            "ContactField"
        ]
    },
    {
        "file": "plugins/cordova-plugin-contacts/www/ContactFindOptions.js",
        "id": "cordova-plugin-contacts.ContactFindOptions",
        "pluginId": "cordova-plugin-contacts",
        "clobbers": [
            "ContactFindOptions"
        ]
    },
    {
        "file": "plugins/cordova-plugin-contacts/www/ContactName.js",
        "id": "cordova-plugin-contacts.ContactName",
        "pluginId": "cordova-plugin-contacts",
        "clobbers": [
            "ContactName"
        ]
    },
    {
        "file": "plugins/cordova-plugin-contacts/www/ContactOrganization.js",
        "id": "cordova-plugin-contacts.ContactOrganization",
        "pluginId": "cordova-plugin-contacts",
        "clobbers": [
            "ContactOrganization"
        ]
    },
    {
        "file": "plugins/cordova-plugin-contacts/www/ContactFieldType.js",
        "id": "cordova-plugin-contacts.ContactFieldType",
        "pluginId": "cordova-plugin-contacts",
        "merges": [
            ""
        ]
    },
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "pluginId": "cordova-plugin-whitelist",
        "runs": true
    },
    {
        "file": "plugins/org.apache.cordova.plugin.sms/www/sms.js",
        "id": "org.apache.cordova.plugin.sms.Sms",
        "pluginId": "org.apache.cordova.plugin.sms",
        "clobbers": [
            "window.sms"
        ]
    },
    {
        "file": "plugins/apps/www/apps.js",
        "id": "apps.Apps",
        "pluginId": "apps",
        "clobbers": [
            "apps"
        ]
    },
    {
        "file": "plugins/cordova-plugin-applist2/www/Applist.js",
        "id": "cordova-plugin-applist2.Applist",
        "pluginId": "cordova-plugin-applist2",
        "clobbers": [
            "window.Applist"
        ]
    },
    {
        "file": "plugins/net.tunts.webintent/www/webintent.js",
        "id": "net.tunts.webintent.WebIntent",
        "pluginId": "net.tunts.webintent",
        "clobbers": [
            "WebIntent"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{}
// BOTTOM OF METADATA
});