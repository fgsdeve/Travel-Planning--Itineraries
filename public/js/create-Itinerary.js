document.querySelector('#submit').addEventListener('click', async (event) => {
  event.preventDefault();

  const total_cost = 5000;
  const lengthOfStay = 5;
  const user_id = 1; // Replace with dynamic user ID if needed
  const country_id = document.getElementById('countryDropdownMenuButton').getAttribute('data-id');
  const place_id = document.getElementById('placeDropdownMenuButton').getAttribute('data-id');
  const attraction_id = document.getElementById('attractionDropdownMenuButton').getAttribute('data-id');
  const hotel_id = document.getElementById('hotelDropdownMenuButton').getAttribute('data-id');

  const response = await fetch('/itinerary/create', {
    method: 'POST',
    body: JSON.stringify({ total_cost, lengthOfStay, user_id, country_id, place_id, attraction_id, hotel_id }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    alert('Itinerary created successfully');
  } else {
    alert('Please try again later!');
  }
});
