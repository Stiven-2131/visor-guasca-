var size = 0;
var placement = 'point';
function categories_2325_8(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case '4101':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 3.04 + size, points: 4,
            angle: Math.PI/4, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(104,104,104,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '4112':
                    return [ new ol.style.Style({
        text: new ol.style.Text({
        rotation: 0 * Math.PI/180,
        text: '│',  stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.Circle({radius: 6.39 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(0,0,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '4131':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 3.04 + size, points: 4,
            angle: Math.PI/4, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(104,104,104,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 3.04 + size, points: 4,
            angle: Math.PI/4, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(0,0,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_2325_8 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("CODIGO_USO");
    var labelText = "";
    size = 0;
    var labelFont = "7.800000000000001px \'Arial Narrow\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("NOMBRE_GEO") !== null) {
        labelText = String(feature.get("NOMBRE_GEO"));
    }
    
var style = categories_2325_8(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
