//programação imperativa
// const nomes = ['Ana Maria', 'Antonio', 'Rodrigo', 'Alex', 'Cristina']
//produza um novo vetor que contenha somente os nomes que comecam com A
//faça usando um for
// const nomes2 =[]
// for (let i = 0; i<nomes.length; i++){
//     if (nomes[i].charAt(0)==='A'){
//         nomes2.push(nomes[i])
//     }
//     } 
// console.log(nomes2)

// const resultante = nomes.filter(nome => nome.startsWith("A") || nome.startsWith('a'))
// console.log(resultante)

//produza um novo vetor que contenha somente as iniciais de cada nome
// const nomes2 =[]
// for (let i = 0; i<nomes.length; i++){
//         nomes2.push(nomes[i].charAt(0))
//     } 
// console.log(nomes2)

// const resultante = nomes.map(function(n){
//     return n[0]
// })
// console.log(resultante)

// const resultante = nomes.every(n => n.startsWith('A'))
// console.log(resultante)

// const resultante = nomes.some(n => n.startsWith('A'))
// console.log(resultante)

// const valores = [1, 2, 3, 4]
// const soma = valores.reduce((ac, v) => ac + v)
// console.log(soma)

//programação declarativa

// let umaFuncao = function(){
//     console.log('Fui armazenada em uma variável')
// }
// umaFuncao()

// f(function(){console.log('fui passada para f')})

// function f(funcao){
//     return funcao
// }


// function g(){
//     function outraFuncao(){
//         console.log('Fui criada por g')
//         return 1
//     }
//     return outraFuncao
// }

// console.log(f(g()()))

// function f(){
//     let nome = 'Joao'
//     function g(){
//         console.log(nome)
//     }
//     g()
// }
// f()

// function ola(){
//     let nome = "Joao"
//     return function(){
//         console.log(`Olá, ${nome}`)
//     }
// }
// ola()()

//const saudacoesFactory = (saudacao, nome) => () => {console.log(`${saudacao}, ${nome}`)}
// const saudacoesFactory = function(saudacao, nome){
//     let b;
//     return function(){
//         console.log(`${saudacao}, ${nome}`)
//     }
// }
// const olaJoao = saudacoesFactory('Ola', 'Joao')
// const adeusJoao = saudacoesFactory('Adeus', 'Joao')
// olaJoao()
// adeusJoao()

// function eAgora(){
//     let cont = 1
//     function f1(){
//         console.log(cont)
//     }
//     cont++
//     function f2(){
//         console.log(cont)
//         cont++
//         console.log(cont)
//     }
//     return{f1, f2}
// }

// const eAgoraResult = eAgora()
// eAgoraResult.f1()
// eAgoraResult.f2()


//uma pessoa que se chama João e tem 17 anos

// const pessoa = {
//     nome: "João",
//     idade: 17
// }

// console.log(pessoa.nome)
// console.log(pessoa['idade'])

//uma pessoa que se chama Maria, tem 21 anos mora na rua B, numero 121, bairro J
// const pessoa = {
//     nome: "Maria",
//     idade: 21,
//     'endereco da pessoa': {
//         longradouro: "Rua B",
//         numero: "121",
//         bairro: "J",
//         cidade: {
//             nome: "Itu",
//             populacao: 70000
//         }

//     }
// }

// //console.log(pessoa.endereco.bairro)
// //console.log(pessoa.endereco.cidade.nome)
// console.log(pessoa['endereco da pessoa']['cidade']['populacao'])
// //console.log(pessoa.endereco['cidade'].nome)

//uma concessionaria tem CNPJ e endereço. Ela possui alguns carros. 
//Cada carro tem marca, modelo e ano de fabricação

// const concessionaria = {
//     cnpj: "3131313131",
//     endereco: "Rua x 323, Jabaquara",
//     carros: [
//         {
//             marca: "X",
//             modelo: "Y",
//             ano: 2000
//         },
//         {
//             marca: "B",
//             modelo: "C",
//             ano: 2002
//         },
//         {
//             marca: "D",
//             modelo: "V",
//             ano: 2005
//         },
//     ]

