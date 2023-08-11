var size = 0;
var placement = 'point';
function categories_AnodePlantio_6(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case '1995':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(74,16,219,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '2019':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(41,208,220,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '2019/2020':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(212,183,126,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '2020':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(126,210,113,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_AnodePlantio_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Ano de Pla");
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
    if (feature.get("Ano de Pla") !== null) {
        labelText = String(feature.get("Ano de Pla"));
    }
    
var style = categories_AnodePlantio_6(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
