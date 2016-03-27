/**
 * @author kyle / http://nikai.us/
 */

import drawPolylineSimple from "./draw/polyline/simple";

export default {
    draw: function (context, data, options) {

        context.save();

        for (var key in options) {
            context[key] = options[key];
        }

        drawPolylineSimple.draw(context, data, options);

        context.restore();

    }
}
