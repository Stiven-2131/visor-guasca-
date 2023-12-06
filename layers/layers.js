var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_reagrupo5_1 = new ol.format.GeoJSON();
var features_reagrupo5_1 = format_reagrupo5_1.readFeatures(json_reagrupo5_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reagrupo5_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reagrupo5_1.addFeatures(features_reagrupo5_1);
var lyr_reagrupo5_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reagrupo5_1, 
                style: style_reagrupo5_1,
                interactive: true,
                title: '<img src="styles/legend/reagrupo5_1.png" /> Área grupo 5'
            });
var format_4107_2 = new ol.format.GeoJSON();
var features_4107_2 = format_4107_2.readFeatures(json_4107_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4107_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4107_2.addFeatures(features_4107_2);
var lyr_4107_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_4107_2, 
                style: style_4107_2,
                interactive: true,
    title: '4107<br />\
    <img src="styles/legend/4107_2_0.png" /> 1<br />\
    <img src="styles/legend/4107_2_1.png" /> <br />'
        });
var format_6101_3 = new ol.format.GeoJSON();
var features_6101_3 = format_6101_3.readFeatures(json_6101_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6101_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6101_3.addFeatures(features_6101_3);
var lyr_6101_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_6101_3, 
                style: style_6101_3,
                interactive: true,
    title: '6101<br />\
    <img src="styles/legend/6101_3_0.png" /> 1<br />\
    <img src="styles/legend/6101_3_1.png" /> 2<br />\
    <img src="styles/legend/6101_3_2.png" /> <br />'
        });
var format_5112_4 = new ol.format.GeoJSON();
var features_5112_4 = format_5112_4.readFeatures(json_5112_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5112_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5112_4.addFeatures(features_5112_4);
var lyr_5112_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5112_4, 
                style: style_5112_4,
                interactive: true,
                title: '<img src="styles/legend/5112_4.png" /> 5112'
            });
var format_5128R_5 = new ol.format.GeoJSON();
var features_5128R_5 = format_5128R_5.readFeatures(json_5128R_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5128R_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5128R_5.addFeatures(features_5128R_5);
var lyr_5128R_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5128R_5, 
                style: style_5128R_5,
                interactive: true,
                title: '<img src="styles/legend/5128R_5.png" /> 5128 R'
            });
var format_5124_6 = new ol.format.GeoJSON();
var features_5124_6 = format_5124_6.readFeatures(json_5124_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5124_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5124_6.addFeatures(features_5124_6);
var lyr_5124_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5124_6, 
                style: style_5124_6,
                interactive: true,
    title: '5124<br />\
    <img src="styles/legend/5124_6_0.png" /> 5101<br />\
    <img src="styles/legend/5124_6_1.png" /> 5102<br />'
        });
var format_3101_7 = new ol.format.GeoJSON();
var features_3101_7 = format_3101_7.readFeatures(json_3101_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3101_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3101_7.addFeatures(features_3101_7);
var lyr_3101_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_3101_7, 
                style: style_3101_7,
                interactive: true,
    title: ' 3101<br />\
    <img src="styles/legend/3101_7_0.png" /> 4<br />\
    <img src="styles/legend/3101_7_1.png" /> 5<br />\
    <img src="styles/legend/3101_7_2.png" /> 6<br />\
    <img src="styles/legend/3101_7_3.png" /> 7<br />\
    <img src="styles/legend/3101_7_4.png" /> <br />'
        });
var format_2325_8 = new ol.format.GeoJSON();
var features_2325_8 = format_2325_8.readFeatures(json_2325_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2325_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2325_8.addFeatures(features_2325_8);
var lyr_2325_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2325_8, 
                style: style_2325_8,
                interactive: true,
    title: '2325<br />\
    <img src="styles/legend/2325_8_0.png" /> 4101<br />\
    <img src="styles/legend/2325_8_1.png" /> 4112<br />\
    <img src="styles/legend/2325_8_2.png" /> 4131<br />\
    <img src="styles/legend/2325_8_3.png" /> <br />'
        });
