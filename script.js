let modes = document.querySelectorAll(".mode")
let body = document.querySelector("body")
let content = document.querySelector("#content")
let main = document.querySelector("#main")
let img = document.querySelector("img")
let subcontent = document.querySelector("#subcontent")
let temp = document.querySelector(".default")
modes.forEach((mode) => {
    if (mode.id === "dark") {
        mode.addEventListener("click", () => {
            body.style.backgroundColor = "black"
            content.textContent = "😀"
            subcontent.textContent = "Dark Mode is happy :)"
            subcontent.style.color = "white"
            img.src = "dark.jpg"
            img.width = "300"
            img.height = "300"
            temp.style.display = "none"
        })
    } else {
        mode.addEventListener("click", () => {
            body.style.backgroundColor = "white"
            content.textContent = "😫"
            img.src = "light.png"
            img.width = "300"
            img.height = "300"
            subcontent.textContent = "Light Mode is sad :("
            subcontent.style.color = "black"
            temp.style.display = "none"
        })
    }
})