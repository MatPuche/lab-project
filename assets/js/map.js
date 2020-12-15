/*Basemaps*/

//OSM
var osm1 = new ol.layer.Tile({
	title:'OpenStreetMap',
	type:'base',
	visible:true,
	source: new ol.source.OSM()
});

var osm2 = new ol.layer.Tile({
	title:'OpenStreetMap',
	type:'base',
	visible:true,
	source: new ol.source.OSM()
});

var osm3 = new ol.layer.Tile({
	title:'OpenStreetMap',
	type:'base',
	visible:true,
	source: new ol.source.OSM()
});



//Bing
var bingAerialWithLabels1 = new ol.layer.Tile({
	title:'Bing Maps—Aerial with Labels',
	type:'base',
	visible:false,
	source:new ol.source.BingMaps({
		key:'AhR83cplckbaskh0Du7HOTZxLS0RsClnzKhyT1mXTxruz2RSH2PBsi1iQcnAgB50',
		imagerySet:'AerialWithLabels'
	})
});

var bingAerialWithLabels2 = new ol.layer.Tile({
	title:'Bing Maps—Aerial with Labels',
	type:'base',
	visible:false,
	source:new ol.source.BingMaps({
		key:'AhR83cplckbaskh0Du7HOTZxLS0RsClnzKhyT1mXTxruz2RSH2PBsi1iQcnAgB50',
		imagerySet:'AerialWithLabels'
	})
});

var bingAerialWithLabels3 = new ol.layer.Tile({
	title:'Bing Maps—Aerial with Labels',
	type:'base',
	visible:false,
	source:new ol.source.BingMaps({
		key:'AhR83cplckbaskh0Du7HOTZxLS0RsClnzKhyT1mXTxruz2RSH2PBsi1iQcnAgB50',
		imagerySet:'AerialWithLabels'
	})
});


/*Overlay Layers*/


//Intercomp layers

//GHS pop layer
var GHS_intercomp_final = new ol.layer.Image({
	title:'GHS population count',
	visible:true,
	source: new ol.source.ImageWMS({
		url:"http://localhost:8082/geoserver/wms",
		params: {'LAYERS' : 'Lab_project_pop:GHS_intercomp_final'}
	})
});

//World pop layer
var worldpop_intercomp_final = new ol.layer.Image({
	title:'Worlpop population count',
	visible:true,
	source: new ol.source.ImageWMS({
		url:"http://localhost:8082/geoserver/wms",
		params: {'LAYERS' : 'Lab_project_pop:worldpop_intercomp_final'}
	})
});

//Legend for GHS and worldpop layers
var addLegend_pop = function () {
  var graphicUrl = 'http://localhost:8082/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&LAYER=Lab_project_pop:GHS_intercomp_final&LEGEND_OPTIONS=fontSize:11.5;dx:10;mx:0.1;my:0.1;bgColor:0x91b9d1';
  var img = document.getElementById('legend_pop');
  img.src = graphicUrl;
};

addLegend_pop();

//Difference layer
var diff_intercomp = new ol.layer.Image({
	title:'Intercomparison map',
	visible:true,
	source: new ol.source.ImageWMS({
		url:"http://localhost:8082/geoserver/wms",
		params: {'LAYERS' : 'Lab_project_pop:intercomp_diff'}
	})
});

//Legend difference layer
var addLegend_diff = function () {
  var graphicUrl2 = 'http://localhost:8082/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&LAYER=Lab_project_pop:intercomp_diff&LEGEND_OPTIONS=fontSize:11.5;dx:10;mx:0.1;my:0.1;bgColor:0x91b9d1';
  var img2 = document.getElementById('legend_diff');
  img2.src = graphicUrl2;
};

addLegend_diff();



//Group9 tiles vectors
var vectorSource_group9 = new ol.source.Vector({
	loader: function(extent,resolution,projection){
		var url ='http://localhost:8082/geoserver/Lab_project_pop/ows?service=WFS&' +
		'version=2.0.0&request=GetFeature&typeName=Lab_project_pop:group9_tiles&' +
		'outputFormat=text/javascript&srsname=EPSG:3857&'+
		'format_options=callback:loadFeatures';
		$.ajax({url:url, dataType:'jsonp'});
	}
});

var geojsonFormat = new ol.format.GeoJSON();

function loadFeatures(response){
	vectorSource_group9.addFeatures(geojsonFormat.readFeatures(response));
}

