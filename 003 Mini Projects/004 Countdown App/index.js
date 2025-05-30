const targetDate = new Date('2023-07-19 00:00:00');

function updateDaysPassed() {
    const currentDate = new Date();
    const timeDifference = currentDate - targetDate;

    const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
    const days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('daysPassed').innerText = 
        `${years} Years ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

    setTimeout(updateDaysPassed, 1000); // Update every second
}

updateDaysPassed();