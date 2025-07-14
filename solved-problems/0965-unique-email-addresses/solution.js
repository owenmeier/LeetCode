/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    const uniqueEmails = new Set();

    emails.forEach(email => {
        let i = 0;
        let string = "";
        let ignore = false;
        while (email[i] !== "@") {
            if (email[i] == "+") ignore = true;
            if (email[i] !== "." && !ignore) {
                string += email[i];
            }
            i++;
        }
        for (; i < email.length - 4; i++) {
            string += email[i];
        }
        uniqueEmails.add(string)
    })

return uniqueEmails.size;


};
