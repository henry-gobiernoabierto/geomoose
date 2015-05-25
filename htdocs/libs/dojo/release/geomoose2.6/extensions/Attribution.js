/*
	Copyright (c) 2004-2012, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


/*
Copyright (c) 2009-2012, Dan "Ducky" Little & GeoMOOSE.org

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

/*
 * Class: AttributionExtension
 * Enables OpenLayers Attribution control on the map.
 * Attribution text configured inside <map-source/> using
 * <param name="attribution" value="this is the attribution text"/>
 *
 * Enable the extenstion by adding the following to geomoose.html:
 * <script type="text/javascript" src="extensions/Attribution.js"></script>
 *
 */

AttributionExtension = new OpenLayers.Class(GeoMOOSE.UX.Extension, {
	init: function(map) {
		console.log("Adding attribution control to map " + map);
		map.addControl(new OpenLayers.Control.Attribution());
	},

	load: function() {
		GeoMOOSE.register('onMapCreated', this, this.init);
	},

	
	CLASS_NAME: "AttributionExtension"
});

GeoMOOSE.UX.register('AttributionExtension');
