window.onload = function() {
    var httpRequest;

    document.getElementById("search").addEventListener("click", function(event) {
        event.preventDefault();


        httpRequest = new XMLHttpRequest();

        //request 
        httpRequest.onreadystatechange = searchHeroes;
        httpRequest.open("GET", "superheroes.php");
        httpRequest.send();


        function searchHeroes(){
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                // Everything is good, the response was received.
                if (httpRequest.status === 200) {
                    // Perfect!
                    alert(httpRequest.responseText);
                } else {
                    // There was a problem with the request.
                }
            } else {
                // Not ready yet.
            }
        }
    });


};
