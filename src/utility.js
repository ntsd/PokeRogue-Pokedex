fetch("https://raw.githubusercontent.com/ydarissep/dex-core/main/src/utility.js").then(response => {
    return response.text()
}).then(text => {
    text = text.replace('const index = ["levelUpLearnsets", "eggMovesLearnsets", "TMHMLearnsets", "tutorLearnsets"]', 'let index = []\nif(!settings.includes("hideEggMoves")){index = ["levelUpLearnsets", "eggMovesLearnsets", "TMHMLearnsets", "tutorLearnsets"]}else{index = ["levelUpLearnsets", "TMHMLearnsets", "tutorLearnsets"]}\n')
    eval.call(window,text)
}).catch(error => {
    console.warn(error)
})