var format_3417_9 = new ol.format.GeoJSON();
var features_3417_9 = format_3417_9.readFeatures(json_3417_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3417_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3417_9.addFeatures(features_3417_9);
var lyr_3417_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_3417_9, 
                style: style_3417_9,
                interactive: true,
                title: '<img src="styles/legend/3417_9.png" /> 3417'
            });
var format_2320_10 = new ol.format.GeoJSON();
var features_2320_10 = format_2320_10.readFeatures(json_2320_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2320_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2320_10.addFeatures(features_2320_10);
var lyr_2320_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2320_10, 
                style: style_2320_10,
                interactive: true,
    title: '2320<br />\
    <img src="styles/legend/2320_10_0.png" /> 1<br />\
    <img src="styles/legend/2320_10_1.png" /> <br />'
        });
var format_1202_11 = new ol.format.GeoJSON();
var features_1202_11 = format_1202_11.readFeatures(json_1202_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1202_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1202_11.addFeatures(features_1202_11);
var lyr_1202_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1202_11, 
                style: style_1202_11,
                interactive: true,
                title: '<img src="styles/legend/1202_11.png" /> 1202'
            });
var format_7101_12 = new ol.format.GeoJSON();
var features_7101_12 = format_7101_12.readFeatures(json_7101_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_7101_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_7101_12.addFeatures(features_7101_12);
var lyr_7101_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_7101_12, 
                style: style_7101_12,
                interactive: true,
                title: '7101'
            });

