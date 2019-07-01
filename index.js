// API KEY: 247d8c04e4d37e00f532f31ccf741b0f

var app = document.getElementById("app");

fetch("https://developers.zomato.com/api/v2.1/search", {
    headers: {
        'user-key': "247d8c04e4d37e00f532f31ccf741b0f",
        "Accept": "application/json"
    }
}).then(data => {
    // console.log(data)
    data.json().then(res => {
        console.log(res)
        res.restaurants.map(e => {

            var card = document.createElement("div");
            var img = document.createElement("img");
            var cardBody = document.createElement("div");
            var heading = document.createElement("h5");
            var context = document.createElement("p");
            var button = document.createElement("a");
            
            img.src = e.restaurant.thumb;
            heading.innerHTML = e.restaurant.name;
            context.innerHTML = e.restaurant.cuisines;
            button.innerHTML = "Details"
            
            cardBody.className = "card-body";
            card.className = "card";
            img.className = "card-img-top";
            context.className = "card-text";
            button.className = "btn btn-primary";
            heading.className = "card-title";

            cardBody.appendChild(heading);
            cardBody.appendChild(context);
            cardBody.appendChild(button);
        
            card.appendChild(img);
            card.appendChild(cardBody);
        
            app.appendChild(card);
            
        })
    })



})