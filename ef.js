let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButtonEL = document.getElementById("fightButton")

fightButtonEL.addEventListener("click", function() {
    let pick1 = fighters[Math.floor( Math.random() * fighters.length )]
    let pick2 = fighters[Math.floor( Math.random() * fighters.length )]
    
    stageEl.textContent = pick1 + " vs " + pick2
})
