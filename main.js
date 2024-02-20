console.log('test this');

// async/ await 
async function getPhoto() {
    try {
        const datePicker = document.getElementById('date-picker');
        const selectedDate = new Date(datePicker.value);
        const currentDate = new Date();

        if (selectedDate.getTime() > currentDate.getTime()) {
            alert("Please select a date from 1995 to present date.");
            return;
        }

        // API 
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=8xBW8Ng3m010gifi3J3VTorthslSfa8K8JwdzhcV&date=${selectedDate.toISOString().split('T')[0]}`);
        const data = await response.json();
        
        document.body.style.backgroundImage = `url('${data.url}')`;

        const photoInfo = document.getElementById('photo-info');
        photoInfo.innerHTML = `
            <h2>${data.title}</h2>
            <p>${data.explanation}</p>
        `;
    } catch (error) {
        console.error('Error fetching APOD:', error);
        const photoInfo = document.getElementById('photo-info');
        photoInfo.innerHTML = '<p>Error fetching APOD. Please select a date or try again later.</p>';
    }
}




