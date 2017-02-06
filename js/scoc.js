$(window).load(function () {
    var i = 0;
    var images = [
        'img/lj/ljubljana.jpg',
        'img/lj/ljubljana_night.jpg',
        'img/lj/ljubljana-castle.jpg',
        'img/lj/ljubljana-river-castle.jpg'];
    $('#ljGalleryDiv').css('background-image', 'url(' + images[i] + ')');
    setInterval(function () {
        if (++i === images.length) {
            i = 0;
        }
        // console.log(i);
        $('#ljGalleryDivNext').css('background-image', 'url(' + images[i] + ')');
        // transition animation: 2s
        $('#ljGalleryDiv').fadeOut(2000, function () {
            $('#ljGalleryDiv').css('background-image', 'url(' + images[i] + ')').show();
        });
        // slide change: 3s
    }, 4000);


});

function resizer() {
    var w = $(window).width();
    var h = $(window).height();
    if (h < 470) {
    	h = 470;
    }
    $("#ljGalleryDiv").css("height", h);
    $("#ljGalleryDivNext").css("height", h);
    $("header").css("height", h);
    if (w < 975) {
        // console.log("resize");
        $(".scoc-infographics-colored").css("webkit-border-bottom-left-radius", "0");
        $(".scoc-infographics-colored").css("border-bottom-left-radius", "0");
        $(".scoc-infographics-colored").css("moz-border-bottom-left-radius", "0");
    } else {
    	$(".scoc-infographics-colored").css("webkit-border-bottom-left-radius", "20px");
        $(".scoc-infographics-colored").css("border-bottom-left-radius", "20px");
        $(".scoc-infographics-colored").css("moz-border-bottom-left-radius", "20px");
    }
}

$(window).on('load resize', function(){ 
    resizer();
});

/*Initializes map under LOCATION section*/
function initMapLj() {


    //global variable, so it can be used for changing center of maps when window is being resized
    var map = new google.maps.Map(document.getElementById('mapLj'), {
        zoom: 12,
        center: {
            lat: 46.087746,
            lng: 14.489912
        }
    });

    var myLatLngMHotel = {
        lat: 46.068634,
        lng: 14.489226
    };

    var infowindowMhotel = new google.maps.InfoWindow({
        content: '<h6 style="margin:0; padding:0;">M Hotel (officials)</h6><p style="margin:0; padding:0; line-height: 1.1;">Derčeva ulica 4, 1000 Ljubljana</p><p style="margin:0 0 0.2em 0; padding:0; line-height: 1.1;"><a href="https://www.google.rs/maps/place/M+Hotel/@46.0686304,14.4870343,17z/data=!3m1!4b1!4m5!3m4!1s0x476532b108e9c0d5:0xd4e08821c680fa04!8m2!3d46.068558!4d14.488737?hl=en" target="_blank">Open in gmaps</a></p><img src="img/location/mhotel_zgradba.jpg" />'
    });
    infowindowMhotel.setZIndex(1000);

    var markerMhotel = new google.maps.Marker({
        position: myLatLngMHotel,
        map: map,
        title: 'M Hotel (officials)'
    });

    var myLatLngTresor = {
        lat: 46.052159,
        lng: 14.504282
    };

    var infowindowTresor = new google.maps.InfoWindow({
        content: '<h6 style="margin:0; padding:0;">Hostel Tresor (unofficials)</h6><p style="margin:0; padding:0; line-height: 1.1;">Čopova ulica 38, 1000 Ljubljana</p><p style="margin:0 0 0.2em 0; padding:0; line-height: 1.1;"><a href="https://www.google.rs/maps/place/Hostel+Tresor+Ljubljana/@46.052228,14.5030842,17z/data=!3m1!4b1!4m5!3m4!1s0x47652d6227805993:0xd85cea9f221903e5!8m2!3d46.052228!4d14.5043856?hl=en" target="_blank">Open in gmaps</a></p><img src="img/location/tresor.jpg" />'
    });

    var markerTresor = new google.maps.Marker({
        position: myLatLngTresor,
        map: map,
        title: 'Hostel Tresor (unofficials)'
    });

    var myLatLngAdhoc = {
        lat: 46.048848,
        lng: 14.505865
    };

    var infowindowAdhoc = new google.maps.InfoWindow({
        content: '<h6 style="margin:0; padding:0;">AdHoc Hostel (alumni)</h6><p style="margin:0; padding:0; line-height: 1.1;">Cankarjevo nabrežje 27, 1000 Ljubljana</p><p style="margin:0 0 0.2em 0; padding:0; line-height: 1.1;"><a href="https://www.google.rs/maps/place/AdHoc+Hostel/@46.0488667,14.5037193,17z/data=!3m1!4b1!4m5!3m4!1s0x47652d638007d551:0x5ab0f6a654fc219e!8m2!3d46.048863!4d14.505908?hl=en" target="_blank">Open in gmaps</a></p><img src="img/location/adhoc.jpg" />'
    });

    var markerAdhoc = new google.maps.Marker({
        position: myLatLngAdhoc,
        map: map,
        title: 'AdHoc Hostel (alumni)'
    });

    infowindowTresor.open(map, markerTresor);
    infowindowAdhoc.open(map, markerAdhoc);
    infowindowMhotel.open(map, markerMhotel);

    marker.addListener('click', function() {
        infowindowMhotel.open(map, marker);
    });

	var center;
	function calculateCenter() {
	  center = map.getCenter();
	}
	google.maps.event.addDomListener(map, 'idle', function() {
	  calculateCenter();
	});

    google.maps.event.addDomListener(window, 'resize', function() {
    	map.setCenter(center);
	});
}

/*Popup for map of all Commitments*/
$(document).ready(function() {
    $("#intMapBtn").colorbox({
        html: '<div id="map" style="width:100%;height:100%;"></div>',
        scrolling: false,
        width: "80%",
        height: "80%",
        onComplete: function() {
            initMapInt();
        }
    });
    $(".cceImg").colorbox({
        rel:"cceImg", 
        maxWidth:"75%", 
        maxHeight:"75%",
        trapFocus: false
    });
});

