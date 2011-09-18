
var jQT = new $.jQTouch({
            icon: 'jqtouch.png',
            addGlossToIcon: false,
            startupScreen: 'jqt_startup.png',
            statusBar: 'black'
});

function addVenue(obj){	
	var venue = '<li><a href="'+obj.url+'"><h3>'+obj.name+'</h3><p>'+obj.location.address+'</p><p>'+obj.location.crossStreet+'</p><p>'+obj.location.city+','+obj.location.state+'</p><p class="phone">'+obj.contact.formattedPhone+'</p></a><a class=\"markButton\" href="mark_here.html" data-transition="slideup"></a></li>';

	$('#list').append(venue);
	$('#list li:first').addClass('primaryItem').append('<div class\"glow\"></div>');
}

function getFoursquareUrl(coords){
	return  = 'https://api.foursquare.com/v2/venues/search?ll='+coords.latitude+','+coords.longitude+'&oauth_token=NOWWELWARHDMJJW3ZZNKIK5M3FNWCKPBTTFGZLZG4OE4QMOK&v=20110917';
}

$(function(){		
        var lookup = jQT.updateLocation(function(coords){
		if (coords) {
			console.log('Coordinates recieved from the deice.');
			$.ajax({
				type:'Get',
				url:getFoursquareUrl(coords),
				success:function(responseData){
						console.log(responseData);
						for (var venueIndex in responseData.response.venues)
							addVenue(responseData.response.venues[venueIndex]);
					}
				});
                } else {
                    console.log('Device not capable of geo-location.');
                }
            });
            if (lookup) {
                console.log('Looking up location&hellip;');
            }
        });
