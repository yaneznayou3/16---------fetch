let linkS = document.querySelector('img')
let inputSearch = document.querySelector('#inputSearch')
let btnSearchImg = document.querySelector('#btnSearchImg')
let btnRandomImg = document.querySelector('#btnRandomImg')

let request = false;

let API = 'g427Ok2GUeaw2pnpFZVDnNqWOCfSzelc'
let RequestURLRandom = `https://api.giphy.com/v1/gifs/random?api_key=${API}&tag=&rating=g`
let RequestURLSearch = `https://api.giphy.com/v1/gifs/search?api_key=${API}&q=${inputSearch.value}&limit=1&offset=0&rating=g&lang=en`

