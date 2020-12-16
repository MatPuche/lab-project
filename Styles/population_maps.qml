<!DOCTYPE qgis PUBLIC 'http://mrcc.com/qgis.dtd' 'SYSTEM'>
<qgis hasScaleBasedVisibilityFlag="0" maxScale="0" version="3.4.10-Madeira" styleCategories="AllStyleCategories" minScale="1e+8">
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
    <rasterrenderer type="singlebandpseudocolor" classificationMax="68000" classificationMin="0" opacity="1" band="1" alphaBand="-1">
      <rasterTransparency/>
      <minMaxOrigin>
        <limits>None</limits>
        <extent>WholeRaster</extent>
        <statAccuracy>Estimated</statAccuracy>
        <cumulativeCutLower>0.02</cumulativeCutLower>
        <cumulativeCutUpper>0.98</cumulativeCutUpper>
        <stdDevFactor>2</stdDevFactor>
      </minMaxOrigin>
      <rastershader>
        <colorrampshader classificationMode="2" clip="0" colorRampType="INTERPOLATED">
          <colorramp type="gradient" name="[source]">
            <prop v="255,245,240,255" k="color1"/>
            <prop v="103,0,13,255" k="color2"/>
            <prop v="0" k="discrete"/>
            <prop v="gradient" k="rampType"/>
            <prop v="0.13;254,224,210,255:0.26;252,187,161,255:0.39;252,146,114,255:0.52;251,106,74,255:0.65;239,59,44,255:0.78;203,24,29,255:0.9;165,15,21,255" k="stops"/>
          </colorramp>
          <item label="0" value="0" color="#fff5f0" alpha="255"/>
          <item label="10" value="10" color="#ffe8dd" alpha="255"/>
          <item label="20" value="20" color="#fed6c4" alpha="255"/>
          <item label="30" value="30" color="#fdbea5" alpha="255"/>
          <item label="50" value="50" color="#fca487" alpha="255"/>
          <item label="75" value="75" color="#fc8a6a" alpha="255"/>
          <item label="100" value="100" color="#fc7050" alpha="255"/>
          <item label="150" value="150" color="#f6533b" alpha="255"/>
          <item label="500" value="500" color="#eb362a" alpha="255"/>
          <item label="1000" value="1000" color="#d42020" alpha="255"/>
          <item label="5000" value="5000" color="#ba1419" alpha="255"/>
          <item label="10000" value="10000" color="#9b0c13" alpha="255"/>
          <item label="32767" value="32767" color="#67000d" alpha="255"/>
          <item label="68000" value="68000" color="#2e0000" alpha="255"/>
        </colorrampshader>
      </rastershader>
    </rasterrenderer>
    <brightnesscontrast brightness="0" contrast="0"/>
    <huesaturation colorizeRed="255" colorizeOn="0" grayscaleMode="0" colorizeBlue="128" saturation="0" colorizeGreen="128" colorizeStrength="100"/>
    <rasterresampler maxOversampling="2"/>
  </pipe>
  <blendMode>0</blendMode>
</qgis>
