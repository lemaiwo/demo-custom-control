sap.ui.define(["sap/ui/core/Renderer"],
    function (Renderer) {
        "use strict";
        var SpaceRenderer = {
            apiVersion: 2 // enable in-place DOM patching
        };
        SpaceRenderer.render = function (rm, control) {
            //<         div              class="sw-intro"            >
            rm.openStart("div", control).class("sw-intro").openEnd();
            //<         p       class="intro-text">
            rm.openStart("p").class("intro-text").openEnd();
            //intro text
            rm.text(control.getIntro());
            //</p>
            rm.close("p");

            rm.openStart("h2").class("main-logo").openEnd();
            //<img src="<logo value>"/>
            rm.voidStart("img").attr("src", control.getLogo()).voidEnd();
            rm.close("h2");

            rm.openStart("div").class("main-content").openEnd();
            rm.openStart("div").class("title-content").openEnd();

            this.renderTitle(rm,control);

            rm.openStart("p").class("content-body").openEnd();
            rm.text(control.getText());
            rm.close("p");
            rm.close("div");
            rm.close("div");

            //</div>
            rm.close("div");

        };
        SpaceRenderer.prototype.renderTitle = function(rm,control){
            rm.openStart("p").class("content-header").openEnd();
            rm.text(control.getTitle());
            rm.close("p");
        }
        return SpaceRenderer;
    }, /* bExport= */ true);