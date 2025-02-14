const targetDate = new Date('2026-01-01 00:00:00');

function updateCount() {
    const currentDate = new Date();

    const timeDifference = targetDate - currentDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    setTimeout(updateCount, 1000);
}

updateCount();