//map.js for Validation page

/*Basemaps*/

//OSM
var osm = new ol.layer.Tile({
	title:'OpenStreetMap',
	type:'base',
	visible:true,
	source: new ol.source.OSM()
});


//Bing
var bingAerialWithLabels = new ol.layer.Tile({
	title:'Bing Maps—Aerial with Labels',
	type:'base',
	visible:false,
	source:new ol.source.BingMaps({
		key:'AhR83cplckbaskh0Du7HOTZxLS0RsClnzKhyT1mXTxruz2RSH2PBsi1iQcnAgB50',
		imagerySet:'AerialWithLabels'
	})
});



//Stamen Terrain
var stamenTerrain = new ol.layer.Tile({
	title:'Stamen Terain',
	type:'base',
	visible: false,
	source: new ol.source.Stamen({
		layer: 'terrain'
	})
});


/*Overlay Layers*/

//GHS rec layer
var GHS_rec = new ol.layer.Image({
	title:'GHS reclassified',
	visible:false,
	source: new ol.source.ImageWMS({
		url:"http://localhost:8082/geoserver/wms",
		params: {'LAYERS' : 'Lab_project_pop:ghs_rec_int'}
	})
});

//World pop rec layer
var worldpop_rec = new ol.layer.Image({
	title:'Worlpop reclassified',
	visible:false,
	source: new ol.source.ImageWMS({
		url:"http://localhost:8082/geoserver/wms",
		params: {'LAYERS' : 'Lab_project_pop:worldpop_rec_int'}
	})
});

//Legend for reclassified maps
var addLegend_valid_rec = function () {
  var graphicUrl = 'http://localhost:8082/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&LAYER=Lab_project_pop:ghs_rec_int&LEGEND_OPTIONS=fontSize:11.5;dx:10;mx:0.1;my:0.1;bgColor:0x91b9d1';
  var img = document.getElementById('legend_valid_rec');
  img.src = graphicUrl;
};

addLegend_valid_rec();

//Map of differences
var diff_3scenarios = new ol.layer.Image({
	title:'Map of differences',
	visible:true,
	source: new ol.source.ImageWMS({
		url:"http://localhost:8082/geoserver/wms",
		params: {'LAYERS' : 'Lab_project_pop:diff_3scenarios_int'}
	})
});

//Legend for reclassified map of differences
var addLegend_valid_diff = function () {
  var graphicUrl = 'http://localhost:8082/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&LAYER=Lab_project_pop:diff_3scenarios_int&LEGEND_OPTIONS=fontSize:11.5;dx:10;mx:0.1;my:0.1;bgColor:0x91b9d1';
  var img = document.getElementById('legend_valid_diff');
  img.src = graphicUrl;
};

addLegend_valid_diff();

//Classification points as Image
// var samp_points = new ol.layer.Image({
// 	title:'Sampling points',
// 	visible:false,
// 	source: new ol.source.ImageWMS({
// 		url:"http://localhost:8082/geoserver/wms",
// 		params: {'LAYERS' : 'Lab_project_pop:classified_validation_vector_final'}
// 	})
// });

//Classification points as Vector
var vectorSource_points = new ol.source.Vector({
	loader: function(extent,resolution,projection){
		var url ='http://localhost:8082/geoserver/Lab_project_pop/ows?service=WFS&' +
		'version=2.0.0&request=GetFeature&typeName=Lab_project_pop:classified_validation_vector_final&' +
		'outputFormat=text/javascript&srsname=EPSG:3857&'+
		'format_options=callback:loadFeatures';
		$.ajax({url:url, dataType:'jsonp'});
	}
});

var geojsonFormat = new ol.format.GeoJSON();

function loadFeatures(response){
	vectorSource_points.addFeatures(geojsonFormat.readFeatures(response));
}

var samp_points = new ol.layer.Vector({
	title:'Sampling points',
	visible: false,
	source: vectorSource_points
});


samp_points.setStyle(function(feature) {
	return new ol.style.Style({
      image: new ol.style.Circle({
        radius: 4,
        fill: new ol.style.Fill({color: [255,0,0]}),
        stroke: new ol.style.Stroke({
          color: 'black', width: 1.5
        })
      })
    })
});



//Countries border layer
var countries_borders = new ol.layer.Image({
	title:'Border of countries',
	visible:false,
	source: new ol.source.ImageWMS({
		url:"http://localhost:8082/geoserver/wms",
		params: {'LAYERS' : 'Lab_project_pop:World_borders'}
	})
});

var map = new ol.Map({
	target:document.getElementById('map_validation'),
	layers: [
		new ol.layer.Group({
				title: 'Base Maps',
				layers: [osm,bingAerialWithLabels,stamenTerrain]
			}),
			new ol.layer.Group({
				title: 'Overlay Layers',
				layers: [diff_3scenarios,GHS_rec,worldpop_rec,samp_points,countries_borders]
			})
		],
	view: new ol.View({
		center:ol.proj.fromLonLat([145,47]),
		zoom:3.9,
		minZoom:3.4
	}),
	controls: ol.control.defaults().extend([
		new ol.control.ScaleLine(),
		new ol.control.FullScreen(),
		new ol.control.OverviewMap(),
		new ol.control.MousePosition({
			coordinateFormat: ol.coordinate.createStringXY(4),
			projection:'EPSG:3857'
		})
	])
});


//Layer Switchers
var layerSwitcher = new ol.control.LayerSwitcher({});
map.addControl(layerSwitcher);


//Popup
var elementPopup = document.getElementById('popup');
var popup = new ol.Overlay({
	element: elementPopup
});

map.addOverlay(popup);


map.on('click',function(event){
	var feature = map.forEachFeatureAtPixel(
		event.pixel,function(feature,layer){return feature;}
		);

	if(feature !=null){
		var pixel = event.pixel;
		var coord = map.getCoordinateFromPixel(pixel);
		popup.setPosition(coord);
		$(elementPopup).attr('data-content','<b><h3 class="popover-header">Sampling Point</h3></b>'+
			'<b id="in_popup">Manual class: </b>'+feature.get('Manual_cla').toFixed(0)+
			'</br><b id="in_popup">GHS class: </b>'+ feature.get('GHS_class').toFixed(0)+
			'</br><b id="in_popup">Worldpop class: </b>'+ feature.get('Worldpop_c').toFixed(0));
		$(elementPopup).popover({'placement':'top','html':true});
		$(elementPopup).popover('show');}
	else{
		$(elementPopup).popover('dispose');
		return;
	}
});

map.on('pointermove',function(event){
	if (event.dragging){
		$(elementPopup).popover('dispose');
		return;
	}
	var pixel = map.getEventPixel(event.originalEvent);
	var hit =map.hasFeatureAtPixel(pixel);
	map.getTarget().style.cursor = hit ? 'pointer':'';
});
