
function updateTimeAndDate() {
    const now = new Date();

    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';


    hours = hours % 12;
    hours = hours ? hours : 12; // If hour is 0, display as 12

    
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

    
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[now.getDay()];
    const day = now.getDate();
    const month = now.toLocaleString('default', { month: 'long' });
    const year = now.getFullYear();

    const dateString = `${dayOfWeek}, ${month} ${day}, ${year}`;

   
    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = dateString;
    
}


setInterval(updateTimeAndDate, 1000);


updateTimeAndDate();
