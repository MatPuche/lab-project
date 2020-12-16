<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor xmlns="http://www.opengis.net/sld" version="1.0.0" xmlns:sld="http://www.opengis.net/sld" xmlns:gml="http://www.opengis.net/gml" xmlns:ogc="http://www.opengis.net/ogc">
  <UserLayer>
    <sld:LayerFeatureConstraints>
      <sld:FeatureTypeConstraint/>
    </sld:LayerFeatureConstraints>
    <sld:UserStyle>
      <sld:Name>worldpop_clip_intercomp_final</sld:Name>
      <sld:FeatureTypeStyle>
        <sld:Rule>
          <sld:RasterSymbolizer>
            <sld:ChannelSelection>
              <sld:GrayChannel>
                <sld:SourceChannelName>1</sld:SourceChannelName>
              </sld:GrayChannel>
            </sld:ChannelSelection>
            <sld:ColorMap type="ramp">
              <sld:ColorMapEntry label="0" quantity="0" color="#fff5f0"/>
              <sld:ColorMapEntry label="10" quantity="10" color="#ffe8dd"/>
              <sld:ColorMapEntry label="20" quantity="20" color="#fed6c4"/>
              <sld:ColorMapEntry label="30" quantity="30" color="#fdbea5"/>
              <sld:ColorMapEntry label="50" quantity="50" color="#fca487"/>
              <sld:ColorMapEntry label="75" quantity="75" color="#fc8a6a"/>
              <sld:ColorMapEntry label="100" quantity="100" color="#fc7050"/>
              <sld:ColorMapEntry label="150" quantity="150" color="#f6533b"/>
              <sld:ColorMapEntry label="500" quantity="500" color="#eb362a"/>
              <sld:ColorMapEntry label="1000" quantity="1000" color="#d42020"/>
              <sld:ColorMapEntry label="5000" quantity="5000" color="#ba1419"/>
              <sld:ColorMapEntry label="10000" quantity="10000" color="#9b0c13"/>
              <sld:ColorMapEntry label="32767" quantity="32767" color="#67000d"/>
              <sld:ColorMapEntry label="68000" quantity="68000" color="#2e0000"/>
            </sld:ColorMap>
          </sld:RasterSymbolizer>
        </sld:Rule>
      </sld:FeatureTypeStyle>
    </sld:UserStyle>
  </UserLayer>
</StyledLayerDescriptor>
