/*
	Copyright (c) 2004-2012, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource['GeoMOOSE.Dialog.Error']){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource['GeoMOOSE.Dialog.Error'] = true;
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
 * Class: GeoMOOSE.Dialog.Error
 * Display an Error Dialog.
 */

dojo.provide('GeoMOOSE.Dialog.Error');
dojo.require('dijit.Dialog');

dojo.declare('GeoMOOSE.Dialog.Error', dijit.Dialog, {
	message: '',

	postCreate: function() {
		var error_div = dojo.create('div', {'innerHTML' : this.message});
		this.set('content', error_div);
		dojo.style(error_div, {
			'width' : '300px', 'height' : '300px'
		});
		dojo.addClass(error_div, ['geomooseErrorMessage']);

	}
});

}
