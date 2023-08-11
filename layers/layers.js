var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_Salgada_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Salgada",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Salgada_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-4671942.402563, -2383714.329812, -4671652.636145, -2383403.047499]
                            })
                        });
var lyr_Aude_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Açude",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Aude_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-4671133.160647, -2383628.577459, -4670777.740410, -2383318.236459]
                            })
                        });
var lyr_Sede_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Sede",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Sede_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-4670902.916524, -2384308.112015, -4670292.454138, -2383721.271149]
                            })
                        });
var format_NmerodeFalhasdePalntio_4 = new ol.format.GeoJSON();
var features_NmerodeFalhasdePalntio_4 = format_NmerodeFalhasdePalntio_4.readFeatures(json_NmerodeFalhasdePalntio_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NmerodeFalhasdePalntio_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NmerodeFalhasdePalntio_4.addFeatures(features_NmerodeFalhasdePalntio_4);
var lyr_NmerodeFalhasdePalntio_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NmerodeFalhasdePalntio_4, 
                style: style_NmerodeFalhasdePalntio_4,
                interactive: true,
    title: 'Número de Falhas de Palntio<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_4_0.png" /> 2<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_4_1.png" /> 8<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_4_2.png" /> 24<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_4_3.png" /> 31<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_4_4.png" /> 75<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_4_5.png" /> 88<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_4_6.png" /> 319<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_4_7.png" /> 346<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_4_8.png" /> 367<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_4_9.png" /> 424<br />'
        });
var format_NmerodeLinhasdePlantio_5 = new ol.format.GeoJSON();
var features_NmerodeLinhasdePlantio_5 = format_NmerodeLinhasdePlantio_5.readFeatures(json_NmerodeLinhasdePlantio_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NmerodeLinhasdePlantio_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NmerodeLinhasdePlantio_5.addFeatures(features_NmerodeLinhasdePlantio_5);
var lyr_NmerodeLinhasdePlantio_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NmerodeLinhasdePlantio_5, 
                style: style_NmerodeLinhasdePlantio_5,
                interactive: true,
    title: 'Número de Linhas de Plantio<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_5_0.png" /> 22<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_5_1.png" /> 27<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_5_2.png" /> 31<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_5_3.png" /> 33<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_5_4.png" /> 46<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_5_5.png" /> 47<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_5_6.png" /> 48<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_5_7.png" /> 59<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_5_8.png" /> 65<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_5_9.png" /> 72<br />'
        });
var format_AnodePlantio_6 = new ol.format.GeoJSON();
var features_AnodePlantio_6 = format_AnodePlantio_6.readFeatures(json_AnodePlantio_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnodePlantio_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnodePlantio_6.addFeatures(features_AnodePlantio_6);
var lyr_AnodePlantio_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AnodePlantio_6, 
                style: style_AnodePlantio_6,
                interactive: true,
    title: 'Ano de Plantio<br />\
    <img src="styles/legend/AnodePlantio_6_0.png" /> 1995<br />\
    <img src="styles/legend/AnodePlantio_6_1.png" /> 2019<br />\
    <img src="styles/legend/AnodePlantio_6_2.png" /> 2019/2020<br />\
    <img src="styles/legend/AnodePlantio_6_3.png" /> 2020<br />'
        });
var format_Variedades_7 = new ol.format.GeoJSON();
var features_Variedades_7 = format_Variedades_7.readFeatures(json_Variedades_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Variedades_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Variedades_7.addFeatures(features_Variedades_7);
var lyr_Variedades_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Variedades_7, 
                style: style_Variedades_7,
                interactive: true,
    title: 'Variedades<br />\
    <img src="styles/legend/Variedades_7_0.png" /> 785-15 Verm.<br />\
    <img src="styles/legend/Variedades_7_1.png" /> Arara<br />\
    <img src="styles/legend/Variedades_7_2.png" /> Arara e Japy<br />\
    <img src="styles/legend/Variedades_7_3.png" /> Catuai<br />\
    <img src="styles/legend/Variedades_7_4.png" /> Mundo Novo<br />'
        });
