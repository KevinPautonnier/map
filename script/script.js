function initMap() {
    var nantes = {lat: 47.219564, lng: -1.557407};
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: nantes
    });
}

function addMarker() {
    var marker = new google.maps.Marker({
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


function editMarker() {
    animatedEditButton();
}

function animatedAddButton() {
    $("#addButton").css("display", "none");
    $('#backButton').css("display", "flex");
    $('#addSubButton>button').css('display', 'block');
    $('#addSubButton').animate({"width": "30vw"});
}

function animatedEditButton() {
    $("#addButton").css("display", "none");
    //$("#form").css("alignItems", "flex-start");
    $('#editButton').animate({"width": "80%", "position": "absolute", "top": "0"});
    $('#backButton').css("display", "flex");
}

function back() {
    $('#addSubButton').animate({"width": "0"}, "fast", "swing", function () {
        $('#addSubButton>button').css('display', 'none');
        $('#addButton').removeAttr('style');
        $('#editButton').removeAttr('style');
        $('#backButton').css("display", "none");
    });
}