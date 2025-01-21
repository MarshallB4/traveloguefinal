// Map
document.addEventListener('DOMContentLoaded', () => {

    // list of all 3 cities that i want to show on the maps
    const locations = [
        {
            name: 'Tokyo, Japan',
            coords: [35.6895, 139.6917], //coords for tokyo
            mapId: 'map-tokyo', //id of map containers
        },
        {
            name: 'Venice, Italy',
            coords: [45.4408, 12.3155], //coords for venice
            mapId: 'map-venice',
        },
        {
            name: 'Athens, Greece',
            coords: [37.9838, 23.7275], //coords for greece
            mapId: 'map-athens',
        },
    ];

    //goes through each location and makes a map for it
    locations.forEach(location => {
       
        // new map on x location based on above coords
        const map = L.map(location.mapId).setView(location.coords, 13);

        //add map detais from openstreetmap (streets and layout)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);



       
        L.marker(location.coords) // puts a marker on the city
            .addTo(map)
            .bindPopup(`<h3>${location.name}</h3><p>Explore this beautiful destination!</p>`);//says this text when the markerr is clicked
    });



    // Back to Top Button
    const backToTop = document.createElement('button');
    backToTop.id = 'back-to-top';
    backToTop.textContent = 'Back to Top';
    backToTop.style.position = 'fixed';
    backToTop.style.bottom = '20px';
    backToTop.style.right = '20px';
    backToTop.style.padding = '10px 15px';
    backToTop.style.background = '#ffc21b';
    backToTop.style.border = 'none';
    backToTop.style.borderRadius = '5px';
    backToTop.style.color = '#0e0f0f';
    backToTop.style.cursor = 'pointer';
    backToTop.style.display = 'none'; //none means it will be hidden at first
    backToTop.style.zIndex = '1000';// show on top of everything else
    document.body.appendChild(backToTop);

    //checks to seee if the user has scrolled far enough to show the button


    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {    // it will show once the user has scrolled past 200 pixels
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });
        // when the button is clicked, return them to the top of the page
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // makes the "scroll" to the top smooth
    });
    


});