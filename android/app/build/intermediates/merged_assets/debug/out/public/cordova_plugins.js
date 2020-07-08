
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-base64-to-gallery.base64ToGallery",
          "file": "plugins/cordova-base64-to-gallery/www/base64ToGallery.js",
          "pluginId": "cordova-base64-to-gallery",
        "clobbers": [
          "cordova.base64ToGallery"
        ]
        },
      {
          "id": "phonegap-plugin-barcodescanner.BarcodeScanner",
          "file": "plugins/phonegap-plugin-barcodescanner/www/barcodescanner.js",
          "pluginId": "phonegap-plugin-barcodescanner",
        "clobbers": [
          "cordova.plugins.barcodeScanner"
        ]
        },
      {
          "id": "cordova-plugin-device.device",
          "file": "plugins/cordova-plugin-device/www/device.js",
          "pluginId": "cordova-plugin-device",
        "clobbers": [
          "device"
        ]
        },
      {
          "id": "cordova-plugin-geolocation.geolocation",
          "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
          "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
          "navigator.geolocation"
        ]
        },
      {
          "id": "cordova-plugin-googlemaps.googlemaps-cdv-plugin",
          "file": "plugins/cordova-plugin-googlemaps/www/plugin-loader-for-android_ios.js",
          "pluginId": "cordova-plugin-googlemaps",
        "clobbers": [
          "plugin.google.maps"
        ]
        },
      {
          "id": "cordova-sqlite-storage.SQLitePlugin",
          "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
          "pluginId": "cordova-sqlite-storage",
        "clobbers": [
          "SQLitePlugin"
        ]
        },
      {
          "id": "cordova-plugin-statusbar.statusbar",
          "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
          "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
          "window.StatusBar"
        ]
        },
      {
          "id": "cordova-base64-to-gallery.object.assign-polyfill",
          "file": "plugins/cordova-base64-to-gallery/www/object.assign-polyfill.js",
          "pluginId": "cordova-base64-to-gallery"
        },
      {
          "id": "cordova-plugin-geolocation.PositionError",
          "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
          "pluginId": "cordova-plugin-geolocation",
        "runs": true
        },
      {
          "id": "cordova-plugin-googlemaps.Promise",
          "file": "plugins/cordova-plugin-googlemaps/www/Promise.js",
          "pluginId": "cordova-plugin-googlemaps"
        },
      {
          "id": "cordova-plugin-googlemaps.BaseClass",
          "file": "plugins/cordova-plugin-googlemaps/www/BaseClass.js",
          "pluginId": "cordova-plugin-googlemaps",
        "runs": true
        },
      {
          "id": "cordova-plugin-googlemaps.BaseArrayClass",
          "file": "plugins/cordova-plugin-googlemaps/www/BaseArrayClass.js",
          "pluginId": "cordova-plugin-googlemaps",
        "runs": true
        },
      {
          "id": "cordova-plugin-googlemaps.LatLng",
          "file": "plugins/cordova-plugin-googlemaps/www/LatLng.js",
          "pluginId": "cordova-plugin-googlemaps",
        "runs": true
        },
      {
          "id": "cordova-plugin-googlemaps.LatLngBounds",
          "file": "plugins/cordova-plugin-googlemaps/www/LatLngBounds.js",
          "pluginId": "cordova-plugin-googlemaps",
        "runs": true
        },
      {
          "id": "cordova-plugin-googlemaps.VisibleRegion",
          "file": "plugins/cordova-plugin-googlemaps/www/VisibleRegion.js",
          "pluginId": "cordova-plugin-googlemaps",
        "runs": true
        },
      {
          "id": "cordova-plugin-googlemaps.Location",
          "file": "plugins/cordova-plugin-googlemaps/www/Location.js",
          "pluginId": "cordova-plugin-googlemaps",
        "runs": true
        },
      {
          "id": "cordova-plugin-googlemaps.CameraPosition",
          "file": "plugins/cordova-plugin-googlemaps/www/CameraPosition.js",
          "pluginId": "cordova-plugin-googlemaps",
        "runs": true
        },
      {
          "id": "cordova-plugin-googlemaps.Polyline",
          "file": "plugins/cordova-plugin-googlemaps/www/Polyline.js",
          "pluginId": "cordova-plugin-googlemaps",
        "runs": true
        },
      {
          "id": "cordova-plugin-googlemaps.Polygon",
          "file": "plugins/cordova-plugin-googlemaps/www/Polygon.js",
          "pluginId": "cordova-plugin-googlemaps",
        "runs": true
        },
      {
          "id": "cordova-plugin-googlemaps.Marker",
          "file": "plugins/cordova-plugin-googlemaps/www/Marker.js",
          "pluginId": "cordova-plugin-googlemaps",
        "runs": true
        },
      {
          "id": "cordova-plugin-googlemaps.HtmlInfoWindow",
          "file": "plugins/cordova-plugin-googlemaps/www/HtmlInfoWindow.js",
          "pluginId": "cordova-plugin-googlemaps",
        "runs": true
        },
      {
          "id": "cordova-plugin-googlemaps.Circle",
          "file": "plugins/cordova-plugin-googlemaps/www/Circle.js",
          "pluginId": "cordova-plugin-googlemaps",
        "runs": true
        },
      {
          "id": "cordova-plugin-googlemaps.TileOverlay",
          "file": "plugins/cordova-plugin-googlemaps/www/TileOverlay.js",
          "pluginId": "cordova-plugin-googlemaps",
        "runs": true
        },
      {
          "id": "cordova-plugin-googlemaps.GroundOverlay",
          "file": "plugins/cordova-plugin-googlemaps/www/GroundOverlay.js",
          "pluginId": "cordova-plugin-googlemaps",
        "runs": true
        },
      {
          "id": "cordova-plugin-googlemaps.Common",
          "file": "plugins/cordova-plugin-googlemaps/www/Common.js",
          "pluginId": "cordova-plugin-googlemaps",
        "runs": true
        },
      {
          "id": "cordova-plugin-googlemaps.encoding",
          "file": "plugins/cordova-plugin-googlemaps/www/encoding.js",
          "pluginId": "cordova-plugin-googlemaps",
        "runs": true
        },
      {
          "id": "cordova-plugin-googlemaps.spherical",
          "file": "plugins/cordova-plugin-googlemaps/www/spherical.js",
          "pluginId": "cordova-plugin-googlemaps",
        "runs": true
        },
      {
          "id": "cordova-plugin-googlemaps.poly",
          "file": "plugins/cordova-plugin-googlemaps/www/poly.js",
          "pluginId": "cordova-plugin-googlemaps",
        "runs": true
        },
      {
          "id": "cordova-plugin-googlemaps.Geocoder",
          "file": "plugins/cordova-plugin-googlemaps/www/Geocoder.js",
          "pluginId": "cordova-plugin-googlemaps",
        "runs": true
        },
      {
          "id": "cordova-plugin-googlemaps.LocationService",
          "file": "plugins/cordova-plugin-googlemaps/www/LocationService.js",
          "pluginId": "cordova-plugin-googlemaps",
        "runs": true
        },
      {
          "id": "cordova-plugin-googlemaps.ElevationService",
          "file": "plugins/cordova-plugin-googlemaps/www/ElevationService.js",
          "pluginId": "cordova-plugin-googlemaps",
        "runs": true
        },
      {
          "id": "cordova-plugin-googlemaps.DirectionsService",
          "file": "plugins/cordova-plugin-googlemaps/www/DirectionsService.js",
          "pluginId": "cordova-plugin-googlemaps",
        "runs": true
        },
      {
          "id": "cordova-plugin-googlemaps.DirectionsRenderer",
          "file": "plugins/cordova-plugin-googlemaps/www/DirectionsRenderer.js",
          "pluginId": "cordova-plugin-googlemaps",
        "runs": true
        },
      {
          "id": "cordova-plugin-googlemaps.Map",
          "file": "plugins/cordova-plugin-googlemaps/www/Map.js",
          "pluginId": "cordova-plugin-googlemaps",
        "runs": true
        },
      {
          "id": "cordova-plugin-googlemaps.event",
          "file": "plugins/cordova-plugin-googlemaps/www/event.js",
          "pluginId": "cordova-plugin-googlemaps",
        "runs": true
        },
      {
          "id": "cordova-plugin-googlemaps.MapTypeId",
          "file": "plugins/cordova-plugin-googlemaps/www/MapTypeId.js",
          "pluginId": "cordova-plugin-googlemaps",
        "runs": true
        },
      {
          "id": "cordova-plugin-googlemaps.KmlOverlay",
          "file": "plugins/cordova-plugin-googlemaps/www/KmlOverlay.js",
          "pluginId": "cordova-plugin-googlemaps",
        "runs": true
        },
      {
          "id": "cordova-plugin-googlemaps.KmlLoader",
          "file": "plugins/cordova-plugin-googlemaps/www/KmlLoader.js",
          "pluginId": "cordova-plugin-googlemaps",
        "runs": true
        },
      {
          "id": "cordova-plugin-googlemaps.Environment",
          "file": "plugins/cordova-plugin-googlemaps/www/Environment.js",
          "pluginId": "cordova-plugin-googlemaps",
        "runs": true
        },
      {
          "id": "cordova-plugin-googlemaps.MarkerCluster",
          "file": "plugins/cordova-plugin-googlemaps/www/MarkerCluster.js",
          "pluginId": "cordova-plugin-googlemaps",
        "runs": true
        },
      {
          "id": "cordova-plugin-googlemaps.Cluster",
          "file": "plugins/cordova-plugin-googlemaps/www/Cluster.js",
          "pluginId": "cordova-plugin-googlemaps",
        "runs": true
        },
      {
          "id": "cordova-plugin-googlemaps.geomodel",
          "file": "plugins/cordova-plugin-googlemaps/www/geomodel.js",
          "pluginId": "cordova-plugin-googlemaps",
        "runs": true
        },
      {
          "id": "cordova-plugin-googlemaps.commandQueueExecutor",
          "file": "plugins/cordova-plugin-googlemaps/www/commandQueueExecutor.js",
          "pluginId": "cordova-plugin-googlemaps",
        "runs": true
        },
      {
          "id": "cordova-plugin-googlemaps.pluginInit",
          "file": "plugins/cordova-plugin-googlemaps/www/pluginInit.js",
          "pluginId": "cordova-plugin-googlemaps",
        "runs": true
        },
      {
          "id": "cordova-plugin-googlemaps.StreetViewPanorama",
          "file": "plugins/cordova-plugin-googlemaps/www/StreetViewPanorama.js",
          "pluginId": "cordova-plugin-googlemaps",
        "runs": true
        },
      {
          "id": "cordova-plugin-googlemaps.Overlay",
          "file": "plugins/cordova-plugin-googlemaps/www/Overlay.js",
          "pluginId": "cordova-plugin-googlemaps",
        "runs": true
        },
      {
          "id": "cordova-plugin-googlemaps.Thread",
          "file": "plugins/cordova-plugin-googlemaps/www/Thread.js",
          "pluginId": "cordova-plugin-googlemaps",
        "runs": true
        },
      {
          "id": "cordova-plugin-googlemaps.InlineWorker",
          "file": "plugins/cordova-plugin-googlemaps/www/InlineWorker.js",
          "pluginId": "cordova-plugin-googlemaps",
        "runs": true
        },
      {
          "id": "cordova-plugin-googlemaps.js_CordovaGoogleMaps",
          "file": "plugins/cordova-plugin-googlemaps/www/js_CordovaGoogleMaps-for-android_ios.js",
          "pluginId": "cordova-plugin-googlemaps",
        "runs": true
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-android-support-gradle-release": "3.0.1",
      "cordova-base64-to-gallery": "4.1.3",
      "cordova-plugin-androidx": "2.0.0",
      "cordova-plugin-androidx-adapter": "1.1.1",
      "cordova-plugin-geolocation": "4.0.2",
      "cordova-plugin-googlemaps": "2.8.0-20200521-2050",
      "cordova-sqlite-storage": "5.0.0",
      "phonegap-plugin-barcodescanner": "8.1.0",
      "cordova-plugin-device": "2.0.3",
      "cordova-plugin-statusbar": "2.4.3",
      "cordova-plugin-whitelist": "1.3.4"
    };
    // BOTTOM OF METADATA
    });
    