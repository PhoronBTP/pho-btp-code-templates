sap.ui.define([],
	function () {
		"use strict";
		return {

			formatTime: function (sTime) {
				/*var parsedTime = new Date(oTime.ms);
				return parsedTime;*/
				var sFormattedTime = "" + sTime.slice(0, 2) + ":" + sTime.slice(2, 4); //+ ":" + sTime.slice(4,6);
				return sFormattedTime;
			}
		};
	}
);