var group9_tiles = new ol.layer.Vector({
	title:'Group 9 - Tiles',
	visible: true,
	source: vectorSource_group9,
	style: new ol.style.Style({
		stroke: new ol.style.Stroke({
			color:'rgb(255, 255,255)',
			width:4
		})
	})
});

// //Tiles correlation layer
// var group9_tiles = new ol.layer.Image({
// 	title:'Correlation for each tile',
// 	visible:false,
// 	source: new ol.source.ImageWMS({
// 		url:"http://localhost:8082/geoserver/wms",
// 		params: {'LAYERS' : 'Lab_project_pop:group9_tiles'}
// 	}),
// 	opacity:0.5
// });

//Countries border layer
var countries_borders1 = new ol.layer.Image({
	title:'Border of countries',
	visible:false,
	source: new ol.source.ImageWMS({
		url:"http://localhost:8082/geoserver/wms",
		params: {'LAYERS' : 'Lab_project_pop:World_borders'}
	})
});

var countries_borders2 = new ol.layer.Image({
	title:'Border of countries',
	visible:false,
	source: new ol.source.ImageWMS({
		url:"http://localhost:8082/geoserver/wms",
		params: {'LAYERS' : 'Lab_project_pop:World_borders'}
	})
});

var countries_borders3 = new ol.layer.Image({
	title:'Border of countries',
	visible:false,
	source: new ol.source.ImageWMS({
		url:"http://localhost:8082/geoserver/wms",
		params: {'LAYERS' : 'Lab_project_pop:World_borders'}
	})
});

//GHS intercomp map
var map1 = new ol.Map({
	target:document.getElementById('map_GHS_interc'),
	layers: [
		new ol.layer.Group({
				title: 'Base Maps',
				layers: [osm1,bingAerialWithLabels1]
			}),
			new ol.layer.Group({
				title: 'Overlay Layers',
				layers: [GHS_intercomp_final,countries_borders1]
			})
		],
	view: new ol.View({
		center:ol.proj.fromLonLat([146,44]),
		zoom:3.3,
		minZoom:3
	}),
	controls: ol.control.defaults().extend([
		new ol.control.ScaleLine(),
		new ol.control.FullScreen(),
		new ol.control.OverviewMap(),
		new ol.control.MousePosition({
			coordinateFormat: ol.coordinate.createStringXY(4),
			projection:'EPSG:4326'
		})
	])
});

//Worldpop intercomp map
var map2 = new ol.Map({
	target:document.getElementById('map_worldpop_interc'),
	layers: [
		new ol.layer.Group({
				title: 'Base Maps',
				layers: [osm2,bingAerialWithLabels2]
			}),
			new ol.layer.Group({
				title: 'Overlay Layers',
				layers: [worldpop_intercomp_final,countries_borders2]
			})
		],
	view: new ol.View({
		center:ol.proj.fromLonLat([146,44]),
		zoom:3.5,
		minZoom:3
	}),
	controls: ol.control.defaults().extend([
		new ol.control.ScaleLine(),
		new ol.control.FullScreen(),
		new ol.control.OverviewMap(),
		new ol.control.MousePosition({
			coordinateFormat: ol.coordinate.createStringXY(4),
			projection:'EPSG:4326'
		})
	])
});

//Difference intercomp map
var map3 = new ol.Map({
	target:document.getElementById('map_diff_interc'),
	layers: [
		new ol.layer.Group({
				title: 'Base Maps',
				layers: [osm3,bingAerialWithLabels3]
			}),
			new ol.layer.Group({
				title: 'Overlay Layers',
				layers: [diff_intercomp, group9_tiles,countries_borders3]
			})
		],
	view: new ol.View({
		center:ol.proj.fromLonLat([149,44]),
		zoom:4.3,
		minZoom:3.8
	}),
	controls: ol.control.defaults().extend([
		new ol.control.ScaleLine(),
		new ol.control.FullScreen(),
		new ol.control.OverviewMap(),
		new ol.control.MousePosition({
			coordinateFormat: ol.coordinate.createStringXY(4),
			projection:'EPSG:4326'
		})
	])
})




//Layer Switchers
var layerSwitcher1 = new ol.control.LayerSwitcher({});
var layerSwitcher2 = new ol.control.LayerSwitcher({});
var layerSwitcher3 = new ol.control.LayerSwitcher({});
map1.addControl(layerSwitcher1);
map2.addControl(layerSwitcher2);
map3.addControl(layerSwitcher3);