var format_reaha_8 = new ol.format.GeoJSON();
var features_reaha_8 = format_reaha_8.readFeatures(json_reaha_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaha_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaha_8.addFeatures(features_reaha_8);
var lyr_reaha_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reaha_8, 
                style: style_reaha_8,
                interactive: true,
    title: 'Área ha<br />\
    <img src="styles/legend/reaha_8_0.png" /> 0,28<br />\
    <img src="styles/legend/reaha_8_1.png" /> 0,286<br />\
    <img src="styles/legend/reaha_8_2.png" /> 0,407<br />\
    <img src="styles/legend/reaha_8_3.png" /> 0,607<br />\
    <img src="styles/legend/reaha_8_4.png" /> 0,832<br />\
    <img src="styles/legend/reaha_8_5.png" /> 0,84<br />\
    <img src="styles/legend/reaha_8_6.png" /> 0,899<br />\
    <img src="styles/legend/reaha_8_7.png" /> 1,032<br />\
    <img src="styles/legend/reaha_8_8.png" /> 1,110<br />\
    <img src="styles/legend/reaha_8_9.png" /> 1,867<br />'
        });
var format_TalhesProdutivos_9 = new ol.format.GeoJSON();
var features_TalhesProdutivos_9 = format_TalhesProdutivos_9.readFeatures(json_TalhesProdutivos_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TalhesProdutivos_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TalhesProdutivos_9.addFeatures(features_TalhesProdutivos_9);
var lyr_TalhesProdutivos_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TalhesProdutivos_9, 
                style: style_TalhesProdutivos_9,
                interactive: true,
    title: 'Talhões Produtivos<br />\
    <img src="styles/legend/TalhesProdutivos_9_0.png" /> T01<br />\
    <img src="styles/legend/TalhesProdutivos_9_1.png" /> T02<br />\
    <img src="styles/legend/TalhesProdutivos_9_2.png" /> T03<br />\
    <img src="styles/legend/TalhesProdutivos_9_3.png" /> T04<br />\
    <img src="styles/legend/TalhesProdutivos_9_4.png" /> T05<br />\
    <img src="styles/legend/TalhesProdutivos_9_5.png" /> T07<br />\
    <img src="styles/legend/TalhesProdutivos_9_6.png" /> T08<br />\
    <img src="styles/legend/TalhesProdutivos_9_7.png" /> T09<br />\
    <img src="styles/legend/TalhesProdutivos_9_8.png" /> T10<br />\
    <img src="styles/legend/TalhesProdutivos_9_9.png" /> T11<br />'
        });
var format_SALGADA_10 = new ol.format.GeoJSON();
var features_SALGADA_10 = format_SALGADA_10.readFeatures(json_SALGADA_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SALGADA_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SALGADA_10.addFeatures(features_SALGADA_10);
var lyr_SALGADA_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SALGADA_10, 
                style: style_SALGADA_10,
                interactive: true,
                title: '<img src="styles/legend/SALGADA_10.png" /> SALGADA'
            });
var format_AUDE_11 = new ol.format.GeoJSON();
var features_AUDE_11 = format_AUDE_11.readFeatures(json_AUDE_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AUDE_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AUDE_11.addFeatures(features_AUDE_11);
var lyr_AUDE_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AUDE_11, 
                style: style_AUDE_11,
                interactive: true,
                title: '<img src="styles/legend/AUDE_11.png" /> AÇUDE'
            });
var format_SEDE_12 = new ol.format.GeoJSON();
var features_SEDE_12 = format_SEDE_12.readFeatures(json_SEDE_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SEDE_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEDE_12.addFeatures(features_SEDE_12);
var lyr_SEDE_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SEDE_12, 
                style: style_SEDE_12,
                interactive: true,
                title: '<img src="styles/legend/SEDE_12.png" /> SEDE'
            });
var format_SALGADA_13 = new ol.format.GeoJSON();
var features_SALGADA_13 = format_SALGADA_13.readFeatures(json_SALGADA_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SALGADA_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SALGADA_13.addFeatures(features_SALGADA_13);
var lyr_SALGADA_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SALGADA_13, 
                style: style_SALGADA_13,
                interactive: true,
                title: '<img src="styles/legend/SALGADA_13.png" /> SALGADA'
            });
var format_AUDE_14 = new ol.format.GeoJSON();
var features_AUDE_14 = format_AUDE_14.readFeatures(json_AUDE_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AUDE_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AUDE_14.addFeatures(features_AUDE_14);
var lyr_AUDE_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AUDE_14, 
                style: style_AUDE_14,
                interactive: true,
                title: '<img src="styles/legend/AUDE_14.png" /> AÇUDE'
            });
