(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{264:function(e,n,a){"use strict";a.r(n);var t=a(31),o=a(96),r=a(149),c=a(66),d=a(148),w=a(3),i=a(2),s=a(12),u=a(9),m=a(5),v=a(20),I=a(4);Object(I.u)();var g=new s.a({url:"data/geojson/countries.geojson",format:new t.a}),p=new w.a({target:"map",layers:[new m.a({source:new u.b}),new v.a({source:g})],view:new i.a({center:[0,0],zoom:2})}),b=new o.a,f=new r.a({features:b.getFeatures()}),l=new c.c({type:"Polygon",source:g}),y=new d.a({source:g});var h=document.getElementById("mode");function j(){switch(p.removeInteraction(f),p.removeInteraction(b),p.removeInteraction(l),p.removeInteraction(b),h.value){case"draw":p.addInteraction(l),p.addInteraction(y);break;case"modify":p.addInteraction(b),p.addInteraction(f),p.addInteraction(y)}}h.addEventListener("change",j),j()}},[[264,0]]]);
//# sourceMappingURL=edit-geographic.js.map