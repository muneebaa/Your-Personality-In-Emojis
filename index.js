// Push the emoji into the myEmoji's array, and clear the input field
// However, if the input value is empty, don't do anything

const myEmojis = ["🦹", "⛷", "🍲"]
const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")

function render() {
    let emojis = ""
    for (let i = 0; i < myEmojis.length; i++) {
        emojis += `
           <span>${myEmojis[i]}</span>
        `
    }
    emojiContainer.innerHTML = emojis
}
render()

pushBtn.addEventListener("click", function () {
    if (emojiInput.value === ""){
        render()
    }else{
        myEmojis.push(emojiInput.value)
        render()
        emojiInput.value = ""
    }
})

unshiftBtn.addEventListener("click" , () => {
    if (emojiInput.value === "") {
        render()
    } else {
        myEmojis.unshift(emojiInput.value)
        render()
        emojiInput.value = ""
    }
})


popBtn.addEventListener("click" , () => {
    myEmojis.pop()
    render()
})


shiftBtn.addEventListener("click" , () => {
    myEmojis.shift()
    render()
})




