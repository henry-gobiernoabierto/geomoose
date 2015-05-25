/*
	Copyright (c) 2004-2012, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource['GeoMOOSE.Tab.Catalog.LayerControl.Popups']){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource['GeoMOOSE.Tab.Catalog.LayerControl.Popups'] = true;
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

dojo.provide('GeoMOOSE.Tab.Catalog.LayerControl.Popups');

dojo.declare('GeoMOOSE.Tab.Catalog.LayerControl.Popups', [GeoMOOSE.Tab.Catalog.LayerControl], {
	classes: ['sprite-control-popups'],

	tip: 'CONFIGURATION.layer_controls.popups.tip',

	/* TODO: This should check to see if the layer is active and if popups
	 * are active. */
	onClick: function() {
		/* first we activate the layer */ 
		if(GeoMOOSE.getActiveMapSource() != this.layer.src) {
			GeoMOOSE.activateMapSource(this.layer.src);
			GeoMOOSE.activateLayerTool('popups', {title: this.layer.title});
		} else {
			GeoMOOSE.deactiveMapSource(this.layer.src);
		}
	}
});

GeoMOOSE._registerLayerControl('popups', GeoMOOSE.Tab.Catalog.LayerControl.Popups);


}
