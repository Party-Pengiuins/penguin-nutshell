/*
    This module is for randomizing a title in the forms
*/
const stringArray = [
    "Today, this person did something cool!", 
    "You won't believe number 3!", 
    "What I did at NSS today", 
    "Someone's trapped in a well! (Again!)"
]

const randomStringGenerator = (stringArray) => {
    const randomizeArray = Math.floor(Math.random() * (stringArray.length));

    return stringArray[randomizeArray];
}

export default randomStringGenerator;