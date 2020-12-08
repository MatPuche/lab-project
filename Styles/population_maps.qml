<!DOCTYPE qgis PUBLIC 'http://mrcc.com/qgis.dtd' 'SYSTEM'>
<qgis minScale="1e+8" maxScale="0" hasScaleBasedVisibilityFlag="0" version="3.4.10-Madeira" styleCategories="AllStyleCategories">
  <flags>
    <Identifiable>1</Identifiable>
    <Removable>1</Removable>
    <Searchable>1</Searchable>
  </flags>
  <customproperties>
    <property value="false" key="WMSBackgroundLayer"/>
    <property value="false" key="WMSPublishDataSourceUrl"/>
    <property value="0" key="embeddedWidgets/count"/>
    <property value="Value" key="identify/format"/>
  </customproperties>
  <pipe>
    <rasterrenderer type="singlebandpseudocolor" alphaBand="-1" classificationMin="0" classificationMax="32767" band="1" opacity="1">
      <rasterTransparency/>
      <minMaxOrigin>
        <limits>MinMax</limits>
        <extent>WholeRaster</extent>
        <statAccuracy>Estimated</statAccuracy>
        <cumulativeCutLower>0.02</cumulativeCutLower>
        <cumulativeCutUpper>0.98</cumulativeCutUpper>
        <stdDevFactor>2</stdDevFactor>
      </minMaxOrigin>
      <rastershader>
        <colorrampshader colorRampType="INTERPOLATED" classificationMode="2" clip="0">
          <colorramp type="gradient" name="[source]">
            <prop v="255,245,240,255" k="color1"/>
            <prop v="103,0,13,255" k="color2"/>
            <prop v="0" k="discrete"/>
            <prop v="gradient" k="rampType"/>
            <prop v="0.13;254,224,210,255:0.26;252,187,161,255:0.39;252,146,114,255:0.52;251,106,74,255:0.65;239,59,44,255:0.78;203,24,29,255:0.9;165,15,21,255" k="stops"/>
          </colorramp>
          <item value="0" alpha="255" color="#fff5f0" label="0"/>
          <item value="10" alpha="255" color="#ffe8dd" label="10"/>
          <item value="20" alpha="255" color="#fed6c4" label="20"/>
          <item value="30" alpha="255" color="#fdbea5" label="30"/>
          <item value="50" alpha="255" color="#fca487" label="50"/>
          <item value="75" alpha="255" color="#fc8a6a" label="75"/>
          <item value="100" alpha="255" color="#fc7050" label="100"/>
          <item value="150" alpha="255" color="#f6533b" label="150"/>
          <item value="500" alpha="255" color="#eb362a" label="500"/>
          <item value="1000" alpha="255" color="#d42020" label="1000"/>
          <item value="5000" alpha="255" color="#ba1419" label="5000"/>
          <item value="10000" alpha="255" color="#9b0c13" label="10000"/>
          <item value="32767" alpha="255" color="#67000d" label="32767"/>
        </colorrampshader>
      </rastershader>
    </rasterrenderer>
    <brightnesscontrast brightness="0" contrast="0"/>
    <huesaturation saturation="0" colorizeBlue="128" colorizeOn="0" grayscaleMode="0" colorizeRed="255" colorizeStrength="100" colorizeGreen="128"/>
    <rasterresampler maxOversampling="2"/>
  </pipe>
  <blendMode>0</blendMode>
</qgis>
