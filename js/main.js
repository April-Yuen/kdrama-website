document.querySelector('button').addEventListener('click', getDrama)

async function getDrama(){
    const dramaName = document.querySelector('input').value
    try{
        const res = await fetch(`/api?=${dramaName}`)
        const data = res.json()

        console.log(data)
        document.querySelector('h2').innerText = data[title]
        document.querySelector('genre').innerText = data[genre]
        document.querySelector('plot').innerText = data[plot]
        document.querySelector('cast').innerText = data[cast]
    }catch(error){
        console.log(error)
    }
}