lyr_OSMStandard_0.setVisible(true);lyr_reagrupo5_1.setVisible(true);lyr_4107_2.setVisible(true);lyr_6101_3.setVisible(true);lyr_5112_4.setVisible(true);lyr_5128R_5.setVisible(true);lyr_5124_6.setVisible(true);lyr_3101_7.setVisible(true);lyr_2325_8.setVisible(true);lyr_3417_9.setVisible(true);lyr_2320_10.setVisible(true);lyr_1202_11.setVisible(true);lyr_7101_12.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_reagrupo5_1,lyr_4107_2,lyr_6101_3,lyr_5112_4,lyr_5128R_5,lyr_5124_6,lyr_3101_7,lyr_2325_8,lyr_3417_9,lyr_2320_10,lyr_1202_11,lyr_7101_12];
lyr_reagrupo5_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', '2023-3': '2023-3', });
lyr_4107_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'RuleID': 'RuleID', 'Override': 'Override', 'fid_2': 'fid_2', 'OBJECTID_2': 'OBJECTID_2', 'PROYECTO_2': 'PROYECTO_2', 'SYMBOL_2': 'SYMBOL_2', 'FECHA_2': 'FECHA_2', 'RuleID_2': 'RuleID_2', 'Override_2': 'Override_2', });
lyr_6101_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'TALF': 'TALF', 'TNCN': 'TNCN', });
lyr_5112_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'NOMBRE_GEOGRAFICO': 'NOMBRE_GEOGRAFICO', 'PK_CUE': 'PK_CUE', 'RuleID': 'RuleID', 'Override': 'Override', 'fid_2': 'fid_2', 'OBJECTID_2': 'OBJECTID_2', 'PROYECTO_2': 'PROYECTO_2', 'SYMBOL_2': 'SYMBOL_2', 'FECHA_2': 'FECHA_2', 'NOMBRE_GEOGRAFICO_2': 'NOMBRE_GEOGRAFICO_2', 'PK_CUE_2': 'PK_CUE_2', 'RuleID_2': 'RuleID_2', 'Override_2': 'Override_2', });
lyr_5128R_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'NOMBRE_GEOGRAFICO': 'NOMBRE_GEOGRAFICO', 'PK_CUE': 'PK_CUE', 'RuleID': 'RuleID', 'Override': 'Override', });
lyr_5124_6.set('fieldAliases', {'fid': 'fid', 'ESTADO_DRE': 'ESTADO_DRE', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'DISPERSION': 'DISPERSION', 'NOMBRE_GEO': 'NOMBRE_GEO', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABL': 'RESPONSABL', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODI': 'FECHA_MODI', 'RuleID': 'RuleID', 'Shape_Leng': 'Shape_Leng', });
lyr_3101_7.set('fieldAliases', {'fid': 'fid', 'TIPO_VIA': 'TIPO_VIA', 'ESTADO_SUP': 'ESTADO_SUP', 'NUMERO_CAR': 'NUMERO_CAR', 'ACCESIBILI': 'ACCESIBILI', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'NOMBRE_GEO': 'NOMBRE_GEO', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABL': 'RESPONSABL', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODI': 'FECHA_MODI', 'RuleID': 'RuleID', 'TempId': 'TempId', 'Shape_Leng': 'Shape_Leng', });
lyr_2325_8.set('fieldAliases', {'fid': 'fid', 'CODIGO_USO': 'CODIGO_USO', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'NOMBRE_GEO': 'NOMBRE_GEO', 'PK_CUE': 'PK_CUE', 'ROTACION': 'ROTACION', 'CAMBIO': 'CAMBIO', 'RESPONSABL': 'RESPONSABL', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODI': 'FECHA_MODI', 'RuleID': 'RuleID', });
lyr_3417_9.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'TIPO': 'TIPO', 'NOMBRE_GEOGRAFICO': 'NOMBRE_GEOGRAFICO', 'PK_CUE': 'PK_CUE', 'RuleID': 'RuleID', 'Override': 'Override', 'fid_2': 'fid_2', 'OBJECTID_2': 'OBJECTID_2', 'PROYECTO_2': 'PROYECTO_2', 'SYMBOL_2': 'SYMBOL_2', 'FECHA_2': 'FECHA_2', 'TIPO_2': 'TIPO_2', 'NOMBRE_GEOGRAFICO_2': 'NOMBRE_GEOGRAFICO_2', 'PK_CUE_2': 'PK_CUE_2', 'RuleID_2': 'RuleID_2', 'Override_2': 'Override_2', });
lyr_2320_10.set('fieldAliases', {'fid': 'fid', 'TIPO_CONST': 'TIPO_CONST', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'CAMBIO': 'CAMBIO', 'RESPONSABL': 'RESPONSABL', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODI': 'FECHA_MODI', 'RuleID': 'RuleID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_1202_11.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ALTURA_SOBRE_NIVEL_MAR': 'ALTURA_SOBRE_NIVEL_MAR', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'ISVISIBLE': 'ISVISIBLE', 'RuleID': 'RuleID', 'Override': 'Override', 'fid_2': 'fid_2', 'OBJECTID_2': 'OBJECTID_2', 'ALTURA_SOBRE_NIVEL_MAR_2': 'ALTURA_SOBRE_NIVEL_MAR_2', 'PROYECTO_2': 'PROYECTO_2', 'SYMBOL_2': 'SYMBOL_2', 'FECHA_2': 'FECHA_2', 'ISVISIBLE_2': 'ISVISIBLE_2', 'RuleID_2': 'RuleID_2', 'Override_2': 'Override_2', });
lyr_7101_12.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'CODIGO_NOMBRE': 'CODIGO_NOMBRE', 'SYMBOL': 'SYMBOL', 'PROYECTO': 'PROYECTO', 'FECHA': 'FECHA', 'NOMBRE_GEOGRAFICO': 'NOMBRE_GEOGRAFICO', 'PK_CUE': 'PK_CUE', 'RuleID': 'RuleID', 'Override': 'Override', });
lyr_reagrupo5_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', '2023-3': 'Range', });
lyr_4107_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'DateTime', 'RuleID': 'Range', 'Override': 'Binary', 'fid_2': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'PROYECTO_2': 'TextEdit', 'SYMBOL_2': 'TextEdit', 'FECHA_2': 'DateTime', 'RuleID_2': 'Range', 'Override_2': 'Binary', });
lyr_6101_3.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'TALF': 'TextEdit', 'TNCN': 'Range', });
lyr_5112_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'DateTime', 'NOMBRE_GEOGRAFICO': 'TextEdit', 'PK_CUE': 'TextEdit', 'RuleID': 'Range', 'Override': 'Binary', 'fid_2': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'PROYECTO_2': 'TextEdit', 'SYMBOL_2': 'TextEdit', 'FECHA_2': 'DateTime', 'NOMBRE_GEOGRAFICO_2': 'TextEdit', 'PK_CUE_2': 'TextEdit', 'RuleID_2': 'Range', 'Override_2': 'Binary', });
lyr_5128R_5.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'DateTime', 'NOMBRE_GEOGRAFICO': 'TextEdit', 'PK_CUE': 'TextEdit', 'RuleID': 'Range', 'Override': 'Binary', });
lyr_5124_6.set('fieldImages', {'fid': '', 'ESTADO_DRE': 'TextEdit', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'DateTime', 'DISPERSION': 'TextEdit', 'NOMBRE_GEO': 'TextEdit', 'PK_CUE': 'TextEdit', 'CAMBIO': 'TextEdit', 'RESPONSABL': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODI': 'DateTime', 'RuleID': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_3101_7.set('fieldImages', {'fid': 'TextEdit', 'TIPO_VIA': 'TextEdit', 'ESTADO_SUP': 'TextEdit', 'NUMERO_CAR': 'TextEdit', 'ACCESIBILI': 'TextEdit', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'DateTime', 'NOMBRE_GEO': 'TextEdit', 'PK_CUE': 'TextEdit', 'CAMBIO': 'TextEdit', 'RESPONSABL': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODI': 'DateTime', 'RuleID': 'TextEdit', 'TempId': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_2325_8.set('fieldImages', {'fid': 'TextEdit', 'CODIGO_USO': 'TextEdit', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'DateTime', 'NOMBRE_GEO': 'TextEdit', 'PK_CUE': 'TextEdit', 'ROTACION': 'TextEdit', 'CAMBIO': 'TextEdit', 'RESPONSABL': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODI': 'DateTime', 'RuleID': 'TextEdit', });
lyr_3417_9.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'DateTime', 'TIPO': 'Range', 'NOMBRE_GEOGRAFICO': 'TextEdit', 'PK_CUE': 'TextEdit', 'RuleID': 'Range', 'Override': 'Binary', 'fid_2': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'PROYECTO_2': 'TextEdit', 'SYMBOL_2': 'TextEdit', 'FECHA_2': 'DateTime', 'TIPO_2': 'Range', 'NOMBRE_GEOGRAFICO_2': 'TextEdit', 'PK_CUE_2': 'TextEdit', 'RuleID_2': 'Range', 'Override_2': 'Binary', });
lyr_2320_10.set('fieldImages', {'fid': 'TextEdit', 'TIPO_CONST': 'TextEdit', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'DateTime', 'CAMBIO': 'TextEdit', 'RESPONSABL': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODI': 'DateTime', 'RuleID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_1202_11.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ALTURA_SOBRE_NIVEL_MAR': 'TextEdit', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'DateTime', 'ISVISIBLE': 'Range', 'RuleID': 'Range', 'Override': 'Binary', 'fid_2': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'ALTURA_SOBRE_NIVEL_MAR_2': 'TextEdit', 'PROYECTO_2': 'TextEdit', 'SYMBOL_2': 'TextEdit', 'FECHA_2': 'DateTime', 'ISVISIBLE_2': 'Range', 'RuleID_2': 'Range', 'Override_2': 'Binary', });
lyr_7101_12.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'CODIGO_NOMBRE': 'TextEdit', 'SYMBOL': 'TextEdit', 'PROYECTO': 'TextEdit', 'FECHA': 'DateTime', 'NOMBRE_GEOGRAFICO': 'TextEdit', 'PK_CUE': 'TextEdit', 'RuleID': 'Range', 'Override': 'Binary', });
lyr_reagrupo5_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', '2023-3': 'no label', });
lyr_4107_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'RuleID': 'no label', 'Override': 'no label', 'fid_2': 'no label', 'OBJECTID_2': 'no label', 'PROYECTO_2': 'no label', 'SYMBOL_2': 'no label', 'FECHA_2': 'no label', 'RuleID_2': 'no label', 'Override_2': 'no label', });
lyr_6101_3.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'TALF': 'no label', 'TNCN': 'no label', });
lyr_5112_4.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'NOMBRE_GEOGRAFICO': 'no label', 'PK_CUE': 'no label', 'RuleID': 'no label', 'Override': 'no label', 'fid_2': 'no label', 'OBJECTID_2': 'no label', 'PROYECTO_2': 'no label', 'SYMBOL_2': 'no label', 'FECHA_2': 'no label', 'NOMBRE_GEOGRAFICO_2': 'no label', 'PK_CUE_2': 'no label', 'RuleID_2': 'no label', 'Override_2': 'no label', });
lyr_5128R_5.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'NOMBRE_GEOGRAFICO': 'no label', 'PK_CUE': 'no label', 'RuleID': 'no label', 'Override': 'no label', });
lyr_5124_6.set('fieldLabels', {'fid': 'no label', 'ESTADO_DRE': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'DISPERSION': 'no label', 'NOMBRE_GEO': 'no label', 'PK_CUE': 'no label', 'CAMBIO': 'no label', 'RESPONSABL': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODI': 'no label', 'RuleID': 'no label', 'Shape_Leng': 'no label', });
lyr_3101_7.set('fieldLabels', {'fid': 'no label', 'TIPO_VIA': 'no label', 'ESTADO_SUP': 'no label', 'NUMERO_CAR': 'no label', 'ACCESIBILI': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'NOMBRE_GEO': 'no label', 'PK_CUE': 'no label', 'CAMBIO': 'no label', 'RESPONSABL': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODI': 'no label', 'RuleID': 'no label', 'TempId': 'no label', 'Shape_Leng': 'no label', });
lyr_2325_8.set('fieldLabels', {'fid': 'no label', 'CODIGO_USO': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'NOMBRE_GEO': 'no label', 'PK_CUE': 'no label', 'ROTACION': 'no label', 'CAMBIO': 'no label', 'RESPONSABL': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODI': 'no label', 'RuleID': 'no label', });
lyr_3417_9.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'TIPO': 'no label', 'NOMBRE_GEOGRAFICO': 'no label', 'PK_CUE': 'no label', 'RuleID': 'no label', 'Override': 'no label', 'fid_2': 'no label', 'OBJECTID_2': 'no label', 'PROYECTO_2': 'no label', 'SYMBOL_2': 'no label', 'FECHA_2': 'no label', 'TIPO_2': 'no label', 'NOMBRE_GEOGRAFICO_2': 'no label', 'PK_CUE_2': 'no label', 'RuleID_2': 'no label', 'Override_2': 'no label', });
lyr_2320_10.set('fieldLabels', {'fid': 'no label', 'TIPO_CONST': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'CAMBIO': 'no label', 'RESPONSABL': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODI': 'no label', 'RuleID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_1202_11.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ALTURA_SOBRE_NIVEL_MAR': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'ISVISIBLE': 'no label', 'RuleID': 'no label', 'Override': 'no label', 'fid_2': 'no label', 'OBJECTID_2': 'no label', 'ALTURA_SOBRE_NIVEL_MAR_2': 'no label', 'PROYECTO_2': 'no label', 'SYMBOL_2': 'no label', 'FECHA_2': 'no label', 'ISVISIBLE_2': 'no label', 'RuleID_2': 'no label', 'Override_2': 'no label', });
lyr_7101_12.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'CODIGO_NOMBRE': 'no label', 'SYMBOL': 'no label', 'PROYECTO': 'no label', 'FECHA': 'no label', 'NOMBRE_GEOGRAFICO': 'no label', 'PK_CUE': 'no label', 'RuleID': 'no label', 'Override': 'no label', });
lyr_7101_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});