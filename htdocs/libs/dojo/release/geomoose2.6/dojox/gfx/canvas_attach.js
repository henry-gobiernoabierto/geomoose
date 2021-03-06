/*
	Copyright (c) 2004-2012, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dojox.gfx.canvas_attach"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource["dojox.gfx.canvas_attach"] = true;
dojo.provide("dojox.gfx.canvas_attach");

dojo.require("dojox.gfx.canvas");

dojo.experimental("dojox.gfx.canvas_attach");

// not implemented
dojox.gfx.canvas.attachSurface = dojox.gfx.canvas.attachNode = function(){
	return null;	// for now
};

}
