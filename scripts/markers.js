var map = L.map('map').setView([0, 0], 0);
    L.tileLayer('map/{z}/{x}/{y}.png', {
      continuousWorld: false,
      noWrap: true,  
      minZoom: 3,
      maxZoom: 4,
    }).addTo(map);
	
	var Crash = L.icon({
		iconUrl:       'icons/Crash.png',
		iconRetinaUrl: 'icons/Crash.png',
		iconSize:    [25, 41],
		iconAnchor:  [12, 41],
		popupAnchor: [1, -34],
		tooltipAnchor: [16, -28],
	});
	
	var Medic = L.icon({
		iconUrl:       'icons/Medic.png',
		iconRetinaUrl: 'icons/Medic.png',
		iconSize:    [25, 41],
		iconAnchor:  [12, 41],
		popupAnchor: [1, -34],
		tooltipAnchor: [16, -28],
	});
	
	var Shop = L.icon({
		iconUrl:       'icons/Shop.png',
		iconRetinaUrl: 'icons/Shop.png',
		iconSize:    [25, 41],
		iconAnchor:  [12, 41],
		popupAnchor: [1, -34],
		tooltipAnchor: [16, -28],
	});
	
	var Helicopter = L.icon({
		iconUrl:       'icons/Helicopter.png',
		iconRetinaUrl: 'icons/Helicopter.png',
		iconSize:    [45, 45],
		iconAnchor:  [30, 45],
		popupAnchor: [1, -38],
		tooltipAnchor: [16, -28],
	});
	
	var el_crash1 = L.marker([-1.845384, 6.152344], {icon: Crash}).bindPopup('<b>Helicopter Crash,<br>weapons in a box.</b>'),
		el_crash2 = L.marker([22.350076, 34.892578], {icon: Crash}).bindPopup('<b>Helicopter Crash,<br>weapons in a box.</b>'),
		el_crash3 = L.marker([33.870416, -12.568359], {icon: Crash}).bindPopup('<b>Helicopter Crash,<br>weapons in a box.</b>'),
		el_crash4 = L.marker([19.973349, -30.498047], {icon: Crash}).bindPopup('<b>Helicopter Crash,<br>weapons in a box.</b>'),
		el_crash5 = L.marker([0.703107, -44.736328], {icon: Crash}).bindPopup('<b>Helicopter Crash,<br>weapons in a box.</b>');
	
	var el_medic1 = L.marker([32, -16], {icon: Medic}).bindPopup('<b>First aid kit</b>');
		el_medic2 = L.marker([38.479395, -48.427734], {icon: Medic}).bindPopup('<b>First aid kit</b>'),
		el_medic3 = L.marker([45.706179, -11.777344], {icon: Medic}).bindPopup('<b>First aid kit</b>'),
		el_medic4 = L.marker([44.964798, -19.863281], {icon: Medic}).bindPopup('<b>First aid kit</b>'),
		el_medic5 = L.marker([49.95122, -23.994141], {icon: Medic}).bindPopup('<b>First aid kit</b>'),
		el_medic6 = L.marker([-15, 22], {icon: Medic}).bindPopup('<b>First aid kit</b>');
	
	var el_shop1 = L.marker([20, -28], {icon: Shop}).bindPopup('<b>Food, water</b>'),
		el_shop2 = L.marker([-1.933227, 1.230469], {icon: Shop}).bindPopup('<b>Food, water</b>'),
		el_shop3 = L.marker([-8.494105, -14.501953], {icon: Shop}).bindPopup('<b>Food, water</b>');
	
	var el_helicopter1 = L.marker([-10.882275, -6.091797], {icon: Helicopter}).bindPopup('<b>Rescue helicopter</b>'),
		el_helicopter2 = L.marker([-18.812811, 15.941406], {icon: Helicopter}).bindPopup('<b>Rescue helicopter</b>'),
		el_helicopter3 = L.marker([-28.536275, 27], {icon: Helicopter}).bindPopup('<b>Rescue helicopter</b>'),
		el_helicopter4 = L.marker([-7.885147, 34.601563], {icon: Helicopter}).bindPopup('<b>Rescue helicopter</b>'),
		el_helicopter5 = L.marker([-17.811456, 43.654297], {icon: Helicopter}).bindPopup('<b>Rescue helicopter</b>'),
		el_helicopter6 = L.marker([15.284185, 42.890625], {icon: Helicopter}).bindPopup('<b>Rescue helicopter</b>'),
		el_helicopter7 = L.marker([36.031332, 57.804688], {icon: Helicopter}).bindPopup('<b>Rescue helicopter</b>'),
		el_helicopter8 = L.marker([52.1, 29.707031], {icon: Helicopter}).bindPopup('<b>Rescue helicopter</b>'),
		el_helicopter9 = L.marker([48.516604, -15.380859], {icon: Helicopter}).bindPopup('<b>Rescue helicopter</b>'),
		el_helicopter10 = L.marker([52.179343, -22.548828], {icon: Helicopter}).bindPopup('<b>Rescue helicopter</b>'),
		el_helicopter11 = L.marker([34.307144, -11.777344], {icon: Helicopter}).bindPopup('<b>Rescue helicopter</b>'),
		el_helicopter12 = L.marker([29.688053, -17.666016], {icon: Helicopter}).bindPopup('<b>Rescue helicopter</b>'),
		el_helicopter13 = L.marker([28.459033, -30.761719], {icon: Helicopter}).bindPopup('<b>Rescue helicopter</b>'),
		el_helicopter14 = L.marker([29.916852, -42.714844], {icon: Helicopter}).bindPopup('<b>Rescue helicopter</b>'),
		el_helicopter15 = L.marker([12.897489, -34.453125], {icon: Helicopter}).bindPopup('<b>Rescue helicopter</b>'),
		el_helicopter16 = L.marker([23.644524, -50.097656], {icon: Helicopter}).bindPopup('<b>Rescue helicopter</b>'),
		el_helicopter17 = L.marker([7.449624, -47.724609], {icon: Helicopter}).bindPopup('<b>Rescue helicopter</b>'),
		el_helicopter18 = L.marker([-14.667338, -47.076172], {icon: Helicopter}).bindPopup('<b>Rescue helicopter</b>'),
		el_helicopter19 = L.marker([-9.795678, -37.880859], {icon: Helicopter}).bindPopup('<b>Rescue helicopter</b>'),
		el_helicopter20 = L.marker([-20.715015, -24.169922], {icon: Helicopter}).bindPopup('<b>Rescue helicopter</b>'),
		el_helicopter21 = L.marker([-30.221102, -5.097656], {icon: Helicopter}).bindPopup('<b>Rescue helicopter</b>'),
		el_helicopter22 = L.marker([-28.22697, -14.0625], {icon: Helicopter}).bindPopup('<b>Rescue helicopter</b>'),
		el_helicopter23 = L.marker([-47.694974, -26.542969], {icon: Helicopter}).bindPopup('<b>Rescue helicopter</b>'),
		el_helicopter24 = L.marker([-51.399206, -29.091797], {icon: Helicopter}).bindPopup('<b>Rescue helicopter</b>');
	
	var mg_crash_all = L.layerGroup([el_crash1,el_crash2,el_crash3,el_crash4,el_crash5]).addTo(map);
	var mg_medic_all = L.layerGroup([el_medic1,el_medic2,el_medic3,el_medic4,el_medic5,el_medic6]).addTo(map);
	var mg_shop_all = L.layerGroup([el_shop1,el_shop2,el_shop3]).addTo(map);
	var mg_helicopter_all = L.layerGroup([el_helicopter1,el_helicopter2,el_helicopter3,el_helicopter4,el_helicopter5,el_helicopter6,el_helicopter7,el_helicopter8,el_helicopter9,el_helicopter10,el_helicopter11,el_helicopter12,el_helicopter13,el_helicopter14,el_helicopter15,el_helicopter16,el_helicopter17,el_helicopter18,el_helicopter19,el_helicopter20,el_helicopter21,el_helicopter22,el_helicopter23,el_helicopter24]).addTo(map);

	var overlays={ 
		"<img src='icons/Medic_menu.png' /> Medic" : mg_medic_all, 
		"<img src='icons/Crash_menu.png' /> Crash" : mg_crash_all,
		"<img src='icons/Shop_menu.png' /> Shop" : mg_shop_all,
		"<img src='icons/Helicopter_menu.png' /> Helipad" : mg_helicopter_all,
		}

	L.control.layers(null, overlays, {collapsed: false}).addTo(map);