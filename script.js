const jokeEle = document.querySelector('.joke');

// get the joke from an API and update the DOM
async function getAJoke(params) {
    try {
        const response = await fetch("https://icanhazdadjoke.com/slack");
        const data = await response.json();
        const { text } = data.attachments[0];
        console.log(text);
        jokeEle.textContent = text;
    } catch (error) {
        console.log(error);
    }
}

//on load
getAJoke();