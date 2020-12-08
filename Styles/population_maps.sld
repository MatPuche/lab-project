<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor xmlns="http://www.opengis.net/sld" xmlns:sld="http://www.opengis.net/sld" xmlns:gml="http://www.opengis.net/gml" xmlns:ogc="http://www.opengis.net/ogc" version="1.0.0">
  <UserLayer>
    <sld:LayerFeatureConstraints>
      <sld:FeatureTypeConstraint/>
    </sld:LayerFeatureConstraints>
    <sld:UserStyle>
      <sld:Name>GHS_intercomp_final</sld:Name>
      <sld:FeatureTypeStyle>
        <sld:Rule>
          <sld:RasterSymbolizer>
            <sld:ChannelSelection>
              <sld:GrayChannel>
                <sld:SourceChannelName>1</sld:SourceChannelName>
              </sld:GrayChannel>
            </sld:ChannelSelection>
            <sld:ColorMap type="ramp">
              <sld:ColorMapEntry quantity="0" color="#fff5f0" label="0"/>
              <sld:ColorMapEntry quantity="10" color="#ffe8dd" label="10"/>
              <sld:ColorMapEntry quantity="20" color="#fed6c4" label="20"/>
              <sld:ColorMapEntry quantity="30" color="#fdbea5" label="30"/>
              <sld:ColorMapEntry quantity="50" color="#fca487" label="50"/>
              <sld:ColorMapEntry quantity="75" color="#fc8a6a" label="75"/>
              <sld:ColorMapEntry quantity="100" color="#fc7050" label="100"/>
              <sld:ColorMapEntry quantity="150" color="#f6533b" label="150"/>
              <sld:ColorMapEntry quantity="500" color="#eb362a" label="500"/>
              <sld:ColorMapEntry quantity="1000" color="#d42020" label="1000"/>
              <sld:ColorMapEntry quantity="5000" color="#ba1419" label="5000"/>
              <sld:ColorMapEntry quantity="10000" color="#9b0c13" label="10000"/>
              <sld:ColorMapEntry quantity="32767" color="#67000d" label="32767"/>
            </sld:ColorMap>
          </sld:RasterSymbolizer>
        </sld:Rule>
      </sld:FeatureTypeStyle>
    </sld:UserStyle>
  </UserLayer>
</StyledLayerDescriptor>
