// the worst programming languange ever (bc it's hard 😔)
function darkMode () { // yippee i love darkmode!!!😍
  const dark = document.body
  const darkLogo = document.getElementById("dark_mode")
  dark.classList.toggle("dark-mode")
  darkLogo.classList.add("fadeOut") // idk what is this, it's from AI,NOO IK ITS AI BUT IM NOT CHEATING OKAY?
  setTimeout (() => {
    if (dark.classList.contains("dark-mode")) {
      darkLogo.textContent = "light_mode"
    } else {
      darkLogo.textContent = "dark_mode" // YATTAAA DARK MODE
    }
    darkLogo.classList.remove("fadeOut") // some animation hehe
    darkLogo.classList.add("fadeIn")
    setTimeout (() => {
      darkLogo.classList.remove("fadeIn")
    }, 300)
  })
} //f*ck this sh*t i hate JavaScript fr
// JavaScript is the worst programming languange ever
// i hate JavaScript, i love python

const display = document.getElementById("display") // lonely const :<

function appendValue (value) { // WTFFF i hate ts fr
  const lastChar = display.value.slice(-1) // tf is slice huh?
  if (["+", "-", "*", "%", "/"].includes(value) && ["+", "-", "*", "%", "/"].includes(lastChar)) return
  if (value === "." && display.value.slice(-1) === ".") return
  if (value === "." && display.value === "") display.value = "0"
  display.value += value // blocker hehe :3 there are some bug tbh from this fckin blocker☹️
}

// it makes me sick af

function backspace () {
  display.value = display.value.slice(0, -1)
}

function clearDisplay () {
  display.value = "" // yeahhh keep it simple dawg
}

function calculate () { // i hate function i love def🥰
  try {
    display.value = eval(display.value)
  } catch {
    display.value = "Error" // lots of comment hehe😋
  }
} // wtf is try catch, i just know try except dude
// 🏃: try catch me!!

// created by me yk, an AI help me too (i'm not cheating fr)
// funfact, i coded it on my phone andddddd with AI... 
// IM NOT CHEATING OKAY? i-it...it just help me so much hehe :3
// by the way, the app that i use for coding on my phone is Acode