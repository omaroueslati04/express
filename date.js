const checkWorkingHours = (req, res, next) => {
    const currentDate = new Date();
    const currentDay = currentDate.getDay(); 
    const currentHour = currentDate.getHours(); 

    if (currentDay >= 1 && currentDay <= 5 && currentHour >= 9 && currentHour < 22) {
        return next(); 
    } else {
        return res.status(403).send("L'application est disponible uniquement pendant les heures de travail (Lun-Ven, 9h-17h).");
    }
};

module.exports = { checkWorkingHours };
