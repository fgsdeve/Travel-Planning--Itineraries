
const country=document.getElementById(countrydropdownMenuButton);

   const createItinerary =  async(event) => {

   
  event.preventDefault();
    console.log(document.location.pathname);

    const pathname = document.location.pathname;
    const paths= pathname.split("/");
    const country_id= paths[2];
    const place_id= paths[4];
    const attraction_id=paths[6];
    const hotel_id=paths[8];
    console.log(`country :${country_id} || place :${place_id }|| attraction:${attraction_id}||hotel: ${hotel_id }`);

    const response = await fetch('/itinerary/create', {
      method: 'POST',
      body: JSON.stringify({total_cost:5000,length_of_stay:5,user_id:1,country_id:country_id,place_id:place_id,attraction_id:attraction_id,hotel_id:hotel_id }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
     // alert('Itinerary created successfully');
    const newItinerary=await response.json();
   console.log(newItinerary);
    // document.location.replace('/itinerary/25');
     document.location.replace(`/itinerary/${newItinerary.id}`);

    } else {
      alert('Please try again later!');
    }
  }


    document
    .querySelector('#submit')
    .addEventListener('click', createItinerary);

