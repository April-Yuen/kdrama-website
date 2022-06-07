const express = require('express')
const app = express()
const PORT = 8000

const kDramaShows = {
    'forecasting love and weather': {
        'title': 'Forcasting Love and Weather',
        'genre':'Romantic Comedy',
        'plot': 'A story depicting love and work lives of employees at the Korea Meteorological Administration. Jin Ha-Kyung and Lee Shi-Woo are two people employed there.',
        'cast': 'Park Min-Young * Song Kang'
    },
    'twenty-five twenty-one': {
        'title': 'Twenty-Five Twenty-One',
        'genre': 'Romance',
        'plot': 'Na Hee-Do is a member of her high school fencing team. Due to the South Korean financial crisis, the high school fencing team gets disbanded. Getting through all the difficulties, she becomes a member of the sabre fencing national team. The South Korean financial crisis also causes Back Yi-Jin\'s father\'s business to go bankrupt. This leads to a life change for Back Yi-Jin, from living the life of a wealthy person to a poor person. While studying, he works part-time jobs like delivery newspapers. Later, he becomes a sports reporter for a broadcasting network.',
        'cast': 'Kim Tae-Ri * Nam Joo-Hyukddddddd'
    },
    'unknown': {
        'title': 'unknown',
        'genre': 'unknown',
        'plot': 'unknown',
        'cast': 'unknown'
    }
}


app.get('/',(request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/kDramaShows', (request,response) =>{
    response.json(kDramaShows)
})

app.get('/api/:title', (request, response)=>{
    const show = request.params.title.toLowerCase()

    if(kDramaShows[show]){
        response.json(kDramaShows[show])
    }else {
        response.json('unknown')
    }
})

app.listen(PORT, ()=>{
    console.log(`The server is now listening on ${PORT}.`)
})