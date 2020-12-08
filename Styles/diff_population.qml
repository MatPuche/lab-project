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
    <rasterrenderer type="singlebandpseudocolor" alphaBand="-1" classificationMin="-12085" classificationMax="18097" band="1" opacity="1">
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
            <prop v="166,26,94,255" k="color1"/>
            <prop v="1,133,113,255" k="color2"/>
            <prop v="0" k="discrete"/>
            <prop v="gradient" k="rampType"/>
            <prop v="0.251202;205,134,168,255:0.5;245,245,245,255:0.75;128,205,193,255" k="stops"/>
          </colorramp>
          <item value="-12085" alpha="255" color="#5c0e34" label="-12085"/>
          <item value="-6000" alpha="255" color="#8c1651" label="-6000"/>
          <item value="-3000" alpha="255" color="#a61a5e" label="-3000"/>
          <item value="-1500" alpha="255" color="#b23b74" label="-1500"/>
          <item value="-500" alpha="255" color="#be5c8b" label="-500"/>
          <item value="-250" alpha="255" color="#ca7da2" label="-250"/>
          <item value="-100" alpha="255" color="#d69fba" label="-100"/>
          <item value="-30" alpha="255" color="#e3c2d2" label="-30"/>
          <item value="-10" alpha="255" color="#efe4ea" label="-10"/>
          <item value="0" alpha="255" color="#ffffff" label="0"/>
          <item value="10" alpha="255" color="#e3efed" label="10"/>
          <item value="30" alpha="255" color="#bfe3dd" label="30"/>
          <item value="100" alpha="255" color="#9bd7cd" label="100"/>
          <item value="250" alpha="255" color="#76c8bb" label="250"/>
          <item value="500" alpha="255" color="#4fb2a2" label="500"/>
          <item value="1500" alpha="255" color="#289b8a" label="1500"/>
          <item value="3000" alpha="255" color="#018571" label="3000"/>
          <item value="6000" alpha="255" color="#006554" label="6000"/>
          <item value="18097" alpha="255" color="#003e33" label="18097"/>
        </colorrampshader>
      </rastershader>
    </rasterrenderer>
    <brightnesscontrast brightness="0" contrast="0"/>
    <huesaturation saturation="0" colorizeBlue="128" colorizeOn="0" grayscaleMode="0" colorizeRed="255" colorizeStrength="100" colorizeGreen="128"/>
    <rasterresampler maxOversampling="2"/>
  </pipe>
  <blendMode>0</blendMode>
</qgis>
