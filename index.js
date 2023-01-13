const button = document.querySelector(".btn")
const joke = document.querySelector(".joke")
const punchline = document.querySelector(".punchline")

window.addEventListener("onload", getJoke())

async function getJoke() {
  const URL = "https://official-joke-api.appspot.com/random_joke"
  const response = await fetch(URL)
  const data = await response.json()

  joke.innerText = data.setup
  punchline.innerText = data.punchline
}

button.addEventListener("click", (e) => {
  getJoke()
})
