//map.js for Index page

/*Basemaps*/

//OSM
var osm1 = new ol.layer.Tile({
	title:'OpenStreetMap',
	type:'base',
	visible:true,
	source: new ol.source.OSM()
});



/*Overlay Layers*/

//Difference layer
var diff_intercomp = new ol.layer.Image({
	title:'Difference',
	visible:true,
	source: new ol.source.ImageWMS({
		url:"http://localhost:8082/geoserver/wms",
		params: {'LAYERS' : 'Lab_project_pop:intercomp_diff'}
	})

});

//Difference intercomp map intro
var map_intro1 = new ol.Map({
	target:document.getElementById('map_interc_intro'),
	layers: [osm1,diff_intercomp],
	view: new ol.View({
		center:ol.proj.fromLonLat([123,42]),
		zoom:4.0,
		minZoom:3.8
	})
});
