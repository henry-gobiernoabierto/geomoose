/*
	Copyright (c) 2004-2012, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dojox.charting.themes.gradientGenerator"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource["dojox.charting.themes.gradientGenerator"] = true;
dojo.provide("dojox.charting.themes.gradientGenerator");
dojo.require("dojox.charting.Theme");

(function(){
	var gg = dojox.charting.themes.gradientGenerator;

	gg.generateFills = function(colors, fillPattern, lumFrom, lumTo){
		//	summary:
		//		generates 2-color gradients using pure colors, a fill pattern, and two luminance values
		//	colors: Array:
		//		Array of colors to generate gradients for each.
		//	fillPattern: Object:
		//		Gradient fill descriptor which colors list will be generated.
		//	lumFrom: Number:
		//		Initial luminance value (0-100).
		//	lumTo: Number:
		//		Final luminance value (0-100).
		var Theme = dojox.charting.Theme;
		return dojo.map(colors, function(c){	// Array
			return Theme.generateHslGradient(c, fillPattern, lumFrom, lumTo);
		});
	};
	
	gg.updateFills = function(themes, fillPattern, lumFrom, lumTo){
		//	summary:
		//		transforms solid color fills into 2-color gradients using a fill pattern, and two luminance values
		//	themes: Array:
		//		Array of mini-themes (usually series themes or marker themes), which fill will be transformed.
		//	fillPattern: Object:
		//		Gradient fill descriptor which colors list will be generated.
		//	lumFrom: Number:
		//		Initial luminance value (0-100).
		//	lumTo: Number:
		//		Final luminance value (0-100).
		var Theme = dojox.charting.Theme;
		dojo.forEach(themes, function(t){
			if(t.fill && !t.fill.type){
				t.fill = Theme.generateHslGradient(t.fill, fillPattern, lumFrom, lumTo);
			}
		});
	};
	
	gg.generateMiniTheme = function(colors, fillPattern, lumFrom, lumTo, lumStroke){
		//	summary:
		//		generates mini-themes with 2-color gradients using colors, a fill pattern, and three luminance values
		//	colors: Array:
		//		Array of colors to generate gradients for each.
		//	fillPattern: Object:
		//		Gradient fill descriptor which colors list will be generated.
		//	lumFrom: Number:
		//		Initial luminance value (0-100).
		//	lumTo: Number:
		//		Final luminance value (0-100).
		//	lumStroke: Number:
		//		Stroke luminance value (0-100).
		var Theme = dojox.charting.Theme;
		return dojo.map(colors, function(c){	// Array
			c = new dojox.color.Color(c);
			return {
				fill:   Theme.generateHslGradient(c, fillPattern, lumFrom, lumTo),
				stroke: {color: Theme.generateHslColor(c, lumStroke)}
			}
		});
	};
	
	gg.generateGradientByIntensity = function(color, intensityMap){
		//	summary:
		//		generates gradient colors using an intensity map
		//	color: dojo.Color:
		//		Color to use to generate gradients.
		//	intensityMap: Array:
		//		Array of tuples {o, i}, where o is a gradient offset (0-1),
		//		and i is an intensity (0-255).
		color = new dojo.Color(color);
		return dojo.map(intensityMap, function(stop){	// Array
			var s = stop.i / 255;
			return {
				offset: stop.o,
				color:  new dojo.Color([color.r * s, color.g * s, color.b * s, color.a])
			};
		});
	}
})();

}
