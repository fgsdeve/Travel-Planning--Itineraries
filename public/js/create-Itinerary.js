
const country=document.getElementById(countrydropdownMenuButton);

   const createItinerary =  async(event) => {

   
  event.preventDefault();
    
    const response = await fetch('/itinerary/create', {
      method: 'POST',
      body: JSON.stringify({total_cost:5000, lengthOfStay:5,user_id:1,country_id:1,place_id:1,attraction_id:1,hotel_id:1 }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      alert('Itinerary created successfully');
    } else {
      alert('Please try again later!');
    }
  }


    document
    .querySelector('#submit')
    .addEventListener('click', createItinerary);

