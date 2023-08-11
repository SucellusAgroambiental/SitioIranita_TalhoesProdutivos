var size = 0;
var placement = 'point';
function categories_Variedades_7(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case '785-15 Verm.':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(226,58,46,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Arara':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(94,200,101,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Arara e Japy':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(51,210,221,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Catuai':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(65,54,225,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Mundo Novo':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(229,16,211,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Variedades_7 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Variedade");
    var labelText = "";
    size = 0;
    var labelFont = "18.2px \'Arial\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.5;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("Variedade") !== null) {
        labelText = String(feature.get("Variedade"));
    }
    
var style = categories_Variedades_7(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
