function getVenues(){
	var venues;	
	var lookup = jQT.updateLocation(function(coords){
		if(coords){
			$.ajax({
				type:'Get',
				url:'https://api.foursquare.com/v2/venues/search?ll='+coords.latitude+','+coords.longitude+'&oauth_token=NOWWELWARHDMJJW3ZZNKIK5M3FNWCKPBTTFGZLZG4OE4QMOK&v=20110917',
                                success:function(data){
                               		venues = data.venues;
                                }			
			}) 
		}
	})
}

