/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {

    const year = date.slice(0,4);
    const month = date.slice(5,7);
    const days = date.slice(8,10);
    let count = 0;

    let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (year % 4 == 0) {
        monthDays[1] = 29;
        if (year % 100 == 0 && !(year % 400 == 0)) {
            monthDays[1] = 28;
        }
        
    }

    for (let i = 0; i < month - 1; i++) {
        for (let j = 0; j < monthDays[i]; j++) {
            count ++;
        }
    }

    for (let i = 0; i < days; i++) {
        count++;
    }

    
    return count;
    

};
