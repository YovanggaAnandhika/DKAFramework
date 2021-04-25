(async () => {
    //################################################################################################
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position){
            console.log(position)
        });
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
    //#################################################################################################
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: false,
            video: true
        })
        const videoTracks = stream.getVideoTracks()
        const track = videoTracks[0]
        console.log(`Getting video from: ${track.label}`)
        document.querySelector('video').srcObject = stream
    } catch (error) {
        alert(`${error}`)
        console.error(error)
    }
    //#################################################################################################
    function auth() {
        var config = {
            'client_id': '511392659466-7kc1ktdqdoulnn2pokor5gqahqu4c6og.apps.googleusercontent.com',
            'scope': 'https://www.google.com/m8/feeds'
        };
        gapi.auth.authorize(config, function() {
            fetch(gapi.auth.getToken());
        });
    }

    function fetch(token) {
        $.ajax({
            url: 'https://www.google.com/m8/feeds/contacts/default/full?alt=json',
            dataType: 'jsonp',
            data: token
        }).done(function(data) {
            console.log(JSON.stringify(data));
        });
    }

    auth();
})()