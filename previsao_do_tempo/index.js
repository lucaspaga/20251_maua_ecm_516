const q = 'Itu'
const appId = 'f2aabbd823eccef2adabc7ce9cfa1ff8'
const cnt = '2'
const units = 'metric'
const lang = 'pt_br'
const baseURL = 'api.openweathermap.org/data/2.5/forecast'
const url = `https://${baseURL}?q=${q}&appid=${appId}&cnt=${cnt}&units=${units}&lang=${lang}`
console.log(url)