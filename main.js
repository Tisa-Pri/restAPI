console.log('test this');

// async/ await 
async function getPhoto() {
    try {
        const datePicker = document.getElementById('date-picker');
        const selectedDate = datePicker.value;

        // API 
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=8xBW8Ng3m010gifi3J3VTorthslSfa8K8JwdzhcV&date=${selectedDate}`);
        const data = await response.json();
        
        document.body.style.backgroundImage = `url('${data.url}')`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundAttachment = 'fixed';

        const photoInfo = document.getElementById('photo-info');
        photoInfo.innerHTML = `
            <h2>${data.title}</h2>
            <p>${data.explanation}</p>
        `;
    } catch (error) {
        console.error('Error fetching APOD:', error);
        const photoInfo = document.getElementById('photo-info');
        photoInfo.innerHTML = '<p>Error fetching APOD. Please try again later.</p>';
    }
}