/*Initializes map of all Commitments*/
function initMapInt() {
    if (!window.google) {
        return;
    } 
    var cfg = {
        zoom: 4,
        lat: 51.5,
        lng: 19.07,
        streetViewControl: false,
        mapTypeControl: false,
        mapTypeId: window.google && google.maps.MapTypeId.ROADMAP
    };

    var mapIntLcs = window.map = new google.maps.Map(document.getElementById("map"), cfg);
    mapIntLcs.setCenter(new google.maps.LatLng(cfg.lat, cfg.lng));

    var infowins = {},
        markers = {},
        latest = 0;


    infowins["aachen"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Aachen</h1>' +

            '<p><img src="https://eestec.net/media/cache/a2/d3/a2d3ffffefaec9b6b1df8588c3d89de5.jpg" style="float:left;margin:5px;">' +
            '\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003EWe are one of the elder Local Committees and one of the foundation members of EESTEC, in 1986. Our members are students of Electrical Engineering and Information Technology at RWTH Aachen University and University of Applied Sciences Aachen.  EEST...\u003C/p\u003E</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/aachen/">More details</a></p>',
        maxWidth: 250
    });
    markers["aachen"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(50.7753455, 6.0838868),
        title: 'Aachen'
    });
    google.maps.event.addListener(
        markers["aachen"],
        "click",
        function() {
            if (latest == infowins["aachen"])
                location.href = "https://eestec.net/cities/aachen/";
            if (latest)
                latest.close();
            latest = infowins["aachen"];
            latest.open(mapIntLcs, markers["aachen"]);
        }
    );

    infowins["almeria"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Almeria</h1>' +

            '<p><img src="https://eestec.net/media/cache/d0/45/d045c0542da0af3b112c3e9d43aad125.jpg" style="float:left;margin:5px;">' +
            '</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/almeria/">More details</a></p>',
        maxWidth: 250
    });
    markers["almeria"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(36.834047, -2.4637136),
        title: 'Almeria'
    });
    google.maps.event.addListener(
        markers["almeria"],
        "click",
        function() {
            if (latest == infowins["almeria"])
                location.href = "https://eestec.net/cities/almeria/";
            if (latest)
                latest.close();
            latest = infowins["almeria"];
            latest.open(mapIntLcs, markers["almeria"]);
        }
    );

    infowins["ankara"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Ankara</h1>' +

            '<p><img src="https://eestec.net/media/cache/76/51/7651bb6bcc4ce2809742031cfa41a91a.jpg" style="float:left;margin:5px;">' +
            '\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003EEESTEC LC Ankara is founded in 2006 as the ﬁrst Local Committee of EESTEC in Asia. Even though it is a relatively young LC, with more than 200 members and successful events, EESTEC LC Ankara is one of the most successful local committees through t...\u003C/p\u003E</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/ankara/">More details</a></p>',
        maxWidth: 250
    });
    markers["ankara"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(39.9333635, 32.8597419),
        title: 'Ankara'
    });
    google.maps.event.addListener(
        markers["ankara"],
        "click",
        function() {
            if (latest == infowins["ankara"])
                location.href = "https://eestec.net/cities/ankara/";
            if (latest)
                latest.close();
            latest = infowins["ankara"];
            latest.open(mapIntLcs, markers["ankara"]);
        }
    );

    infowins["antwerp"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Antwerp</h1>' +

            '<p><img src="https://eestec.net/media/cache/bb/21/bb2106366c8930ae593ba0b7ea90ebea.jpg" style="float:left;margin:5px;">' +
            '\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003ESince our event in 2014, we have been working to make the LC stronger locally. This year, we have started organizing company lectures for the students, which is a great success (either by the presented topics, or the free food afterwards...). As a...\u003C/p\u003E</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/antwerp/">More details</a></p>',
        maxWidth: 250
    });
    markers["antwerp"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(51.2194475, 4.4024643),
        title: 'Antwerp'
    });
    google.maps.event.addListener(
        markers["antwerp"],
        "click",
        function() {
            if (latest == infowins["antwerp"])
                location.href = "https://eestec.net/cities/antwerp/";
            if (latest)
                latest.close();
            latest = infowins["antwerp"];
            latest.open(mapIntLcs, markers["antwerp"]);
        }
    );

    infowins["athens"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Athens</h1>' +

            '<p><img src="https://eestec.net/media/cache/4e/02/4e029d3e8e6234bfc439c9d5b5fa8ef5.jpg" style="float:left;margin:5px;">' +
            '\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003ELC Athens was founded in 2004 by a handful of students in the National Technical University of Athens. Athens became ofﬁcially an EESTEC Local Committee in Congress 2005 in Madrid. During these ten years, more than 900 members have joined our loca...\u003C/p\u003E</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/athens/">More details</a></p>',
        maxWidth: 250
    });
    markers["athens"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(37.9838100, 23.7275390),
        title: 'Athens'
    });
    google.maps.event.addListener(
        markers["athens"],
        "click",
        function() {
            if (latest == infowins["athens"])
                location.href = "https://eestec.net/cities/athens/";
            if (latest)
                latest.close();
            latest = infowins["athens"];
            latest.open(mapIntLcs, markers["athens"]);
        }
    );

    infowins["aveiro"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Aveiro</h1>' +

            '<p><img src="https://eestec.net/media/cache/7b/ac/7bac610ddd2017b3c414308f1f2d9b4a.jpg" style="float:left;margin:5px;">' +
            '\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003ELet\u0027s go to the amazing beach of Aveiro!\u003C/p\u003E\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003E\u003Cspan\u003EEESTEC Observer Aveiro was officially founded in 1987.\u003Cbr\u003EOur members\u0026nbsp\u003Bcome from Universidade de Aveiro (UA).\u003C/span\u003E\u0026nbsp\u003B\u003Cbr\u003E\u003C/p\u003E\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003EGreetings from Aveiro,\u003C/p\u003E\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003EObserver Aveiro\u003C/p\u003E</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/aveiro/">More details</a></p>',
        maxWidth: 250
    });
    markers["aveiro"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(40.6405055, -8.6537539),
        title: 'Aveiro'
    });
    google.maps.event.addListener(
        markers["aveiro"],
        "click",
        function() {
            if (latest == infowins["aveiro"])
                location.href = "https://eestec.net/cities/aveiro/";
            if (latest)
                latest.close();
            latest = infowins["aveiro"];
            latest.open(mapIntLcs, markers["aveiro"]);
        }
    );

    infowins["banja-luka"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Banja Luka</h1>' +

            '<p><img src="https://eestec.net/media/cache/bc/e9/bce99ea38e97064349e3acb108df1cc8.jpg" style="float:left;margin:5px;">' +
            'Local committee of Banja Luka\u000D\u000Ahas been accepted in a full membership\u000D\u000Aon EESTEC congress in\u000D\u000ABelgrade, in April 2004.\u000D\u000AIn June 2004 Local committee\u000D\u000Ais registered in Banja Luka\u000D\u000Acourt as a non\u002Dproﬁt, student’s organization\u000D\u000Awith a headquarters on...</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/banja-luka/">More details</a></p>',
        maxWidth: 250
    });
    markers["banja-luka"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(44.7721811, 17.191),
        title: 'Banja Luka'
    });
    google.maps.event.addListener(
        markers["banja-luka"],
        "click",
        function() {
            if (latest == infowins["banja-luka"])
                location.href = "https://eestec.net/cities/banja-luka/";
            if (latest)
                latest.close();
            latest = infowins["banja-luka"];
            latest.open(mapIntLcs, markers["banja-luka"]);
        }
    );

    infowins["belgrade"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Belgrade</h1>' +

            '<p><img src="https://eestec.net/media/cache/41/cd/41cd1c611d2c1a922253cb64d1905ce2.jpg" style="float:left;margin:5px;">' +
            'LC Belgrade is a member of the Electrical Engineering STudents\u0027 European assoCiation, EESTEC, since 2000, and is currently with more than 200 members, one of the largest and best organized local committees in Europe. During thirteen years of its e...</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/belgrade/">More details</a></p>',
        maxWidth: 250
    });
    markers["belgrade"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(44.786568, 20.4489216),
        title: 'Belgrade'
    });
    google.maps.event.addListener(
        markers["belgrade"],
        "click",
        function() {
            if (latest == infowins["belgrade"])
                location.href = "https://eestec.net/cities/belgrade/";
            if (latest)
                latest.close();
            latest = infowins["belgrade"];
            latest.open(mapIntLcs, markers["belgrade"]);
        }
    );

    infowins["bucharest"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Bucharest</h1>' +

            '<p><img src="https://eestec.net/media/cache/aa/96/aa963cde10ec66b5c90c08e6aa86f8ea.jpg" style="float:left;margin:5px;">' +
            '\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003E\u003Cspan style\u003D\u0022line\u002Dheight: inherit\u003B\u0022\u003EGreetings from LC Bucharest!\u0026nbsp\u003B\u003C/span\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003E\u003Cspan\u003E\u003Cbr\u003E\u003C/span\u003E\u003C/p\u003E\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003E\u003Cspan\u003EWe are in EESTEC for 13 years, since the Congress in Cosenza, which was organized between 9th and 16th April 2003. EESTEC LC Bucharest activates in Politehnica University of Bucharest, thus placing itself in the i...\u003C/span\u003E\u003C/p\u003E</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/bucharest/">More details</a></p>',
        maxWidth: 250
    });
    markers["bucharest"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(44.4267674, 26.1025384),
        title: 'Bucharest'
    });
    google.maps.event.addListener(
        markers["bucharest"],
        "click",
        function() {
            if (latest == infowins["bucharest"])
                location.href = "https://eestec.net/cities/bucharest/";
            if (latest)
                latest.close();
            latest = infowins["bucharest"];
            latest.open(mapIntLcs, markers["bucharest"]);
        }
    );

    infowins["budapest"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Budapest</h1>' +

            '<p><img src="https://eestec.net/media/cache/02/67/026779f736eff6837d6a981aecd5a84f.jpg" style="float:left;margin:5px;">' +
            '\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003EMAVE (Electrical Engineering Students’ Hungarian Association) was founded in 1986, with the aim of broadening the knowledge and widening the intellectual horizons of engineering students.\u000D\u000AThis association was one of the founders of EESTEC, and ha...\u003C/p\u003E</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/budapest/">More details</a></p>',
        maxWidth: 250
    });
    markers["budapest"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(47.497912, 19.040235),
        title: 'Budapest'
    });
    google.maps.event.addListener(
        markers["budapest"],
        "click",
        function() {
            if (latest == infowins["budapest"])
                location.href = "https://eestec.net/cities/budapest/";
            if (latest)
                latest.close();
            latest = infowins["budapest"];
            latest.open(mapIntLcs, markers["budapest"]);
        }
    );

    infowins["bursa"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Bursa</h1>' +

            '<p><img src="https://eestec.net/media/cache/e5/4f/e54feb2643ed6d51fa254cdf3fa382ef.jpg" style="float:left;margin:5px;">' +
            '</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/bursa/">More details</a></p>',
        maxWidth: 250
    });
    markers["bursa"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(40.1885281, 29.0609636),
        title: 'Bursa'
    });
    google.maps.event.addListener(
        markers["bursa"],
        "click",
        function() {
            if (latest == infowins["bursa"])
                location.href = "https://eestec.net/cities/bursa/";
            if (latest)
                latest.close();
            latest = infowins["bursa"];
            latest.open(mapIntLcs, markers["bursa"]);
        }
    );

    infowins["catania"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Catania</h1>' +

            '<p><img src="https://eestec.net/media/cache/0f/b8/0fb81c44c15c87167a9f2c878a7bd7e3.jpg" style="float:left;margin:5px;">' +
            '\u003Cp\u003EFounded in mid 2013, we want to grow fast.\u003C/p\u003E\u003Cdiv\u003EFilling the gap between University and jobs in the pure EESTEC spirit is our ultimate goal.\u003C/div\u003E\u003Cdiv\u003EWith commitment and passion we strive to create a place where members can find opportunities, knowledge, team work...\u003C/div\u003E</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/catania/">More details</a></p>',
        maxWidth: 250
    });
    markers["catania"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(37.5078772, 15.0830304),
        title: 'Catania'
    });
    google.maps.event.addListener(
        markers["catania"],
        "click",
        function() {
            if (latest == infowins["catania"])
                location.href = "https://eestec.net/cities/catania/";
            if (latest)
                latest.close();
            latest = infowins["catania"];
            latest.open(mapIntLcs, markers["catania"]);
        }
    );

    infowins["chemnitz"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Chemnitz</h1>' +

            '<p><img src="https://eestec.net/media/cache/5f/0c/5f0c05654576da5f0d47ca74ddad7afc.jpg" style="float:left;margin:5px;">' +
            'Chemnitz is the new guy in town and the 6th EESTEC group in Germany so far.</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/chemnitz/">More details</a></p>',
        maxWidth: 250
    });
    markers["chemnitz"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(50.827845, 12.9213697),
        title: 'Chemnitz'
    });
    google.maps.event.addListener(
        markers["chemnitz"],
        "click",
        function() {
            if (latest == infowins["chemnitz"])
                location.href = "https://eestec.net/cities/chemnitz/";
            if (latest)
                latest.close();
            latest = infowins["chemnitz"];
            latest.open(mapIntLcs, markers["chemnitz"]);
        }
    );

    infowins["cosenza"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Cosenza</h1>' +

            '<p><img src="https://eestec.net/media/cache/26/52/26524d41032c0ccedff3984a78689a5a.jpg" style="float:left;margin:5px;">' +
            '\u003Cp\u003EASI\u002DUNICAL was born in October 1998, it is an engineering student association, not party political and no proﬁt, which intends to promote the contact between students, companies, societies and professional categories to deepen the daily engineerin...\u003C/p\u003E</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/cosenza/">More details</a></p>',
        maxWidth: 250
    });
    markers["cosenza"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(39.2982629, 16.2537357),
        title: 'Cosenza'
    });
    google.maps.event.addListener(
        markers["cosenza"],
        "click",
        function() {
            if (latest == infowins["cosenza"])
                location.href = "https://eestec.net/cities/cosenza/";
            if (latest)
                latest.close();
            latest = infowins["cosenza"];
            latest.open(mapIntLcs, markers["cosenza"]);
        }
    );

    infowins["craiova"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Craiova</h1>' +

            '<p><img src="https://eestec.net/media/cache/4d/7e/4d7e079f84634338bd5a2b9e060f0c85.jpg" style="float:left;margin:5px;">' +
            'LC Craiova is a member of the EESTEC family since 2006, has organized numerous workshops and has involved itself heavily in the local student life. EESTEC LC Craiova hosted a web programming workshop based on well\u002Dknown easy to use Python from 24t...</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/craiova/">More details</a></p>',
        maxWidth: 250
    });
    markers["craiova"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(44.3301785, 23.7948808),
        title: 'Craiova'
    });
    google.maps.event.addListener(
        markers["craiova"],
        "click",
        function() {
            if (latest == infowins["craiova"])
                location.href = "https://eestec.net/cities/craiova/";
            if (latest)
                latest.close();
            latest = infowins["craiova"];
            latest.open(mapIntLcs, markers["craiova"]);
        }
    );

    infowins["delft"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Delft</h1>' +

            '<p><img src="https://eestec.net/media/cache/2b/ea/2bea9d5fa2ec0119c3fb447d5f3a1953.jpg" style="float:left;margin:5px;">' +
            'The Electrical Engineering Society\u000D\u000Aaims to promote the electrical\u000D\u000Ascience and the interests of the\u000D\u000Astudents from Delft University of\u000D\u000ATechnology in electrical engineering.\u000D\u000AOur association was founded\u000D\u000Ain 1906, which makes it one of\u000D\u000Athe oldest...</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/delft/">More details</a></p>',
        maxWidth: 250
    });
    markers["delft"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(52.0115769, 4.3570677),
        title: 'Delft'
    });
    google.maps.event.addListener(
        markers["delft"],
        "click",
        function() {
            if (latest == infowins["delft"])
                location.href = "https://eestec.net/cities/delft/";
            if (latest)
                latest.close();
            latest = infowins["delft"];
            latest.open(mapIntLcs, markers["delft"]);
        }
    );

    infowins["east-sarajevo"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">East Sarajevo</h1>' +

            '<p><img src="https://eestec.net/media/cache/c5/bb/c5bbb8bc2ca16ab12dcc5801205a6e2f.jpg" style="float:left;margin:5px;">' +
            'Our Local Committee, LC East Sarajevo, based at the Faculty of Electrical Engineering in East Sarajevo, became a part of EESTEC in 2005. \u000D\u000AIn 2004, at Congress in Belgrade, after the elementary conditions for establishment were granted, we earned ...</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/east-sarajevo/">More details</a></p>',
        maxWidth: 250
    });
    markers["east-sarajevo"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(43.8217650, 18.3781430),
        title: 'East Sarajevo'
    });
    google.maps.event.addListener(
        markers["east-sarajevo"],
        "click",
        function() {
            if (latest == infowins["east-sarajevo"])
                location.href = "https://eestec.net/cities/east-sarajevo/";
            if (latest)
                latest.close();
            latest = infowins["east-sarajevo"];
            latest.open(mapIntLcs, markers["east-sarajevo"]);
        }
    );

    infowins["eskisehir"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Eskisehir</h1>' +

            '<p><img src="https://eestec.net/media/cache/b1/ce/b1ced66c50a037d2b3605f5f942a7258.jpg" style="float:left;margin:5px;">' +
            '\u003Cp style\u003D\u0022text\u002Dalign: center\u003B\u0022 class\u003D\u0022fr\u002Dtag\u0022\u003E\u003Cstrong\u003E\u003Cem\u003E\u003Cspan style\u003D\u0022font\u002Dfamily: Tahoma, Geneva\u003B    font\u002Dsize: 17px\u003B\u0022\u003EEESTEC LC Eskisehir, which was founded in 2006, was the 3rd local committee in Turkey. It’s members are mostly from Anadolu University Faculty of Engineering, but also it has members from the different faculties ofAnadolu University and Eskisehir ...\u003C/span\u003E\u003C/em\u003E\u003C/strong\u003E\u003C/p\u003E</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/eskisehir/">More details</a></p>',
        maxWidth: 250
    });
    markers["eskisehir"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(39.7667061, 30.5256311),
        title: 'Eskisehir'
    });
    google.maps.event.addListener(
        markers["eskisehir"],
        "click",
        function() {
            if (latest == infowins["eskisehir"])
                location.href = "https://eestec.net/cities/eskisehir/";
            if (latest)
                latest.close();
            latest = infowins["eskisehir"];
            latest.open(mapIntLcs, markers["eskisehir"]);
        }
    );

    infowins["gdansk"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Gdansk</h1>' +

            '<p><img src="https://eestec.net/media/cache/d4/4d/d44d11bbb352d5c0dabbab3e4db14eb6.jpg" style="float:left;margin:5px;">' +
            '\u003Cstyle type\u003D\u0022text/css\u0022\u003E @page { margin: 2cm } p { margin\u002Dbottom: 0.25cm\u003B direction: ltr\u003B line\u002Dheight: 120%\u003B text\u002Dalign: left\u003B orphans: 2\u003B widows: 2 } \u003C/style\u003E\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003E\u003Cspan lang\u003D\u0022en\u002DUS\u0022\u003ELC Gdańsk was founded in November of 2011. All of us, now it’s about 10 active members, study at Gdańsk University of Te...\u003C/span\u003E\u003C/p\u003E</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/gdansk/">More details</a></p>',
        maxWidth: 250
    });
    markers["gdansk"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(54.3520252, 18.6466384),
        title: 'Gdansk'
    });
    google.maps.event.addListener(
        markers["gdansk"],
        "click",
        function() {
            if (latest == infowins["gdansk"])
                location.href = "https://eestec.net/cities/gdansk/";
            if (latest)
                latest.close();
            latest = infowins["gdansk"];
            latest.open(mapIntLcs, markers["gdansk"]);
        }
    );

    infowins["gliwice"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Gliwice</h1>' +

            '<p><img src="https://eestec.net/media/cache/7c/9e/7c9e3ce4053f8033b64fd84dafac0c0d.jpg" style="float:left;margin:5px;">' +
            'Our activity began in April 29, 2013. On this day, we were ofﬁcially registered in the three faculties of the Silesian University of Technology: Faculty of Automatic Control, Electronics and Computer Science, Faculty of Electrical Engineering and ...</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/gliwice/">More details</a></p>',
        maxWidth: 250
    });
    markers["gliwice"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(50.2944923, 18.6713802),
        title: 'Gliwice'
    });
    google.maps.event.addListener(
        markers["gliwice"],
        "click",
        function() {
            if (latest == infowins["gliwice"])
                location.href = "https://eestec.net/cities/gliwice/";
            if (latest)
                latest.close();
            latest = infowins["gliwice"];
            latest.open(mapIntLcs, markers["gliwice"]);
        }
    );

    infowins["hamburg"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Hamburg</h1>' +

            '<p><img src="https://eestec.net/media/cache/b8/ca/b8ca7eca8dc55622bb97a42e826f5fa2.jpg" style="float:left;margin:5px;">' +
            '\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003ELC Hamburg is located in one of the most beautiful cities in the world! We have about twenty active members. We are students at Hamburg University of Applied Sciences and most of us are studying Electrical Engineering or Computer Science. Apart fr...\u003C/p\u003E</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/hamburg/">More details</a></p>',
        maxWidth: 250
    });
    markers["hamburg"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(53.5510846, 9.9936818),
        title: 'Hamburg'
    });
    google.maps.event.addListener(
        markers["hamburg"],
        "click",
        function() {
            if (latest == infowins["hamburg"])
                location.href = "https://eestec.net/cities/hamburg/";
            if (latest)
                latest.close();
            latest = infowins["hamburg"];
            latest.open(mapIntLcs, markers["hamburg"]);
        }
    );

    infowins["istanbul"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Istanbul</h1>' +

            '<p><img src="https://eestec.net/media/cache/38/06/380698f30f6cf6207741797505cf8bcf.jpg" style="float:left;margin:5px;">' +
            '\u003Cp class\u003D\u0022fr\u002Dtag\u0022 style\u003D\u0022margin\u002Dleft: 0px\u003B\u0022\u003E\u003Cspan style\u003D\u0022font\u002Dfamily: Verdana, Geneva\u003B\u0022\u003EEESTEC LC Istanbul is located a\u003C/span\u003E\u003Cspan style\u003D\u0022font\u002Dfamily: Verdana, Geneva\u003B background\u002Dcolor: #FFFFFF\u003B\u0022\u003Et th\u003C/span\u003E\u003Cspan style\u003D\u0022font\u002Dfamily: Verdana, Geneva\u003B\u0022\u003Ee Faculty of Electrical and Electronics, for computer science students, electrical, electronic, control, and telecommunications engineering students, in order to take advantage of the opportunities offered by EES...\u003C/span\u003E\u003C/p\u003E</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/istanbul/">More details</a></p>',
        maxWidth: 250
    });
    markers["istanbul"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(41.0082376, 28.9783589),
        title: 'Istanbul'
    });
    google.maps.event.addListener(
        markers["istanbul"],
        "click",
        function() {
            if (latest == infowins["istanbul"])
                location.href = "https://eestec.net/cities/istanbul/";
            if (latest)
                latest.close();
            latest = infowins["istanbul"];
            latest.open(mapIntLcs, markers["istanbul"]);
        }
    );

    infowins["izmir"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Izmir</h1>' +

            '<p><img src="https://eestec.net/media/cache/62/64/6264847bc12bb93a3b384eee9900dd6d.jpg" style="float:left;margin:5px;">' +
            'LC  Izmir is one of the four Local Committees in Turkey and the newest one. Our ﬁrst contact with EESTEC is dated back to 2009. Our ﬁrst workshop was held between 5th and 11th of September, 2011. Later, we got Local Committee status. LC  Izmir is ...</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/izmir/">More details</a></p>',
        maxWidth: 250
    });
    markers["izmir"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(38.423734, 27.142826),
        title: 'Izmir'
    });
    google.maps.event.addListener(
        markers["izmir"],
        "click",
        function() {
            if (latest == infowins["izmir"])
                location.href = "https://eestec.net/cities/izmir/";
            if (latest)
                latest.close();
            latest = infowins["izmir"];
            latest.open(mapIntLcs, markers["izmir"]);
        }
    );

    infowins["kaiserslautern"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Kaiserslautern</h1>' +

            '<p><img src="https://eestec.net/media/cache/42/a4/42a407258ef6297cd59dc8fc35afd5e6.jpg" style="float:left;margin:5px;">' +
            '\u003Cp\u003E\u003C/p\u003E\u003Cdiv\u003E  \u003Cdiv\u003EABOUT JLC Kaiserslautern\u003C/div\u003E  \u003Cdiv\u003EEESTEC in Kaiserslautern was found by a group of students from Technical University of Kaiserslautern in April 2013. Shortly after initial meetings, application to EESTEC international was submitted and Kaiserslautern w...\u003C/div\u003E\u003C/div\u003E</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/kaiserslautern/">More details</a></p>',
        maxWidth: 250
    });
    markers["kaiserslautern"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(49.4400657, 7.7491265),
        title: 'Kaiserslautern'
    });
    google.maps.event.addListener(
        markers["kaiserslautern"],
        "click",
        function() {
            if (latest == infowins["kaiserslautern"])
                location.href = "https://eestec.net/cities/kaiserslautern/";
            if (latest)
                latest.close();
            latest = infowins["kaiserslautern"];
            latest.open(mapIntLcs, markers["kaiserslautern"]);
        }
    );

    infowins["karlsruhe"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Karlsruhe</h1>' +

            '<p><img src="https://eestec.net/media/cache/02/22/022295a4b005ab01a5c36be310a0763b.jpg" style="float:left;margin:5px;">' +
            '\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003E\u003Cspan style\u003D\u0022line\u002Dheight: inherit\u003B\u0022\u003E\u003Cbr\u003E\u003C/span\u003E\u003C/p\u003E\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003E\u003Cspan style\u003D\u0022line\u002Dheight: inherit\u003B\u0022\u003EEESTEC JLC Karlsruhe is\u0026nbsp\u003Bconsisted of a group of highly motivated students ready to make something special in Karlsruhe. As of July, we number 115\u0026nbsp\u003Bmembers. We have already done our first international event which was a huge success and ma...\u003C/span\u003E\u003C/p\u003E</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/karlsruhe/">More details</a></p>',
        maxWidth: 250
    });
    markers["karlsruhe"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(49.0068901, 8.4036527),
        title: 'Karlsruhe'
    });
    google.maps.event.addListener(
        markers["karlsruhe"],
        "click",
        function() {
            if (latest == infowins["karlsruhe"])
                location.href = "https://eestec.net/cities/karlsruhe/";
            if (latest)
                latest.close();
            latest = infowins["karlsruhe"];
            latest.open(mapIntLcs, markers["karlsruhe"]);
        }
    );

    infowins["krakow"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Krakow</h1>' +

            '<p><img src="https://eestec.net/media/cache/83/64/8364fea599c3bfeaac53ba242c245e06.jpg" style="float:left;margin:5px;">' +
            '\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003ELC Krakow, ﬁrst Local Committee of EESTEC in Poland, is a students organization at AGH University of Science and Technology, in Krakow. We are working mostly with the Faculty of Electrical Engineering, Automatics, Computer Science and Biomedical E...\u003C/p\u003E</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/krakow/">More details</a></p>',
        maxWidth: 250
    });
    markers["krakow"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(50.0646501, 19.9449799),
        title: 'Krakow'
    });
    google.maps.event.addListener(
        markers["krakow"],
        "click",
        function() {
            if (latest == infowins["krakow"])
                location.href = "https://eestec.net/cities/krakow/";
            if (latest)
                latest.close();
            latest = infowins["krakow"];
            latest.open(mapIntLcs, markers["krakow"]);
        }
    );

    infowins["lille"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Lille</h1>' +

            '<p><img src="https://eestec.net/media/cache/96/78/96780ad5868c5326e76e48584afbff8e.jpg" style="float:left;margin:5px;">' +
            '\u003Ch1 class\u003D\u0022fr\u002Dtag\u0022\u003EHistory\u003Cbr\u003E\u003C/h1\u003E\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003ECreated in \u003Cstrong\u003E2008\u003C/strong\u003E\u003C/p\u003E\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003E\u003Cstrong\u003E\u003Cbr\u003E\u003C/strong\u003E\u003C/p\u003E\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003EJunior Local Committee in Congress 2010\u003C/p\u003E\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003E\u0026nbsp\u003B\u0026nbsp\u003B\u0026nbsp\u003B\u0026nbsp\u003B\u0026nbsp\u003B\u0026nbsp\u003B\u0026nbsp\u003B\u0026nbsp\u003B\u0026nbsp\u003B\u0026nbsp\u003B\u0026nbsp\u003B Workshop : Robotics and Intelligent Systems in 2012\u003C/p\u003E\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003ELocal Committee in Congress 2012\u003C/p\u003E\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003E\u0026nbsp\u003B\u0026nbsp\u003B\u0026nbsp\u003B\u0026nbsp\u003B\u0026nbsp\u003B\u0026nbsp\u003B...\u003C/p\u003E</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/lille/">More details</a></p>',
        maxWidth: 250
    });
    markers["lille"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(50.62925, 3.057256),
        title: 'Lille'
    });
    google.maps.event.addListener(
        markers["lille"],
        "click",
        function() {
            if (latest == infowins["lille"])
                location.href = "https://eestec.net/cities/lille/";
            if (latest)
                latest.close();
            latest = infowins["lille"];
            latest.open(mapIntLcs, markers["lille"]);
        }
    );

    infowins["linkoping"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Linköping</h1>' +

            '<p><img src="https://eestec.net/media/cache/4f/86/4f86dc2c708a680b96dc3c758132caa3.jpg" style="float:left;margin:5px;">' +
            '\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003EFounded in late 2012 as the first EESTEC commitment in Sweden. Is a part of the Student Association for Applied Physics and Electrical Engineering (a mixed programme, not two) and Medical Engineering. Hosted it\u0027s first workshop, Ragnarök, in the s...\u003C/p\u003E</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/linkoping/">More details</a></p>',
        maxWidth: 250
    });
    markers["linkoping"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(58.410807, 15.6213727),
        title: 'Linköping'
    });
    google.maps.event.addListener(
        markers["linkoping"],
        "click",
        function() {
            if (latest == infowins["linkoping"])
                location.href = "https://eestec.net/cities/linkoping/";
            if (latest)
                latest.close();
            latest = infowins["linkoping"];
            latest.open(mapIntLcs, markers["linkoping"]);
        }
    );

    infowins["lisbon"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Lisbon</h1>' +

            '<p><img src="https://eestec.net/media/cache/07/13/071335b6271e9481ce2fa7eb374665b2.jpg" style="float:left;margin:5px;">' +
            '\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003E\u003Cspan\u003EEESTEC LC Lisbon was officially founded in 2006 and became an LC during the congress in Athens,\u0026nbsp\u003Bin 2010.\u003Cbr\u003EOur members\u0026nbsp\u003Bcome from 3 different universities: Universidade de Lisboa (IST/UL), Universidade Nova de Lisboa (FCT/UNL) and Instituto ...\u003C/span\u003E\u003C/p\u003E</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/lisbon/">More details</a></p>',
        maxWidth: 250
    });
    markers["lisbon"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(38.7222524, -9.1393366),
        title: 'Lisbon'
    });
    google.maps.event.addListener(
        markers["lisbon"],
        "click",
        function() {
            if (latest == infowins["lisbon"])
                location.href = "https://eestec.net/cities/lisbon/";
            if (latest)
                latest.close();
            latest = infowins["lisbon"];
            latest.open(mapIntLcs, markers["lisbon"]);
        }
    );

    infowins["ljubljana"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Ljubljana</h1>' +

            '<p><img src="https://eestec.net/media/cache/3a/85/3a853f58d3ceef6884db4eabf0ddf712.jpg" style="float:left;margin:5px;">' +
            '\u003Cp style\u003D\u0022text\u002Dalign: justify\u003B\u0022 class\u003D\u0022fr\u002Dtag\u0022 dir\u003D\u0022ltr\u0022\u003E\u003Cspan style\u003D\u0022font\u002Dsize: 15px\u003B font\u002Dfamily: Arial\u003B color: #000000\u003B background\u002Dcolor: #ffffff\u003B font\u002Dweight: normal\u003B font\u002Dstyle: normal\u003B font\u002Dvariant: normal\u003B text\u002Ddecoration: none\u003B vertical\u002Dalign: baseline\u003B\u0022\u003ELC Ljubljana, one of the founding LCs of EESTEC, has been active for more than 25 years, and since then our members have been setting high standards with their enthusiasm and ingenuity.\u003C/span\u003E\u003C/p\u003E\u003Cp style\u003D\u0022text\u002Dalign: justify\u003B\u0022 class\u003D\u0022fr\u002Dtag\u0022 dir\u003D\u0022ltr\u0022\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cp style\u003D\u0022text\u002Dalign: justify\u003B\u0022 class\u003D\u0022fr\u002Dtag\u0022 dir\u003D\u0022ltr\u0022\u003E\u003Cspan style\u003D\u0022font\u002Dsize: 15px\u003B font\u002Dfamily: Arial\u003B color: #000000\u003B background\u002Dcolor: #ffffff\u003B font\u002Dweight: normal\u003B font\u002Dstyle: normal\u003B font\u002Dvariant: normal\u003B text\u002Ddecoration: none\u003B vertical\u002Dalign: baseline\u003B\u0022\u003EOur home institution is the University of Ljubljana, with our ...\u003C/span\u003E\u003C/p\u003E</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/ljubljana/">More details</a></p>',
        maxWidth: 250
    });
    markers["ljubljana"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(46.0569465, 14.5057515),
        title: 'Ljubljana'
    });
    google.maps.event.addListener(
        markers["ljubljana"],
        "click",
        function() {
            if (latest == infowins["ljubljana"])
                location.href = "https://eestec.net/cities/ljubljana/";
            if (latest)
                latest.close();
            latest = infowins["ljubljana"];
            latest.open(mapIntLcs, markers["ljubljana"]);
        }
    );

    infowins["madrid"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Madrid</h1>' +

            '<p><img src="https://eestec.net/media/cache/90/eb/90ebf00341bcca430e32fbf303f9f88e.jpg" style="float:left;margin:5px;">' +
            'Hola everyone! LC Madrid is one of the committees which founded EESTEC back in the 80s, being a former member of the old association which lead to the formation of EESTEC: Eurielec. Since we are very lazy, we have kept this old name, Eurielec, for...</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/madrid/">More details</a></p>',
        maxWidth: 250
    });
    markers["madrid"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(40.4167754, -3.7037902),
        title: 'Madrid'
    });
    google.maps.event.addListener(
        markers["madrid"],
        "click",
        function() {
            if (latest == infowins["madrid"])
                location.href = "https://eestec.net/cities/madrid/";
            if (latest)
                latest.close();
            latest = infowins["madrid"];
            latest.open(mapIntLcs, markers["madrid"]);
        }
    );

    infowins["milan"] = new google.maps.InfoWindow({
        content:'<h1 id="firstHeading" class="firstHeading">Milan</h1>' +
                
                '<p><img src="https://eestec.net/media/cache/c5/a8/c5a8acd338e1e4bc568af1177e5c91ea.jpg" style="float:left;margin:5px;">'+
                '</p>'+
                
                '<p><a href="https://eestec.net/cities/milan/">More details</a></p>',
        maxWidth: 250
    });
    markers["milan"] = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(45.4654219, 9.1859243),
        title: 'Milan'
    });
    google.maps.event.addListener(
            markers["milan"],
            "click",
            function () {
                if(latest==infowins["milan"])
                    location.href="https://eestec.net/cities/milan/";
                if(latest)
                    latest.close();
                latest = infowins["milan"];
                latest.open(map, markers["milan"]);
            }
    );

    infowins["munich"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Munich</h1>' +

            '<p><img src="https://eestec.net/media/cache/c7/f7/c7f731b4054de099d41da98ad3f12f56.jpg" style="float:left;margin:5px;">' +
            '\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003E\u003Cbr\u003E\u003C/p\u003E\u003Ch1 class\u003D\u0022fr\u002Dtag\u0022\u003Eabout LC Munich\u003C/h1\u003E\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003ELC Munich, also known as LC Awesome, is a very active committee in EESTEC. \u003Cbr\u003E Since its foundation in 1999 many workshops were organized. In 2013 we were the organizing committee of EESTEC’s greatest event: the congress. \u003C/p\u003E\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003EBeside the wo...\u003C/p\u003E</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/munich/">More details</a></p>',
        maxWidth: 250
    });
    markers["munich"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(48.1351253, 11.5819806),
        title: 'Munich'
    });
    google.maps.event.addListener(
        markers["munich"],
        "click",
        function() {
            if (latest == infowins["munich"])
                location.href = "https://eestec.net/cities/munich/";
            if (latest)
                latest.close();
            latest = infowins["munich"];
            latest.open(mapIntLcs, markers["munich"]);
        }
    );

    infowins["nis"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Niš</h1>' +

            '<p><img src="https://eestec.net/media/cache/3e/56/3e56a710ff0abdd7bd79806557a94027.jpg" style="float:left;margin:5px;">' +
            'Currently, EESTEC Local Committee\u000D\u000ANiš counts about 30 active\u000D\u000Amembers who are totally committed\u000D\u000Ato maintain the EESTEC atmosphere\u000D\u000Aat the Faculty Of Electronics\u000D\u000Ain Niš, as well as the city\u000D\u000Ain general.\u000D\u000AWe, in the Local committee\u000D\u000ANiš, believe ...</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/nis/">More details</a></p>',
        maxWidth: 250
    });
    markers["nis"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(43.3209022, 21.8957589),
        title: 'Niš'
    });
    google.maps.event.addListener(
        markers["nis"],
        "click",
        function() {
            if (latest == infowins["nis"])
                location.href = "https://eestec.net/cities/nis/";
            if (latest)
                latest.close();
            latest = infowins["nis"];
            latest.open(mapIntLcs, markers["nis"]);
        }
    );

    infowins["novi-sad"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Novi Sad</h1>' +

            '<p><img src="https://eestec.net/media/cache/5b/bd/5bbd2a684d00f81781f5c3221c928d8b.jpg" style="float:left;margin:5px;">' +
            'EESTEC LC Novi Sad is a local\u000Acommittee established in 2001. at\u000Athe conference in London. Our\u000Aassociation brings together students\u000Afrom the Faculty of Technical\u000ASciences in Novi Sad with\u000Athe Department of Electrical Engineering\u000Aand Computer Scienc...</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/novi-sad/">More details</a></p>',
        maxWidth: 250
    });
    markers["novi-sad"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(45.2671352, 19.8335496),
        title: 'Novi Sad'
    });
    google.maps.event.addListener(
        markers["novi-sad"],
        "click",
        function() {
            if (latest == infowins["novi-sad"])
                location.href = "https://eestec.net/cities/novi-sad/";
            if (latest)
                latest.close();
            latest = infowins["novi-sad"];
            latest.open(mapIntLcs, markers["novi-sad"]);
        }
    );

    infowins["patras"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Patras</h1>' +

            '<p><img src="https://eestec.net/media/cache/8a/88/8a88af70c20b990ee56d8fecd32658e8.jpg" style="float:left;margin:5px;">' +
            '\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003EEestec Patras was formed in 2006 with the passion of 5 undergraduate students of the Department of Electrical and Computer Engineering in the University of Patras. After the hard work of these students Eestec Patras became a JLC and after a few mo...\u003C/p\u003E</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/patras/">More details</a></p>',
        maxWidth: 250
    });
    markers["patras"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(38.2466395, 21.734574),
        title: 'Patras'
    });
    google.maps.event.addListener(
        markers["patras"],
        "click",
        function() {
            if (latest == infowins["patras"])
                location.href = "https://eestec.net/cities/patras/";
            if (latest)
                latest.close();
            latest = infowins["patras"];
            latest.open(mapIntLcs, markers["patras"]);
        }
    );

    infowins["podgorica"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Podgorica</h1>' +

            '<p><img src="https://eestec.net/media/cache/c7/2c/c72cf17ac8b68273bdee06316019bb5e.jpg" style="float:left;margin:5px;">' +
            '\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003ELocal Committee Podgorica wasofﬁcially accepted into full membershipon EESTEC Congress inDelft, in 2000th year and it is theonly local committee in Montenegro.It currently has about 120\u0026nbsp\u003Bmembers.We are aware of the seriousnessof our future cal...\u003C/p\u003E</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/podgorica/">More details</a></p>',
        maxWidth: 250
    });
    markers["podgorica"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(42.4304196, 19.2593642),
        title: 'Podgorica'
    });
    google.maps.event.addListener(
        markers["podgorica"],
        "click",
        function() {
            if (latest == infowins["podgorica"])
                location.href = "https://eestec.net/cities/podgorica/";
            if (latest)
                latest.close();
            latest = infowins["podgorica"];
            latest.open(mapIntLcs, markers["podgorica"]);
        }
    );

    infowins["riga"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Riga</h1>' +

            '<p><img src="https://eestec.net/media/cache/7a/a0/7aa0a20dd22ae0fcd3c26c8086a64738.jpg" style="float:left;margin:5px;">' +
            '\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003E\u003Cspan\u003EFirst of all we are super proud to be from the North, well to be honest it is cold here most of the year and that is why we enjoy so much traveling around Europe and meeting all the amazing EESTEC people. And when we do, we tend to get a little bi...\u003C/span\u003E\u003C/p\u003E</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/riga/">More details</a></p>',
        maxWidth: 250
    });
    markers["riga"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(56.9496487, 24.1051864),
        title: 'Riga'
    });
    google.maps.event.addListener(
        markers["riga"],
        "click",
        function() {
            if (latest == infowins["riga"])
                location.href = "https://eestec.net/cities/riga/";
            if (latest)
                latest.close();
            latest = infowins["riga"];
            latest.open(mapIntLcs, markers["riga"]);
        }
    );

    infowins["sarajevo"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Sarajevo</h1>' +

            '<p><img src="https://eestec.net/media/cache/2b/b4/2bb4df6cb550bbb57283e1d81f2672f1.jpg" style="float:left;margin:5px;">' +
            '\u003Cp style\u003D\u0022margin\u002Dleft: 40px\u003B text\u002Dalign: left\u003B\u0022\u003E\u003Cspan style\u003D\u0022font\u002Dfamily: Arial, Helvetica\u003B   font\u002Dsize: 17.3333339691162px\u003B\u0022\u003EIn the summer of \u0026nbsp\u003B2006, a group of young and motivated students came together, combined their ideas, and focused all their effort into forming EESTEC LC Sarajevo, and with that joined the unique EESTEC family. Noone was surprised when the the...\u003C/span\u003E\u003C/p\u003E</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/sarajevo/">More details</a></p>',
        maxWidth: 250
    });
    markers["sarajevo"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(43.8562586, 18.4130763),
        title: 'Sarajevo'
    });
    google.maps.event.addListener(
        markers["sarajevo"],
        "click",
        function() {
            if (latest == infowins["sarajevo"])
                location.href = "https://eestec.net/cities/sarajevo/";
            if (latest)
                latest.close();
            latest = infowins["sarajevo"];
            latest.open(mapIntLcs, markers["sarajevo"]);
        }
    );

    infowins["skopje"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Skopje</h1>' +

            '<p><img src="https://eestec.net/media/cache/96/0e/960e9a103d57a3e8e8a45c5cbb61dfce.jpg" style="float:left;margin:5px;">' +
            '\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003EThe Local Committee in Skopje was founded in the year of 2003 and with its 200 members of which more than 90 are active is one of the largest establishments in the EESTEC network. EESTEC LC Skopje for over ten years offers Ss Cyril and Methodius U...\u003C/p\u003E</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/skopje/">More details</a></p>',
        maxWidth: 250
    });
    markers["skopje"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(41.9973462, 21.4279956),
        title: 'Skopje'
    });
    google.maps.event.addListener(
        markers["skopje"],
        "click",
        function() {
            if (latest == infowins["skopje"])
                location.href = "https://eestec.net/cities/skopje/";
            if (latest)
                latest.close();
            latest = infowins["skopje"];
            latest.open(mapIntLcs, markers["skopje"]);
        }
    );

    infowins["split"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Split</h1>' +

            '<p><img src="https://eestec.net/media/cache/8c/46/8c46e5cfb395be153ba79206646cb8c7.jpg" style="float:left;margin:5px;">' +
            '\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003ESplit is a beautiful town on a Croatian coast, its Faculty of Electrical Engineering, Mechanical Engineering and Naval Architecture is a proud new\u0026nbsp\u003Bmember of EESTEC from 1st August 2016th\u0026nbsp\u003Band will\u0026nbsp\u003Bstay there for a long time with its ...\u003C/p\u003E</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/split/">More details</a></p>',
        maxWidth: 250
    });
    markers["split"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(43.5081323, 16.4401935),
        title: 'Split'
    });
    google.maps.event.addListener(
        markers["split"],
        "click",
        function() {
            if (latest == infowins["split"])
                location.href = "https://eestec.net/cities/split/";
            if (latest)
                latest.close();
            latest = infowins["split"];
            latest.open(mapIntLcs, markers["split"]);
        }
    );

    infowins["strumica"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Strumica</h1>' +

            '<p><img src="https://eestec.net/media/cache/d5/80/d5803474984a5a0147b06f19e7911252.jpg" style="float:left;margin:5px;">' +
            '</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/strumica/">More details</a></p>',
        maxWidth: 250
    });
    markers["strumica"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(41.4378004, 22.6427428),
        title: 'Strumica'
    });
    google.maps.event.addListener(
        markers["strumica"],
        "click",
        function() {
            if (latest == infowins["strumica"])
                location.href = "https://eestec.net/cities/strumica/";
            if (latest)
                latest.close();
            latest = infowins["strumica"];
            latest.open(mapIntLcs, markers["strumica"]);
        }
    );

    infowins["tampere"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Tampere</h1>' +

            '<p><img src="https://eestec.net/media/cache/ef/e9/efe9635074aa507ca5ccc9e987cea521.jpg" style="float:left;margin:5px;">' +
            '\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003ETampere has been in EESTEC since its very beginning in 1986.The ﬁrst 15 years, it was operated by the Guild of Electrical Engineering, Skilta. At the beginning of 2000\u0026nbsp\u003BEESTEC LC Tampere became an independent club to serve Computer Science and...\u003C/p\u003E</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/tampere/">More details</a></p>',
        maxWidth: 250
    });
    markers["tampere"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(61.4977524, 23.7609535),
        title: 'Tampere'
    });
    google.maps.event.addListener(
        markers["tampere"],
        "click",
        function() {
            if (latest == infowins["tampere"])
                location.href = "https://eestec.net/cities/tampere/";
            if (latest)
                latest.close();
            latest = infowins["tampere"];
            latest.open(mapIntLcs, markers["tampere"]);
        }
    );

    infowins["thessaloniki"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Thessaloniki</h1>' +

            '<p><img src="https://eestec.net/media/cache/c4/56/c456a3f97b5c0cac0beb0c47156136a4.jpg" style="float:left;margin:5px;">' +
            'EESTEC Observer Thessaloniki</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/thessaloniki/">More details</a></p>',
        maxWidth: 250
    });
    markers["thessaloniki"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(40.6400629, 22.9444191),
        title: 'Thessaloniki'
    });
    google.maps.event.addListener(
        markers["thessaloniki"],
        "click",
        function() {
            if (latest == infowins["thessaloniki"])
                location.href = "https://eestec.net/cities/thessaloniki/";
            if (latest)
                latest.close();
            latest = infowins["thessaloniki"];
            latest.open(mapIntLcs, markers["thessaloniki"]);
        }
    );

    infowins["tirana"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Tirana</h1>' +

            '<p><img src="https://eestec.net/media/cache/4d/52/4d525d61e492edb8b1ada90022cb895c.jpg" style="float:left;margin:5px;">' +
            '\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003E\u003Cb\u003ETirana\u003C/b\u003E\u003Cspan\u003E\u0026nbsp\u003B\u003C/span\u003E(Standard\u003Cspan\u003E\u0026nbsp\u003B\u003C/span\u003E\u003Ca href\u003D\u0022https://en.wikipedia.org/wiki/Albanian_language\u0022 title\u003D\u0022Albanian language\u0022\u003EAlbanian\u003C/a\u003E:\u003Cspan\u003E\u0026nbsp\u003B\u003C/span\u003E\u003Cspan lang\u003D\u0022sq\u0022\u003E\u003Ci\u003ETiranë\u003C/i\u003E\u003C/span\u003E\u003B regional\u003Cspan\u003E\u0026nbsp\u003B\u003C/span\u003E\u003Ca href\u003D\u0022https://en.wikipedia.org/wiki/Gheg_Albanian\u0022 title\u003D\u0022Gheg Albanian\u0022\u003EGheg Albanian\u003C/a\u003E:\u003Cspan\u003E\u0026nbsp\u003B\u003C/span\u003E\u003Ci\u003ETirona\u003C/i\u003E) is the capital and largest city of\u003Cspan\u003E\u0026nbsp\u003B\u003C/span\u003E\u003Ca href\u003D\u0022https://en.wikipedia.org/wiki/Albania\u0022 title\u003D\u0022Albania\u0022\u003EAlbania\u003C/a\u003E.\u003C/p\u003E\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003ETirana became Albania’s capital city in 1920. The population of the city proper at the 2015 census was 610,...\u003C/p\u003E</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/tirana/">More details</a></p>',
        maxWidth: 250
    });
    markers["tirana"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(41.3275459, 19.8186982),
        title: 'Tirana'
    });
    google.maps.event.addListener(
        markers["tirana"],
        "click",
        function() {
            if (latest == infowins["tirana"])
                location.href = "https://eestec.net/cities/tirana/";
            if (latest)
                latest.close();
            latest = infowins["tirana"];
            latest.open(mapIntLcs, markers["tirana"]);
        }
    );

    infowins["trieste"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Trieste</h1>' +

            '<p><img src="https://eestec.net/media/cache/92/d9/92d92c0a67fd59ef2e6803feade5a160.jpg" style="float:left;margin:5px;">' +
            '\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003EEESTEC LC Trieste was born in our city from an idea based on the drive to socialize, to strive for knowledge and internationalization and EESTEC International delivers those values to all its members.Let\u0027s travel back in time to the year 2000, whe...\u003C/p\u003E</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/trieste/">More details</a></p>',
        maxWidth: 250
    });
    markers["trieste"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(45.6495264, 13.7768182),
        title: 'Trieste'
    });
    google.maps.event.addListener(
        markers["trieste"],
        "click",
        function() {
            if (latest == infowins["trieste"])
                location.href = "https://eestec.net/cities/trieste/";
            if (latest)
                latest.close();
            latest = infowins["trieste"];
            latest.open(mapIntLcs, markers["trieste"]);
        }
    );

    infowins["tuzla"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Tuzla</h1>' +

            '<p><img src="https://eestec.net/media/cache/f7/0b/f70baf759cc4daaa48713a8c9e3f8ba2.jpg" style="float:left;margin:5px;">' +
            'While they were on International Electrical Engineering Students Gathering, widely known as Elektrijada, which took place in Ohrid, in 2006 , Jasmina Nalic and Hajrija Jahic have come across with the idea of establishing EESTEC in Tuzla. Members o...</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/tuzla/">More details</a></p>',
        maxWidth: 250
    });
    markers["tuzla"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(44.5374611, 18.6734688),
        title: 'Tuzla'
    });
    google.maps.event.addListener(
        markers["tuzla"],
        "click",
        function() {
            if (latest == infowins["tuzla"])
                location.href = "https://eestec.net/cities/tuzla/";
            if (latest)
                latest.close();
            latest = infowins["tuzla"];
            latest.open(mapIntLcs, markers["tuzla"]);
        }
    );

    infowins["xanthi"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Xanthi</h1>' +

            '<p><img src="https://eestec.net/media/cache/f2/ef/f2efced73bc6a43d06c5ed3e196315ec.jpg" style="float:left;margin:5px;">' +
            '\u003Cp class\u003D\u0022fr\u002Dtag\u0022 dir\u003D\u0022ltr\u0022\u003E\u003Cspan style\u003D\u0022font\u002Dsize: 14.666666666666666px\u003B font\u002Dfamily: Arial\u003B color: #000000\u003B background\u002Dcolor: transparent\u003B font\u002Dweight: 400\u003B font\u002Dstyle: normal\u003B font\u002Dvariant: normal\u003B text\u002Ddecoration: none\u003B vertical\u002Dalign: baseline\u003B\u0022\u003E\u003Cspan style\u003D\u0022font\u002Dsize: 14.666666666666666px\u003B font\u002Dfamily: Arial\u003B color: #000000\u003B background\u002Dcolor: transparent\u003B font\u002Dweight: 400\u003B font\u002Dstyle: normal\u003B font\u002Dvariant: normal\u003B text\u002Ddecoration: none\u003B vertical\u002Dalign: baseline\u003B\u0022\u003ELC Xanthi was founded in 2010 by students of the Electrical and Computer Engineering Department of Democritus University of Thrace and became officially a local committee in Congress 2014 in Athens. In November 2013, we organized our first interna...\u003C/span\u003E\u003C/span\u003E\u003C/p\u003E</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/xanthi/">More details</a></p>',
        maxWidth: 250
    });
    markers["xanthi"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(41.1300361, 24.8864902),
        title: 'Xanthi'
    });
    google.maps.event.addListener(
        markers["xanthi"],
        "click",
        function() {
            if (latest == infowins["xanthi"])
                location.href = "https://eestec.net/cities/xanthi/";
            if (latest)
                latest.close();
            latest = infowins["xanthi"];
            latest.open(mapIntLcs, markers["xanthi"]);
        }
    );

    infowins["zagreb"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Zagreb</h1>' +

            '<p><img src="https://eestec.net/media/cache/6e/02/6e02b891c068bb43d3fdf81ad2748601.jpg" style="float:left;margin:5px;">' +
            '\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003ELocal Committee Zagreb was founded 2007 at the Faculty of Electrical Engineering and Computing, University of Zagreb, Croatia. Till now, we have organised several events with great success:\u003C/p\u003E\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003E\u002D \u0022Krabactronic electronic\u0022 workshop\u003C/p\u003E\u003Cp class\u003D\u0022fr\u002Dtag\u0022\u003E\u002D \u0022Accelerated Embedde...\u003C/p\u003E</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/zagreb/">More details</a></p>',
        maxWidth: 250
    });
    markers["zagreb"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(45.8150108, 15.981919),
        title: 'Zagreb'
    });
    google.maps.event.addListener(
        markers["zagreb"],
        "click",
        function() {
            if (latest == infowins["zagreb"])
                location.href = "https://eestec.net/cities/zagreb/";
            if (latest)
                latest.close();
            latest = infowins["zagreb"];
            latest.open(mapIntLcs, markers["zagreb"]);
        }
    );

    infowins["zurich"] = new google.maps.InfoWindow({
        content: '<h1 id="firstHeading" class="firstHeading">Zurich</h1>' +

            '<p><img src="https://eestec.net/media/cache/4f/58/4f58c967e05dd90178643d659af939c7.jpg" style="float:left;margin:5px;">' +
            'EESTEC LC Zurich is legally and\u000Apractically a part of the AMIV\u003B the\u000Astudents guild representing mechanical\u000Aand electrical engineering\u000Astudents at the Swiss Federal\u000AInstitute of Technology Zurich\u000A(ETH Zurich). The members of\u000Aour LC are each 50\u000AThe ...</p>' +

            '<p><a target="_blank" href="https://eestec.net/cities/zurich/">More details</a></p>',
        maxWidth: 250
    });
    markers["zurich"] = new google.maps.Marker({
        map: mapIntLcs,
        position: new google.maps.LatLng(47.3768866, 8.541694),
        title: 'Zurich'
    });
    google.maps.event.addListener(
        markers["zurich"],
        "click",
        function() {
            if (latest == infowins["zurich"])
                location.href = "https://eestec.net/cities/zurich/";
            if (latest)
                latest.close();
            latest = infowins["zurich"];
            latest.open(mapIntLcs, markers["zurich"]);
        }
    );

}