function displayQuote(response) {
  let quoteElement = response.data.answer;
  new Typewriter("#quote", {
    strings: quoteElement,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();
  let inputTopicElement = document.querySelector("#inputTopic");
  let apiKey = "48d9c02baa93fa8d733783cd33ot621f";
  let prompt = `User instructions: Generate 1 quote that includes ${inputTopicElement.value} always inside single quotation marks`;
  let context =
    "You are an expert at finding inspirational quotes. Please only show the quote without the author. Please follow user intructions. ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayQuote);
}

let quoteGeneratorElement = document.querySelector("#quoteGeneratorForm");
quoteGeneratorElement.addEventListener("submit", generateQuote);
