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

//Add the Group9 vector layer

//Intercomp layers
var GHS_intercomp_final = new ol.layer.Image({
	title:'GHS population count',
	visible:true,
	source: new ol.source.ImageWMS({
		url:"http://localhost:8082/geoserver/wms",
		params: {'LAYERS' : 'Lab_project_pop:GHS_intercomp_final'}
	})
});


var worldpop_intercomp_final = new ol.layer.Image({
	title:'Worlpop population count',
	visible:true,
	source: new ol.source.ImageWMS({
		url:"http://localhost:8082/geoserver/wms",
		params: {'LAYERS' : 'Lab_project_pop:worldpop_intercomp_final'}
	})
});

var diff_intercomp = new ol.layer.Image({
	title:'Intercomparison map',
	visible:true,
	source: new ol.source.ImageWMS({
		url:"http://localhost:8082/geoserver/wms",
		params: {'LAYERS' : 'Lab_project_pop:intercomp_diff'}
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
				layers: [GHS_intercomp_final]
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
				layers: [worldpop_intercomp_final]
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
				layers: [diff_intercomp]
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


//Legends
// var addLegend = function () {
//   var graphicUrl = 'http://localhost:8082/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=Lab_project_pop:GHS_intercomp_final';
//   var img = document.getElementById('legend');
//   img.src = graphicUrl;
// };

// addLegend();
