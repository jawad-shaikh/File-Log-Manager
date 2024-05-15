const fs = require('fs');
const path = require('path');

const getTodayDate = () => {
    const today = new Date();
    let month = "" + (today.getMonth() + 1);
    let day = "" + today.getDate();
    const year = today.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
};

const getCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return `${hours}:${minutes}:${seconds}`;
};

const fileLogger = (config) => {
    const basePath = config.path;

    return (logName, message) => {
        const logsDir = path.join(basePath, logName);
        const logFileName = `${getTodayDate()}.log`;
        const logFilePath = path.join(logsDir, logFileName);

        if (!fs.existsSync(logsDir)) {
            fs.mkdirSync(logsDir, { recursive: true });
        }

        if (!fs.existsSync(logFilePath)) {
            fs.writeFileSync(logFilePath, '', 'utf8');
        }

        const logMessage = `${getCurrentTime()}: ${message}\n`;

        fs.appendFileSync(logFilePath, logMessage, 'utf8');
    };
};

module.exports = fileLogger;
