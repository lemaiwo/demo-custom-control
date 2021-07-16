sap.ui.define(["sap/ui/core/Control", "./SpaceRenderer"], function (Control, SpaceRenderer) {
    "use strict";
    return Control.extend("be.wl.democustomcontrol.control.Space", {
        "metadata": {
            "properties": {
                "intro": "string",
                "title": { defaultValue: "No title" },
                "text": { type: "string", defaultValue: "No text" },
                "logo": "string"
            },
            "aggregations": {
            },
            "events": {
                "press": {
                    "allowPreventDefault": true,
                    "parameters": {
                        "param": { type: "string" }
                    }
                }
            }
        },
        renderer: SpaceRenderer,
        init: function () {
            if (Control.prototype.init) { // check whether superclass implements the method
                Control.prototype.init.apply(this, arguments); // call the method with the original arguments
            }
        },
        onAfterRendering: function (evt) { },
        setIntro: function (value) {
            this.setProperty("intro", value, true);
            return this;
        },
        setTitle: function (value) {
            this.setProperty("title", value, true);
            return this;
        },
        setText: function (value) {
            this.setProperty("text", value, true);
            return this;
        },
        setLogo: function (value) {
            this.setProperty("logo", value, true);
            return this;
        },
        onclick: function (oEvent) {
            this.firePress({
                param: this.getId()
            });
        }
    });
});