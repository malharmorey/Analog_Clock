setInterval(() => {
    let date = new Date();

    let H = date.getHours();
    let M = date.getMinutes();
    let S = date.getSeconds();

    let hourRotation = 30*H + M/2;
    let minuteRotation = 6*M + S/6;
    let secondRotation = 6*S;

    hour.style.transform = `rotateZ(${hourRotation}deg)`;
    minute.style.transform = `rotateZ(${minuteRotation}deg)`;
    second.style.transform = `rotateZ(${secondRotation}deg)`;
}, 1000);