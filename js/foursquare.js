var jQT = new $.jQTouch({
            icon: 'jqtouch.png',
            addGlossToIcon: false,
            startupScreen: 'jqt_startup.png',
            statusBar: 'black'
});

$(function(){
            function setDisplay(text) {
				console.log(text)
            }
			function addItem(obj){		
				var venue = '<li><a><p>'+obj.name+'</p></a></li>'
				
				
				$('.list').append(venue);
				console.log(obj);
	
			}
            
            // We pass "updateLocation" a callback function,
            // to run once we have the coordinates.
            // We also set it to a variable, so we can know
            // right away if it's working or not
            var lookup = jQT.updateLocation(function(coords){
                if (coords) {
                    setDisplay('Latitude: ' + coords.latitude + '<br />Longitude: ' + coords.longitude);
		$.ajax({
			type:'Get',
			url:'https://api.foursquare.com/v2/venues/search?ll='+coords.latitude+','+coords.longitude+'&oauth_token=NOWWELWARHDMJJW3ZZNKIK5M3FNWCKPBTTFGZLZG4OE4QMOK&v=20110917',
			success:function(data){
				console.log(data);
				alert(data.response.venues[0].name);
				for (var item in data.response.venues)
					addItem(data.response.venues[item]);
			}
		})
                } else {
                    setDisplay('Device not capable of geo-location.');
                }
            });

            if (lookup) {
                setDisplay('Looking up location&hellip;');
            }
        });