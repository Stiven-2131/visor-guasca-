var size = 0;
var placement = 'point';
function categories_6101_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case '1':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(168,112,0,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '2':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(230,159,18,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(230,159,18,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_6101_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("TNCN");
    var labelText = "";
    size = 0;
    var labelFont = "7.800000000000001px \'Arial Narrow\', sans-serif";
    var labelFill = "#ffad14";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("TALF") !== null) {
        labelText = String(feature.get("TALF"));
    }
    
var style = categories_6101_3(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
