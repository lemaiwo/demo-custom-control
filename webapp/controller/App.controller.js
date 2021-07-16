sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,MessageToast) {
		"use strict";

		return Controller.extend("be.wl.democustomcontrol.controller.App", {
			onInit: function () {

			},
			onSpacePress:function(event){
				MessageToast.show("click");
			}
		
		});
	});
