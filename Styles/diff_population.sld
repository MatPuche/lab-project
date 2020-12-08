<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor xmlns="http://www.opengis.net/sld" xmlns:sld="http://www.opengis.net/sld" xmlns:gml="http://www.opengis.net/gml" xmlns:ogc="http://www.opengis.net/ogc" version="1.0.0">
  <UserLayer>
    <sld:LayerFeatureConstraints>
      <sld:FeatureTypeConstraint/>
    </sld:LayerFeatureConstraints>
    <sld:UserStyle>
      <sld:Name>intercomp_diff_final</sld:Name>
      <sld:FeatureTypeStyle>
        <sld:Rule>
          <sld:RasterSymbolizer>
            <sld:ChannelSelection>
              <sld:GrayChannel>
                <sld:SourceChannelName>1</sld:SourceChannelName>
              </sld:GrayChannel>
            </sld:ChannelSelection>
            <sld:ColorMap type="ramp">
              <sld:ColorMapEntry quantity="-12085" color="#5c0e34" label="-12085"/>
              <sld:ColorMapEntry quantity="-6000" color="#8c1651" label="-6000"/>
              <sld:ColorMapEntry quantity="-3000" color="#a61a5e" label="-3000"/>
              <sld:ColorMapEntry quantity="-1500" color="#b23b74" label="-1500"/>
              <sld:ColorMapEntry quantity="-500" color="#be5c8b" label="-500"/>
              <sld:ColorMapEntry quantity="-250" color="#ca7da2" label="-250"/>
              <sld:ColorMapEntry quantity="-100" color="#d69fba" label="-100"/>
              <sld:ColorMapEntry quantity="-30" color="#e3c2d2" label="-30"/>
              <sld:ColorMapEntry quantity="-10" color="#efe4ea" label="-10"/>
              <sld:ColorMapEntry quantity="0" color="#ffffff" label="0"/>
              <sld:ColorMapEntry quantity="10" color="#e3efed" label="10"/>
              <sld:ColorMapEntry quantity="30" color="#bfe3dd" label="30"/>
              <sld:ColorMapEntry quantity="100" color="#9bd7cd" label="100"/>
              <sld:ColorMapEntry quantity="250" color="#76c8bb" label="250"/>
              <sld:ColorMapEntry quantity="500" color="#4fb2a2" label="500"/>
              <sld:ColorMapEntry quantity="1500" color="#289b8a" label="1500"/>
              <sld:ColorMapEntry quantity="3000" color="#018571" label="3000"/>
              <sld:ColorMapEntry quantity="6000" color="#006554" label="6000"/>
              <sld:ColorMapEntry quantity="18097" color="#003e33" label="18097"/>
            </sld:ColorMap>
          </sld:RasterSymbolizer>
        </sld:Rule>
      </sld:FeatureTypeStyle>
    </sld:UserStyle>
  </UserLayer>
</StyledLayerDescriptor>
