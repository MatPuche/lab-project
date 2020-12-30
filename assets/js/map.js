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


//Stamen Terrain
var stamenTerrain1 = new ol.layer.Tile({
	title:'Stamen Terain',
	type:'base',
	visible: false,
	source: new ol.source.Stamen({
		layer: 'terrain'
	})
});

var stamenTerrain2 = new ol.layer.Tile({
	title:'Stamen Terain',
	type:'base',
	visible: false,
	source: new ol.source.Stamen({
		layer: 'terrain'
	})
});

var stamenTerrain3 = new ol.layer.Tile({
	title:'Stamen Terain',
	type:'base',
	visible: false,
	source: new ol.source.Stamen({
		layer: 'terrain'
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
	title:'Difference',
	visible:true,
	source: new ol.source.ImageWMS({
		url:"http://localhost:8082/geoserver/wms",
		params: {'LAYERS' : 'Lab_project_pop:intercomp_diff'}
	})

});

//Legend difference layer
var addLegend_diff = function () {
  var graphicUrl = 'http://localhost:8082/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&LAYER=Lab_project_pop:intercomp_diff&LEGEND_OPTIONS=fontSize:11.5;dx:10;mx:0.1;my:0.1;bgColor:0x91b9d1';
  var img = document.getElementById('legend_diff');
  img.src = graphicUrl;
};

addLegend_diff();

//Intercomp difference reclassified layer
var diff_intercomp_rec = new ol.layer.Image({
	title:'Reclassified difference',
	visible:false,
	source: new ol.source.ImageWMS({
		url:"http://localhost:8082/geoserver/wms",
		params: {'LAYERS' : 'Lab_project_pop:intercomp_diff_rec'}
	})

});

//Legend difference reclassified layer
var addLegend_diff_rec = function () {
  var graphicUrl = 'http://localhost:8082/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&LAYER=Lab_project_pop:intercomp_diff_rec&LEGEND_OPTIONS=fontSize:11.5;dx:10;mx:0.1;my:0.1;bgColor:0x91b9d1';
  var img = document.getElementById('legend_diff_rec');
  img.src = graphicUrl;
};

addLegend_diff_rec();



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
	visible: false,
	source: vectorSource_group9
});

//Styling the group9_tiles vector
group9_tiles.setStyle(function(feature) {
  let fillColor;
  const correlation = feature.get('correlatio');
  if (correlation < 0.15) {
    fillColor = 'rgba(215, 25, 28, 0.5)';
  } else if (correlation < 0.35) {
    fillColor = 'rgba(253, 174, 97, 0.5)';
  } else if (correlation < 0.55) {
    fillColor = 'rgba(255, 255, 140, 0.5)';
  } else if (correlation < 0.76) {
    fillColor = 'rgba(171, 221, 164, 0.5)';
  } else {
    fillColor = 'rgba(43, 131, 186, 0.5)';
  }
  return new ol.style.Style({
    fill: new ol.style.Fill({
      color: fillColor
    }),
    stroke: new ol.style.Stroke({
      color: 'rgba(35, 35, 35,0.5)',
      width: 1
    })
  });
});

  

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
				layers: [osm1,bingAerialWithLabels1,stamenTerrain1]
			}),
			new ol.layer.Group({
				title: 'Overlay Layers',
				layers: [GHS_intercomp_final,countries_borders1]
			})
		],
	view: new ol.View({
		center:ol.proj.fromLonLat([144,47]),
		zoom:3.3,
		minZoom:3
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

//Worldpop intercomp map
var map2 = new ol.Map({
	target:document.getElementById('map_worldpop_interc'),
	layers: [
		new ol.layer.Group({
				title: 'Base Maps',
				layers: [osm2,bingAerialWithLabels2,stamenTerrain2]
			}),
			new ol.layer.Group({
				title: 'Overlay Layers',
				layers: [worldpop_intercomp_final,countries_borders2]
			})
		],
	view: new ol.View({
		center:ol.proj.fromLonLat([144,47]),
		zoom:3.3,
		minZoom:3
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

//Difference intercomp map
var map3 = new ol.Map({
	target:document.getElementById('map_diff_interc'),
	layers: [
		new ol.layer.Group({
				title: 'Base Maps',
				layers: [osm3,bingAerialWithLabels3,stamenTerrain3]
			}),
			new ol.layer.Group({
				title: 'Overlay Layers',
				layers: [diff_intercomp,diff_intercomp_rec, group9_tiles,countries_borders3]
			})
		],
	view: new ol.View({
		center:ol.proj.fromLonLat([150,45]),
		zoom:4.1,
		minZoom:3.8
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
})



//Layer Switchers
var layerSwitcher1 = new ol.control.LayerSwitcher({});
var layerSwitcher2 = new ol.control.LayerSwitcher({});
var layerSwitcher3 = new ol.control.LayerSwitcher({});
map1.addControl(layerSwitcher1);
map2.addControl(layerSwitcher2);
map3.addControl(layerSwitcher3);


//Popup
var elementPopup = document.getElementById('popup');
var popup = new ol.Overlay({
	element: elementPopup
});

map3.addOverlay(popup);


map3.on('click',function(event){
	var feature = map3.forEachFeatureAtPixel(
		event.pixel,function(feature,layer){return feature;}
		);

	if(feature !=null){
		var pixel = event.pixel;
		var coord = map3.getCoordinateFromPixel(pixel);
		popup.setPosition(coord);
		$(elementPopup).attr('title','Tile n°'+feature.get('fid'));
		$(elementPopup).attr('data-content','<b id="in_popup">Correlation factor: </b>'+feature.get('correlatio').toFixed(3)+
			'</br><b id="in_popup">Mean difference: </b>'+ feature.get('diff_mean').toFixed(3)+
			'</br><b id="in_popup">Minimum difference: </b>'+ feature.get('diff_min').toFixed()+
			'</br><b id="in_popup">Maximum difference: </b>'+ feature.get('diff_max').toFixed()+
			'</br><b id="in_popup">Non null cells: </b>'+ feature.get('diff_count').toFixed());
		$(elementPopup).popover({'placement':'top','html':true});
		$(elementPopup).popover('show');}
	else{
		$(elementPopup).popover('dispose');
		return;
	}
});

map3.on('pointermove',function(event){
	if (event.dragging){
		$(elementPopup).popover('dispose');
		return;
	}
	var pixel = map3.getEventPixel(event.originalEvent);
	var hit =map3.hasFeatureAtPixel(pixel);
	map3.getTarget().style.cursor = hit ? 'pointer':'';
});