// }

// console.log(concessionaria.carros[1].modelo)
// for (let i = 0; i < concessionaria.carros.length; i++){
//     console.log(concessionaria.carros[i].modelo)
// }
// for (let veiculo of concessionaria.carros) {
//     console.log(veiculo)
// }

//uma calculadora que faz operações de soma e subtração, cada uma envolvendo apenas dois operandos
//1. A soma deve ser feita com uma função regular(function)
//2. A subtração deve ser feita com uma arrow funcion cujo corpo não pode ter nem {} e nem return
//no final, mostre ela em funcionamento, ou seja, some 2 com 3, e subtraia 3 de 5

// const calc = {
//     soma: function(a,b){
//         return a + b
//     },
    
//     subtracao: (a,b) => a - b,
//     multiplicacao: (a,b) => a*b,
//     divisao: function(a,b){
//         if(b === 0){
//             return "numero inválido"
//         }
//         return a/b
//     }
// }

// console.log(calc.soma(2,3))
// console.log(calc.multiplicacao(2,3))
// console.log(calc.divisao(2,3))
// console.log(calc.divisao(2,0))

//processamento síncrono (bloqueante) e processamento assíncrono (não bloqueante)
// const oi = () => console.log('oi')
// console.log('Começou...')
// oi()
// console.log('Terminou...')
//IO-Bound: Input/Output
//CPU-Bound

//inferno de callbacks
// const fs = require('fs')
// const abrirArquivo = function(nomeArquivo){
//     const exibirConteudo = function(erro, conteudo){
//         if(erro){
//             console.log(`Deu erro: ${erro}`)
//         }
//         else{
//             console.log(`Funcionou: ${conteudo.toString()}`)
//             const dobro = Number(conteudo.toString()) * 2  //+conteudo.toString() também converte o valor para numero
//             const finalizar = (erro) => {
//                 if(erro){
//                     console.log(`A escria deu erro: ${erro}`)
//                 }else{
//                     console.log('A escrita funcionou')
//                 }
//             }
//             fs.writeFile('dobro.txt', dobro.toString(), finalizar)
//         }
//     } //callback
//     //assincrona
//     fs.readFile(nomeArquivo, exibirConteudo)
//     console.log('Fim da função exibirConteudo')
// }

// abrirArquivo("arquivo.txt")
// abrirArquivo("dobro.txt")

//promisses
//1 + 2 + 3 + ... + (n-2) + (n-1) + n
// function calculoDemorado(n){
//     const p = new Promise((resolve, reject) => {
//         let ac = 0
//         for(let i = 1; i<=n; i++){
//             ac += i
//         }
//         resolve(ac)
//     })
//     return p
// }

// const resultado = calculoDemorado(10)
// resultado.then(res => {
//     console.log(`Funcionou: ${res}`)
//     calculoDemorado(res).then((res2)=>{
//         console.log(`Funcionou: ${res2}`)
//     })
// })
// resultado.catch(function(err){
//     console.log(`Erro: ${err}`)
// })

// console.log('continuo fazendo outras coisas')

//1 + 2 + 3 + ... + (n-2) + (n-1) + n
const calculoRapidinho = (n) => {
    // caso n seja <0, devolva uma promisse no estado refejected com a mensagem de erro: "Apenas positivos, por favor",
    //caso contrário, mantenha o que já está pronto
    //nao pode user nem if/else nem switch/case
    //a primeira instrução e unica deve ser o return
    // return new Promise((resolve, reject) => {
    //     resolve((n/2) * (n + 1))
    // })
    return (n < 0) ? 
        Promise.reject('Apenas positivos, por favor') :
        Promise.resolve((n/2) * (n + 1))
}

const resultado = calculoRapidinho(-10)
resultado.then(res => {
    console.log(`Funcionou rapidinho: ${res}`)
})
.catch(err => {
    console.log(`Erro: ${err}`)
})