var format_SEDE_15 = new ol.format.GeoJSON();
var features_SEDE_15 = format_SEDE_15.readFeatures(json_SEDE_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SEDE_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEDE_15.addFeatures(features_SEDE_15);
var lyr_SEDE_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SEDE_15, 
                style: style_SEDE_15,
                interactive: true,
                title: '<img src="styles/legend/SEDE_15.png" /> SEDE'
            });
var format_LimiteStioIranita_16 = new ol.format.GeoJSON();
var features_LimiteStioIranita_16 = format_LimiteStioIranita_16.readFeatures(json_LimiteStioIranita_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteStioIranita_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteStioIranita_16.addFeatures(features_LimiteStioIranita_16);
var lyr_LimiteStioIranita_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteStioIranita_16, 
                style: style_LimiteStioIranita_16,
                interactive: true,
                title: '<img src="styles/legend/LimiteStioIranita_16.png" /> Limite Sítio Iranita'
            });
var group_LinhasdePlantio = new ol.layer.Group({
                                layers: [lyr_SALGADA_13,lyr_AUDE_14,lyr_SEDE_15,],
                                title: "Linhas de Plantio"});
var group_FalhasdePlantio = new ol.layer.Group({
                                layers: [lyr_SALGADA_10,lyr_AUDE_11,lyr_SEDE_12,],
                                title: "Falhas de Plantio"});
var group_reasProdutivas = new ol.layer.Group({
                                layers: [lyr_NmerodeFalhasdePalntio_4,lyr_NmerodeLinhasdePlantio_5,lyr_AnodePlantio_6,lyr_Variedades_7,lyr_reaha_8,lyr_TalhesProdutivos_9,],
                                title: "Áreas Produtivas"});
var group_Ortofotos = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_Salgada_1,lyr_Aude_2,lyr_Sede_3,],
                                title: "Ortofotos"});

