/*
	Copyright (c) 2004-2012, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource['GeoMOOSE.Layout.Default']){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource['GeoMOOSE.Layout.Default'] = true;
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

/**
 * Class: GeoMOOSE.Layout.Default
 * The standard application Layout.
 */

dojo.provide('GeoMOOSE.Layout.Default');

dojo.require('dijit.layout.ContentPane');
dojo.require('dijit.layout.BorderContainer');
dojo.require('dijit.layout.TabContainer');

dojo.declare('GeoMOOSE.Layout.Default', null, {
	/*
	 * constructor: constructor
	 * Do the layout.
	 */
	constructor: function() {
		/* New layout engine uses dijit Border Containers to render everything. */
		var main = new dijit.layout.BorderContainer({'gutters': false}, dojo.byId('main'));
		main.startup();

		main.addChild(new dijit.layout.ContentPane({'region' : 'top'}, dojo.byId('header')));
		main.addChild(new dijit.layout.ContentPane({'region' : 'bottom'}, dojo.byId('footer')));

		var middle_container = new dijit.layout.BorderContainer({'region' : 'center', 'liveSplitters' : false, 'gutters' : false}, dojo.byId('middle'));
		main.addChild(middle_container);
		middle_container.startup();
		middle_container.addChild(new dijit.layout.ContentPane({'region': 'center'}, dojo.byId('map')));

		var control_panel = new dijit.layout.BorderContainer({'gutters' : false, 'region' : CONFIGURATION.control_panel_side, 'splitter' : true}, dojo.byId('control-panel'));
		middle_container.addChild(control_panel);
		control_panel.addChild(new dijit.layout.TabContainer({'region' : 'center'}, dojo.byId('tabs')));

	},

	resize: function() {
		dijit.byId('main').resize();
	},

	switchPanelSides: function(region) {
		var middle = dijit.byId('middle');
		var control_panel = dijit.byId('control-panel');
		middle.removeChild(control_panel);
		control_panel.set('region', region);
		middle.addChild(control_panel);
		this.resize();
	},

	updatePanelSides: function () {
		this.switchPanelSides(CONFIGURATION.control_panel_side);
	}

});

}
