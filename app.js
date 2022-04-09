var click = document.querySelector('.click')
var text = document.querySelector('.text')
var result = document.querySelector('.result')
var dataTitle = document.querySelector('.dataTitle')
var dataApi = "https://api.dictionaryapi.dev/api/v2/entries/en/"

click.addEventListener('click', async () => {
    const res = await fetch(dataApi+text.value)
    const data = await res.json()
    //console.log(data)

    const meaningTitle = data[0]['word']
    const definition = data[0]['meanings'][0]['definitions'][0]['definition']
    dataTitle.innerHTML = meaningTitle
    result.innerHTML = definition
    console.log(definition)
})