//map.js for Index page

/*Basemaps*/

//Stamen Terrain
var stamenTerrain1 = new ol.layer.Tile({
	title:'Stamen Terain',
	type:'base',
	visible: true,
	source: new ol.source.Stamen({
		layer: 'terrain'
	})
});
//Stamen Terrain
var stamenTerrain2 = new ol.layer.Tile({
	title:'Stamen Terain',
	type:'base',
	visible: true,
	source: new ol.source.Stamen({
		layer: 'terrain'
	})
});


/*Overlay Layers*/

//Intercomparison difference layer
var diff_intercomp = new ol.layer.Image({
	title:'Difference',
	visible:true,
	source: new ol.source.ImageWMS({
		url:"http://localhost:8082/geoserver/wms",
		params: {'LAYERS' : 'Lab_project_pop:intercomp_diff'}
	})

});

//Validation 3scenarios layer
var diff_3scenarios = new ol.layer.Image({
	title:'Map of differences',
	visible:true,
	source: new ol.source.ImageWMS({
		url:"http://localhost:8082/geoserver/wms",
		params: {'LAYERS' : 'Lab_project_pop:diff_3scenarios_int'}
	})
}); 

//Difference intercomp map intro
var map_intro1 = new ol.Map({
	target:document.getElementById('map_interc_intro'),
	layers: [stamenTerrain1,diff_intercomp],
	view: new ol.View({
		center:ol.proj.fromLonLat([123,42]),
		zoom:4.0,
		minZoom:3.8
	})
});


//Classification points
var samp_points = new ol.layer.Image({
	title:'Sampling points',
	visible:true,
	source: new ol.source.ImageWMS({
		url:"http://localhost:8082/geoserver/wms",
		params: {'LAYERS' : 'Lab_project_pop:classified_validation_vector_final'}
	})
});


//Validation map intro
var map_intro2 = new ol.Map({
	target:document.getElementById('map_validation_intro'),
	layers: [stamenTerrain2,diff_3scenarios,samp_points],
	view: new ol.View({
		center:ol.proj.fromLonLat([123,42]),
		zoom:4.0,
		minZoom:3.8
	})
});