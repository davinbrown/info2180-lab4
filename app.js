window.onload = function() {
    var httpRequest;

    document.getElementById("search-btn").addEventListener("click", function(event) {
        event.preventDefault();

        httpRequest = new XMLHttpRequest();

        var letters_only = /^[a-zA-Z\s]*$/;

        // get search input
        var searchTerm = document.getElementById("search-input").value.trim();
        
        if (searchTerm == "") {
            var queryStr = "";
        }else{
            // sanitise query
            if (letters_only.test(searchTerm)) {
                var queryStr = "?search=" + searchTerm;
            }
        }

        //request 
        httpRequest.onreadystatechange = searchHeroes;
        httpRequest.open("GET", "superheroes.php" + queryStr );
        httpRequest.send();


        function searchHeroes(){
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                // Everything is good, the response was received.
                if (httpRequest.status === 200) {
                    // Perfect!
                    document.getElementById("result").innerHTML = httpRequest.responseText;
                    //alert(httpRequest.responseText);
                } else {
                    // There was a problem with the request.
                }
            } else {
                // Not ready yet.
            }
        }
    });

};
