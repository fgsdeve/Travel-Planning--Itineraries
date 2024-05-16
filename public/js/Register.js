

const Register =  async(event) => {
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const userName = document.querySelector('#exampleInputuser').value.trim();
    const email = document.querySelector('#exampleInputEmail1').value.trim();
    const password = document.querySelector('#exampleInputPassword1').value.trim();

    if (email && password) {
        // Send the e-mail and password to the server
        const response = await fetch('user/register', {
          method: 'POST',
          body: JSON.stringify({ userName,email, password }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          document.location.replace('/');
        } else {
          alert('Failed to log in');
        }
      }
    };
    
    document
      .querySelector('.register')
      .addEventListener('submit', Register);