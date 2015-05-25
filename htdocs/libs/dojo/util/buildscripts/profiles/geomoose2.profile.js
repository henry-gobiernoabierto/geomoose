dependencies = {
        //Strip all console.* calls except console.warn and console.error. This is basically a work-around
        //for trac issue: http://bugs.dojotoolkit.org/ticket/6849 where Safari 3's console.debug seems
        //to be flaky to set up (apparently fixed in a webkit nightly).
        //But in general for a build, console.warn/error should be the only things to survive anyway.
        stripConsole: "normal",

        layers: [
                {
                        name: "dojo.js",
                        dependencies: [
                                "dojo.dojo",
                                "dojo.base",
                                "dijit.dijit",
                                "dojox.widget",
                                "site.includes",
                                "gm.includes"
                        ]
                }
        ],

        prefixes: [
                ["gm", "../../../geomoose"],
                ["site", "../../../site"],
                ["extensions", "../../../extensions"],
                ["GeoMOOSE", "../../../geomoose/GeoMOOSE"]
        ]
}
