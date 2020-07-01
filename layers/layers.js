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
var format_Seminole_Routesline_1 = new ol.format.GeoJSON();
var features_Seminole_Routesline_1 = format_Seminole_Routesline_1.readFeatures(json_Seminole_Routesline_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Seminole_Routesline_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Seminole_Routesline_1.addFeatures(features_Seminole_Routesline_1);
var lyr_Seminole_Routesline_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Seminole_Routesline_1, 
                style: style_Seminole_Routesline_1,
                interactive: true,
                title: '<img src="styles/legend/Seminole_Routesline_1.png" /> Seminole_Routes-line'
            });
var format_63020addRoutes_2 = new ol.format.GeoJSON();
var features_63020addRoutes_2 = format_63020addRoutes_2.readFeatures(json_63020addRoutes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_63020addRoutes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_63020addRoutes_2.addFeatures(features_63020addRoutes_2);
var lyr_63020addRoutes_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_63020addRoutes_2, 
                style: style_63020addRoutes_2,
                interactive: true,
                title: '<img src="styles/legend/63020addRoutes_2.png" /> 63020addRoutes'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Seminole_Routesline_1.setVisible(true);lyr_63020addRoutes_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Seminole_Routesline_1,lyr_63020addRoutes_2];
lyr_Seminole_Routesline_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'Lat_End': 'Lat_End', 'Route_Name': 'Route_Name', 'Route__': 'Route__', 'Owner': 'Owner', 'FID_1': 'FID_1', 'Lat_Beg': 'Lat_Beg', 'Long_End': 'Long_End', 'Surface_Ty': 'Surface_Ty', 'Long_Beg': 'Long_Beg', 'Section__': 'Section__', 'Field_1': 'Field_1', });
lyr_63020addRoutes_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'Lat_End': 'Lat_End', 'Route_Name': 'Route_Name', 'Route__': 'Route__', 'Owner': 'Owner', 'FID_1': 'FID_1', 'Lat_Beg': 'Lat_Beg', 'Long_End': 'Long_End', 'Surface_Ty': 'Surface_Ty', 'Long_Beg': 'Long_Beg', 'Section__': 'Section__', 'Field_1': 'Field_1', });
lyr_Seminole_Routesline_1.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'Range', 'Lat_End': 'TextEdit', 'Route_Name': 'TextEdit', 'Route__': 'TextEdit', 'Owner': 'TextEdit', 'FID_1': 'TextEdit', 'Lat_Beg': 'TextEdit', 'Long_End': 'TextEdit', 'Surface_Ty': 'TextEdit', 'Long_Beg': 'TextEdit', 'Section__': 'TextEdit', 'Field_1': 'TextEdit', });
lyr_63020addRoutes_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'Range', 'Lat_End': 'TextEdit', 'Route_Name': 'TextEdit', 'Route__': 'TextEdit', 'Owner': 'TextEdit', 'FID_1': 'TextEdit', 'Lat_Beg': 'TextEdit', 'Long_End': 'TextEdit', 'Surface_Ty': 'TextEdit', 'Long_Beg': 'TextEdit', 'Section__': 'TextEdit', 'Field_1': 'TextEdit', });
lyr_Seminole_Routesline_1.set('fieldLabels', {'Name': 'inline label', 'descriptio': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'Lat_End': 'no label', 'Route_Name': 'no label', 'Route__': 'no label', 'Owner': 'no label', 'FID_1': 'no label', 'Lat_Beg': 'no label', 'Long_End': 'no label', 'Surface_Ty': 'inline label', 'Long_Beg': 'no label', 'Section__': 'inline label', 'Field_1': 'no label', });
lyr_63020addRoutes_2.set('fieldLabels', {'Name': 'inline label', 'descriptio': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'Lat_End': 'no label', 'Route_Name': 'no label', 'Route__': 'no label', 'Owner': 'no label', 'FID_1': 'no label', 'Lat_Beg': 'no label', 'Long_End': 'no label', 'Surface_Ty': 'inline label', 'Long_Beg': 'no label', 'Section__': 'inline label', 'Field_1': 'no label', });
lyr_63020addRoutes_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});