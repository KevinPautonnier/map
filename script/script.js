function initMap() {
    var nantes = {lat: 47.219564, lng: -1.557407};
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: nantes
    });
}

function addMarker() {
    animatedPositionMMarker();
    marker = new google.maps.Marker({
        position: map.getCenter(),
        map: map,
        draggable: true
    });
    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<div id="bodyContent">'+
        '<p>Drag me</p>'+
        '</div>'+
        '</div>';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    infowindow.open(map, marker);
}

function animatedAddButton() {
    $("#addButton").css("display", "none");
    $('#backButton').css("display", "flex");
    $('#addSubButton>button').css('display', 'block');
    $('#addSubButton').animate({"width": "30vw"});
}

function animatedAddMarker() {
    $("#positionMarker").css("display", "none");
    //$("#form").css("alignItems", "flex-start");
    $('#locationMarker').animate({"width": "100%", "position": "absolute", "top": "0"});
    $('#backButton').attr("onclick", "addBack()");
}

function animatedPositionMMarker() {
    $("#locationMarker").css("display", "none");
    //$("#form").css("alignItems", "flex-start");
    $('#positionMarker').animate({"width": "100%", "position": "absolute", "top": "0"});
    $('#backButton').attr("onclick", "positionBack()");
}

function firstBack() {
    $('#addSubButton').animate({"width": "0"}, "fast", "swing", function () {
        $('#addSubButton>button').css('display', 'none');
        $('#addButton').removeAttr('style');
        $('#editButton').removeAttr('style');
        $('#backButton').css("display", "none");
    });
}

function addBack() {
    var newHeight = $('#addSubButton').height()*0.4+20;
    $('#backButton').attr("onclick", "firstBack()");
    $('#addSubButton>button').css('display', 'block');
    $('#locationMarker').animate({"position": "relative", "top": newHeight});
    $('#locationMarker').css("width", "fit-content");
}

function positionBack() {
    marker.setMap(null);
    var newHeight = $('#addSubButton').height()*0.4;
    $('#backButton').attr("onclick", "firstBack()");
    $('#addSubButton>button').css('display', 'block');
    $('#positionMarker').animate({"position": "relative", "top": newHeight});
    $('#positionMarker').css("width", "fit-content");
}