lyr_GoogleSatellite_0.setVisible(true);lyr_Salgada_1.setVisible(true);lyr_Aude_2.setVisible(true);lyr_Sede_3.setVisible(true);lyr_NmerodeFalhasdePalntio_4.setVisible(false);lyr_NmerodeLinhasdePlantio_5.setVisible(false);lyr_AnodePlantio_6.setVisible(false);lyr_Variedades_7.setVisible(false);lyr_reaha_8.setVisible(false);lyr_TalhesProdutivos_9.setVisible(false);lyr_SALGADA_10.setVisible(false);lyr_AUDE_11.setVisible(false);lyr_SEDE_12.setVisible(false);lyr_SALGADA_13.setVisible(false);lyr_AUDE_14.setVisible(false);lyr_SEDE_15.setVisible(false);lyr_LimiteStioIranita_16.setVisible(true);
var layersList = [group_Ortofotos,group_reasProdutivas,group_FalhasdePlantio,group_LinhasdePlantio,lyr_LimiteStioIranita_16];
lyr_NmerodeFalhasdePalntio_4.set('fieldAliases', {'fid': 'fid', 'Talhão': 'Talhão', 'Localizaç': 'Localizaç', 'Área (m)': 'Área (m)', 'Área (ha)': 'Área (ha)', 'Perimetro ': 'Perimetro ', 'Variedade': 'Variedade', 'Ano de Pla': 'Ano de Pla', 'Altitude M': 'Altitude M', 'Altitude M_1': 'Altitude M_1', ' Diferenç': ' Diferenç', 'N Linhas': 'N Linhas', 'N Falhas': 'N Falhas', });
lyr_NmerodeLinhasdePlantio_5.set('fieldAliases', {'fid': 'fid', 'Talhão': 'Talhão', 'Localizaç': 'Localizaç', 'Área (m)': 'Área (m)', 'Área (ha)': 'Área (ha)', 'Perimetro ': 'Perimetro ', 'Variedade': 'Variedade', 'Ano de Pla': 'Ano de Pla', 'Altitude M': 'Altitude M', 'Altitude M_1': 'Altitude M_1', ' Diferenç': ' Diferenç', 'N Linhas': 'N Linhas', 'N Falhas': 'N Falhas', });
lyr_AnodePlantio_6.set('fieldAliases', {'fid': 'fid', 'Talhão': 'Talhão', 'Localizaç': 'Localizaç', 'Área (m)': 'Área (m)', 'Área (ha)': 'Área (ha)', 'Perimetro ': 'Perimetro ', 'Variedade': 'Variedade', 'Ano de Pla': 'Ano de Pla', 'Altitude M': 'Altitude M', 'Altitude M_1': 'Altitude M_1', ' Diferenç': ' Diferenç', 'N Linhas': 'N Linhas', 'N Falhas': 'N Falhas', });
lyr_Variedades_7.set('fieldAliases', {'fid': 'fid', 'Talhão': 'Talhão', 'Localizaç': 'Localizaç', 'Área (m)': 'Área (m)', 'Área (ha)': 'Área (ha)', 'Perimetro ': 'Perimetro ', 'Variedade': 'Variedade', 'Ano de Pla': 'Ano de Pla', 'Altitude M': 'Altitude M', 'Altitude M_1': 'Altitude M_1', ' Diferenç': ' Diferenç', 'N Linhas': 'N Linhas', 'N Falhas': 'N Falhas', });
lyr_reaha_8.set('fieldAliases', {'fid': 'fid', 'Talhão': 'Talhão', 'Localizaç': 'Localizaç', 'Área (m)': 'Área (m)', 'Área (ha)': 'Área (ha)', 'Perimetro ': 'Perimetro ', 'Variedade': 'Variedade', 'Ano de Pla': 'Ano de Pla', 'Altitude M': 'Altitude M', 'Altitude M_1': 'Altitude M_1', ' Diferenç': ' Diferenç', 'N Linhas': 'N Linhas', 'N Falhas': 'N Falhas', });
lyr_TalhesProdutivos_9.set('fieldAliases', {'fid': 'fid', 'Talhão': 'Talhão', 'Localizaç': 'Localizaç', 'Área (m)': 'Área (m)', 'Área (ha)': 'Área (ha)', 'Perimetro ': 'Perimetro ', 'Variedade': 'Variedade', 'Ano de Pla': 'Ano de Pla', 'Altitude M': 'Altitude M', 'Altitude M_1': 'Altitude M_1', ' Diferenç': ' Diferenç', 'N Linhas': 'N Linhas', 'N Falhas': 'N Falhas', });
lyr_SALGADA_10.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'falha': 'falha', 'linha': 'linha', 'talhão': 'talhão', 'compri': 'compri', });
lyr_AUDE_11.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Falha': 'Falha', 'Linha': 'Linha', 'Talhão': 'Talhão', 'Comprimento (m)': 'Comprimento (m)', });
lyr_SEDE_12.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Falha': 'Falha', 'Linha': 'Linha', 'Talhão': 'Talhão', 'Comprimento (m)': 'Comprimento (m)', });
lyr_SALGADA_13.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Linha': 'Linha', 'Talhão': 'Talhão', 'Comprimento (m)': 'Comprimento (m)', });
lyr_AUDE_14.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Linha': 'Linha', 'Talhão': 'Talhão', 'Comprimento (m)': 'Comprimento (m)', });
lyr_SEDE_15.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'linha': 'linha', 'talhões': 'talhões', 'medida': 'medida', });
lyr_LimiteStioIranita_16.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Area_ha': 'Area_ha', });
lyr_NmerodeFalhasdePalntio_4.set('fieldImages', {'fid': 'TextEdit', 'Talhão': 'TextEdit', 'Localizaç': 'TextEdit', 'Área (m)': 'TextEdit', 'Área (ha)': 'TextEdit', 'Perimetro ': 'TextEdit', 'Variedade': 'TextEdit', 'Ano de Pla': 'TextEdit', 'Altitude M': 'TextEdit', 'Altitude M_1': 'TextEdit', ' Diferenç': 'TextEdit', 'N Linhas': 'TextEdit', 'N Falhas': 'TextEdit', });
lyr_NmerodeLinhasdePlantio_5.set('fieldImages', {'fid': 'TextEdit', 'Talhão': 'TextEdit', 'Localizaç': 'TextEdit', 'Área (m)': 'TextEdit', 'Área (ha)': 'TextEdit', 'Perimetro ': 'TextEdit', 'Variedade': 'TextEdit', 'Ano de Pla': 'TextEdit', 'Altitude M': 'TextEdit', 'Altitude M_1': 'TextEdit', ' Diferenç': 'TextEdit', 'N Linhas': 'TextEdit', 'N Falhas': 'TextEdit', });
lyr_AnodePlantio_6.set('fieldImages', {'fid': 'TextEdit', 'Talhão': 'TextEdit', 'Localizaç': 'TextEdit', 'Área (m)': 'TextEdit', 'Área (ha)': 'TextEdit', 'Perimetro ': 'TextEdit', 'Variedade': 'TextEdit', 'Ano de Pla': 'TextEdit', 'Altitude M': 'TextEdit', 'Altitude M_1': 'TextEdit', ' Diferenç': 'TextEdit', 'N Linhas': 'TextEdit', 'N Falhas': 'TextEdit', });
lyr_Variedades_7.set('fieldImages', {'fid': 'TextEdit', 'Talhão': 'TextEdit', 'Localizaç': 'TextEdit', 'Área (m)': 'TextEdit', 'Área (ha)': 'TextEdit', 'Perimetro ': 'TextEdit', 'Variedade': 'TextEdit', 'Ano de Pla': 'TextEdit', 'Altitude M': 'TextEdit', 'Altitude M_1': 'TextEdit', ' Diferenç': 'TextEdit', 'N Linhas': 'TextEdit', 'N Falhas': 'TextEdit', });
lyr_reaha_8.set('fieldImages', {'fid': 'TextEdit', 'Talhão': 'TextEdit', 'Localizaç': 'TextEdit', 'Área (m)': 'TextEdit', 'Área (ha)': 'TextEdit', 'Perimetro ': 'TextEdit', 'Variedade': 'TextEdit', 'Ano de Pla': 'TextEdit', 'Altitude M': 'TextEdit', 'Altitude M_1': 'TextEdit', ' Diferenç': 'TextEdit', 'N Linhas': 'TextEdit', 'N Falhas': 'TextEdit', });
lyr_TalhesProdutivos_9.set('fieldImages', {'fid': 'TextEdit', 'Talhão': 'TextEdit', 'Localizaç': 'TextEdit', 'Área (m)': 'TextEdit', 'Área (ha)': 'TextEdit', 'Perimetro ': 'TextEdit', 'Variedade': 'TextEdit', 'Ano de Pla': 'TextEdit', 'Altitude M': 'TextEdit', 'Altitude M_1': 'TextEdit', ' Diferenç': 'TextEdit', 'N Linhas': 'TextEdit', 'N Falhas': 'TextEdit', });
lyr_SALGADA_10.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'falha': 'TextEdit', 'linha': 'TextEdit', 'talhão': 'TextEdit', 'compri': 'TextEdit', });
lyr_AUDE_11.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Falha': 'TextEdit', 'Linha': 'TextEdit', 'Talhão': 'TextEdit', 'Comprimento (m)': 'TextEdit', });
lyr_SEDE_12.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Falha': 'TextEdit', 'Linha': 'TextEdit', 'Talhão': 'TextEdit', 'Comprimento (m)': 'TextEdit', });
lyr_SALGADA_13.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Linha': '', 'Talhão': '', 'Comprimento (m)': '', });
lyr_AUDE_14.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Linha': '', 'Talhão': '', 'Comprimento (m)': 'TextEdit', });
lyr_SEDE_15.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'linha': '', 'talhões': '', 'medida': '', });
lyr_LimiteStioIranita_16.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Area_ha': 'TextEdit', });
lyr_NmerodeFalhasdePalntio_4.set('fieldLabels', {});
lyr_NmerodeLinhasdePlantio_5.set('fieldLabels', {});
lyr_AnodePlantio_6.set('fieldLabels', {});
lyr_Variedades_7.set('fieldLabels', {});
lyr_reaha_8.set('fieldLabels', {});
lyr_TalhesProdutivos_9.set('fieldLabels', {});
lyr_SALGADA_10.set('fieldLabels', {});
lyr_AUDE_11.set('fieldLabels', {});
lyr_SEDE_12.set('fieldLabels', {});
lyr_SALGADA_13.set('fieldLabels', {});
lyr_AUDE_14.set('fieldLabels', {});
lyr_SEDE_15.set('fieldLabels', {});
lyr_LimiteStioIranita_16.set('fieldLabels', {'fid': 'no label', 'Name': 'inline label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Area_ha': 'inline label', });
lyr_LimiteStioIranita_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});