const restaurants = [];

fetch('https://developers.zomato.com/api/v2.1/search?lat=19.1351&lon=72.814&count=10',
    {
        headers: {
            'user-key': 'b8cc3b8b0a85afed047f030fb52dc15f'
        }
    }
)
.then(response => response.json())
.then(data => {
    const dataArray = data.restaurants.map(restaurant => restaurant.restaurant);
    restaurants.push(...dataArray);
    // console.log(restaurants);
});

function findMatches(wordToMatch, restaurants) {

    restaurants.filter(restaurant => {
        const regex = new RegExp(wordToMatch, 'gi');
        return restaurant.name.match(regex);
    });
}

const searchBox = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

function displayMatches() {
    const matchArray = findMatches(this.value, restaurants);
    console.log(matchArray);
}

searchBox.addEventListener('keyup', displayMatches);
searchBox.addEventListener('change', displayMatches);
