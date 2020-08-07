import "regenerator-runtime";
import "./styles/style.css";
import "./scripts/app-bar.js"

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn");

btn.addEventListener("click", main);

function main() {

    const baseUrl = "https://api.quotable.io";

      const getQuote = async () => {
        try {
          const response = await fetch(`${baseUrl}/random`);
          const responseJson = await response.json();
          if(responseJson.error) {
             showResponseMessage(responseJson.message);
          } else {
            renderData(responseJson);
            }
        } catch(error) {
           showResponseMessage(error);
        }
    }

    const renderData =(data)=> {
          quote.innerHTML = `"${data.content}"`;
          author.innerHTML = `- ${data.author}`;
    };

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };

    getQuote();

}

//export default main;



