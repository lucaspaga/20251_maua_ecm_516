// const axios = require('axios')
// const q = 'Itu'
// const appId = 'f2aabbd823eccef2adabc7ce9cfa1ff8'
// const cnt = '2'
// const units = 'metric'
// const lang = 'pt_br'
// const baseURL = 'api.openweathermap.org/data/2.5/forecast'
// const url = `https://${baseURL}?q=${q}&appid=${appId}&cnt=${cnt}&units=${units}&lang=${lang}`
// console.log(url)
// const previsoes = axios.get(url)
// previsoes.then(res => {
//     console.log(res.data)
//     console.log("*********************")
//     return res.data
// })
//     .then(function (res) {
//         console.log(`cnt: ${res.cnt}`)
//         console.log("*********************")
//         return res
//     })
//     .then(res => {
//         console.log(`Temperatura Máxima: ${res.list[0].main.temp_max}\u00B0`)
//         console.log("*********************\n")
//         return { list: res.list, city: res.city }
//     })
//     .then(res => {
//         for (let previsao of res.list) {
//             console.log(`Descrição: ${previsao.weather[0].description}`)
//             console.log(`Sensação Térmica: ${previsao.main.feels_like}\u00B0`)
//             console.log(`Descrição: ${previsao.weather[0].description}`)
//             console.log("*********************\n")
//         }


//         const city = res.city
//         console.log(`Nascer do sol : ${new Date(city.sunrise * 1000).toLocaleTimeString()}`)
//         console.log(`Por do sol : ${new Date(city.sunset * 1000).toLocaleTimeString()}`)


//         return res
//     })


//async/await
// async function hello(nome){
//     return `Oi, ${nome}`
// }
// hello('Ana').then(res => console.log(res))

const fatorial = (n) => {
    if(n<0) return Promise.reject('Apenas valores positivos')
    let res = 1
    for (let i = 2; i <= n; i++) res *= i
    return Promise.resolve(res)
}

// const comThemCatch = () => {
//     fatorial(10)
//     .then(res => console.log(`Resultado: ${res}`))
//     .catch(err => console.log(`Erro: ${err}`))

//     fatorial(-10)
//     .then(res => console.log(`Resultado: ${res}`))
//     .catch(err => console.log(`Erro: ${err}`))
// }

// comThemCatch()

// const comAsynAwait = async () => {
//     try{
//         const f1 = await fatorial(10)
//         console.log(f1)
//     }catch(err){
//         console.log(`Erro: ${err}`)
//     }
    
//     try{
//         const f2 = await fatorial(-10)
//         console.log(f2)
//     }catch(err){
//         console.log(`Erro: ${err}`)
//     }


// }

// comAsynAwait()