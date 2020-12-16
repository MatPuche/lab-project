<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor xmlns="http://www.opengis.net/sld" version="1.0.0" xmlns:sld="http://www.opengis.net/sld" xmlns:gml="http://www.opengis.net/gml" xmlns:ogc="http://www.opengis.net/ogc">
  <UserLayer>
    <sld:LayerFeatureConstraints>
      <sld:FeatureTypeConstraint/>
    </sld:LayerFeatureConstraints>
    <sld:UserStyle>
      <sld:Name>intercomp_diff</sld:Name>
      <sld:FeatureTypeStyle>
        <sld:Rule>
          <sld:RasterSymbolizer>
            <sld:ChannelSelection>
              <sld:GrayChannel>
                <sld:SourceChannelName>1</sld:SourceChannelName>
              </sld:GrayChannel>
            </sld:ChannelSelection>
            <sld:ColorMap type="ramp">
              <sld:ColorMapEntry label="-12085" quantity="-12085" color="#5c0e34"/>
              <sld:ColorMapEntry label="-6000" quantity="-6000" color="#8c1651"/>
              <sld:ColorMapEntry label="-3000" quantity="-3000" color="#a61a5e"/>
              <sld:ColorMapEntry label="-1500" quantity="-1500" color="#b23b74"/>
              <sld:ColorMapEntry label="-500" quantity="-500" color="#be5c8b"/>
              <sld:ColorMapEntry label="-250" quantity="-250" color="#ca7da2"/>
              <sld:ColorMapEntry label="-100" quantity="-100" color="#d69fba"/>
              <sld:ColorMapEntry label="-30" quantity="-30" color="#e3c2d2"/>
              <sld:ColorMapEntry label="-10" quantity="-10" color="#efe4ea"/>
              <sld:ColorMapEntry label="0" quantity="0" color="#ffffff"/>
              <sld:ColorMapEntry label="10" quantity="10" color="#e3efed"/>
              <sld:ColorMapEntry label="30" quantity="30" color="#bfe3dd"/>
              <sld:ColorMapEntry label="100" quantity="100" color="#9bd7cd"/>
              <sld:ColorMapEntry label="250" quantity="250" color="#76c8bb"/>
              <sld:ColorMapEntry label="500" quantity="500" color="#4fb2a2"/>
              <sld:ColorMapEntry label="1500" quantity="1500" color="#289b8a"/>
              <sld:ColorMapEntry label="3000" quantity="3000" color="#018571"/>
              <sld:ColorMapEntry label="6000" quantity="6000" color="#006554"/>
              <sld:ColorMapEntry label="20080" quantity="20080" color="#003e33"/>
            </sld:ColorMap>
          </sld:RasterSymbolizer>
        </sld:Rule>
      </sld:FeatureTypeStyle>
    </sld:UserStyle>
  </UserLayer>
</StyledLayerDescriptor>
