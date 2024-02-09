function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote", {
    strings: "'The only thing we have to fear is fear itself.'",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let quoteGeneratorElement = document.querySelector("#quoteGeneratorForm");
quoteGeneratorElement.addEventListener("submit", generateQuote);
