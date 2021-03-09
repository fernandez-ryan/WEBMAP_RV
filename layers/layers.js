var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GOOGLEMAPS_1 = new ol.layer.Tile({
            'title': 'GOOGLE MAPS',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Cleaned_2 = new ol.format.GeoJSON();
var features_Cleaned_2 = format_Cleaned_2.readFeatures(json_Cleaned_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cleaned_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cleaned_2.addFeatures(features_Cleaned_2);
var lyr_Cleaned_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cleaned_2, 
                style: style_Cleaned_2,
                interactive: true,
    title: 'Cleaned<br />\
    <img src="styles/legend/Cleaned_2_0.png" /> 0-ASSOC<br />\
    <img src="styles/legend/Cleaned_2_1.png" /> 0-NEW PLOTS<br />\
    <img src="styles/legend/Cleaned_2_2.png" /> 0-NEW CORNER PLOT<br />\
    <img src="styles/legend/Cleaned_2_3.png" /> 0-COMMERCIAL<br />\
    <img src="styles/legend/Cleaned_2_4.png" /> 0-GARDEN AREA<br />\
    <img src="styles/legend/Cleaned_2_5.png" /> 0 - SERVICES AREA<br />\
    <img src="styles/legend/Cleaned_2_6.png" /> 0 - ROAD AREA<br />\
    <img src="styles/legend/Cleaned_2_7.png" /> 0 - ROYAL GOLF CLUB<br />\
    <img src="styles/legend/Cleaned_2_8.png" /> 0 - THIRD PARTY<br />\
    <img src="styles/legend/Cleaned_2_9.png" /> 0 - RESTRICTED AREA<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_GOOGLEMAPS_1.setVisible(true);lyr_Cleaned_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GOOGLEMAPS_1,lyr_Cleaned_2];
lyr_Cleaned_2.set('fieldAliases', {'fid': 'fid', 'LOCATION': 'LOCATION', 'AREA': 'AREA', 'PARENT_PLOT': 'PARENT_PLOT', });
lyr_Cleaned_2.set('fieldImages', {'fid': 'TextEdit', 'LOCATION': 'TextEdit', 'AREA': 'TextEdit', 'PARENT_PLOT': 'TextEdit', });
lyr_Cleaned_2.set('fieldLabels', {'fid': 'no label', 'LOCATION': 'no label', 'AREA': 'no label', 'PARENT_PLOT': 'no label', });
lyr_Cleaned_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});