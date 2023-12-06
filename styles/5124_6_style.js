var size = 0;
var placement = 'point';
function categories_5124_6(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case '5101':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,122,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '5102':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,155,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_5124_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("ESTADO_DRE");
    var labelText = "";
    size = 0;
    var labelFont = "6.5px \'Book Antiqua\', sans-serif";
    var labelFill = "#0070ff";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("NOMBRE_GEO") !== null) {
        labelText = String(feature.get("NOMBRE_GEO"));
    }
    
var style = categories_5124_6(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
