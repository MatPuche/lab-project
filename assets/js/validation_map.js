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
var addLegend_rec = function () {
  var graphicUrl = 'http://localhost:8082/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&LAYER=Lab_project_pop:ghs_rec_int&LEGEND_OPTIONS=fontSize:11.5;dx:10;mx:0.1;my:0.1;bgColor:0x91b9d1';
  var img = document.getElementById('legend_rec');
  img.src = graphicUrl;
};

addLegend_rec();

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
  var img = document.getElementById('legend_diff');
  img.src = graphicUrl;
};

addLegend_valid_diff();

//Classification points
var samp_points = new ol.layer.Image({
	title:'Sampling points',
	visible:false,
	source: new ol.source.ImageWMS({
		url:"http://localhost:8082/geoserver/wms",
		params: {'LAYERS' : 'Lab_project_pop:classified_validation_vector_final'}
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
				layers: [diff_3scenarios,GHS_rec,worldpop_rec,samp_points]
			})
		],
	view: new ol.View({
		center:ol.proj.fromLonLat([143,47]),
		zoom:3.7,
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

