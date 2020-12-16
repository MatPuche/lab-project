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
    <rasterrenderer type="singlebandpseudocolor" classificationMax="20080" classificationMin="-12085" opacity="1" band="1" alphaBand="-1">
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
            <prop v="166,26,94,255" k="color1"/>
            <prop v="1,133,113,255" k="color2"/>
            <prop v="0" k="discrete"/>
            <prop v="gradient" k="rampType"/>
            <prop v="0.251202;205,134,168,255:0.5;245,245,245,255:0.75;128,205,193,255" k="stops"/>
          </colorramp>
          <item label="-12085" value="-12085" color="#5c0e34" alpha="255"/>
          <item label="-6000" value="-6000" color="#8c1651" alpha="255"/>
          <item label="-3000" value="-3000" color="#a61a5e" alpha="255"/>
          <item label="-1500" value="-1500" color="#b23b74" alpha="255"/>
          <item label="-500" value="-500" color="#be5c8b" alpha="255"/>
          <item label="-250" value="-250" color="#ca7da2" alpha="255"/>
          <item label="-100" value="-100" color="#d69fba" alpha="255"/>
          <item label="-30" value="-30" color="#e3c2d2" alpha="255"/>
          <item label="-10" value="-10" color="#efe4ea" alpha="255"/>
          <item label="0" value="0" color="#ffffff" alpha="255"/>
          <item label="10" value="10" color="#e3efed" alpha="255"/>
          <item label="30" value="30" color="#bfe3dd" alpha="255"/>
          <item label="100" value="100" color="#9bd7cd" alpha="255"/>
          <item label="250" value="250" color="#76c8bb" alpha="255"/>
          <item label="500" value="500" color="#4fb2a2" alpha="255"/>
          <item label="1500" value="1500" color="#289b8a" alpha="255"/>
          <item label="3000" value="3000" color="#018571" alpha="255"/>
          <item label="6000" value="6000" color="#006554" alpha="255"/>
          <item label="20080" value="20080" color="#003e33" alpha="255"/>
        </colorrampshader>
      </rastershader>
    </rasterrenderer>
    <brightnesscontrast brightness="0" contrast="0"/>
    <huesaturation colorizeRed="255" colorizeOn="0" grayscaleMode="0" colorizeBlue="128" saturation="0" colorizeGreen="128" colorizeStrength="100"/>
    <rasterresampler maxOversampling="2"/>
  </pipe>
  <blendMode>0</blendMode>
</qgis>
