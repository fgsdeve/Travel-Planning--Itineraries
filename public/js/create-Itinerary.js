
//const Dish = require('');

const placesDropdown = document.getElementById("PlacesdropdownMenuButton");

// const getPlaces = async (event) => {
//     // Stop the browser from submitting the form so we can do so with JavaScript
//     event.preventDefault();
//     console.log(event);
//     const pathName=document.location.pathname;
//     let lastChar = pathName[pathName.length - 1];
   
//     const response = await fetch('/countries/${lastChar}');
//     const places=  await response.json();
     
//     console.log(places);

//     //for (let i=0;i<=places.length-1;i++){
//       var anchor = document.createElement("a");
//         anchor.setAttribute('data-id', 1);
//         anchor.setAttribute('href', "janani");
//         anchor.setAttribute('class', 'dropdown-item');
//         placesDropdown.appendChild(anchor);
  
//   //  }
  
//   };


  const getPlaces =  (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
    console.log(event);
    
   

    //for (let i=0;i<=places.length-1;i++){
      const anchor = document.createElement("a");
      
        anchor.setAttribute('data-id', 1);
        anchor.setAttribute('href', "#janani");
        anchor.setAttribute('class', 'dropdown-item');
        anchor.setAttribute('text', 'dropdown-item');
        placesDropdown.appendChild(anchor);

  alert("hi");
  //  }
  
  };


  document
    .querySelector('#dropdownMenuButton')
    .addEventListener('hide.bs.dropdown', getPlaces);
  


