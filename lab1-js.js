//questao 1

const isArray = entrada => {
    if(Array.isArray(entrada)){
        return true
    } else{
        return false
    }
}
const cars1 = [1,2,3]
const cars2 = ['bmw', 'audi', 'ferrari']
const num = 100
console.log(isArray(cars1))
console.log(isArray(cars2))
console.log(isArray(num))

//questao 2

const clonararray = array => {
    return [...array]
}
const numeros = [1,2,3,4,5]
const clonearray = clonararray(numeros)
console.log(clonearray)

//questao 3

const retornar = (array, qtdelementos) => {
    const nelementos = array.slice(0, qtdelementos)
    return nelementos
}
const cars = new Array('bmw', 'audi', 'ferrari', 'tesla', 'ford')
const newcars = retornar(cars, 3)
console.log(newcars)

//questao 4

const retornar = (array, qtdelementos) => {
    const inverter = array.reverse()
    const ultimos = inverter.slice(0, qtdelementos)
    return ultimos
}
const numeros = [1, 2, 3, 4, 5]
const newnumeros = retornar(numeros, 2)
console.log(newnumeros)

//questao 5

const string = (array) => {
    let string = []
    array.each(item => string += item)
    return string
}
const letras = ['A', 'B', 'C', 'D', 'E', 'F']
const newstring = string(letras)
console.log(newstring)

//questao 6

const formatar = numero => {
    const numeros = Array.from(numero, Number) 
    let current; let next
    for(let i = 0; i < numeros.length; i++){
       current = i; next = i + 1
       if(numeros[current] % 2 === 0  && numeros[next]){
           numeros.splice(next, 0, "-")
       }
    }
    let num = []
    numeros.each(element => num += element)
    return num
}
const newnum = '025468'
console.log(formatar(newnum))

//questao 7

const frequente = array => {
    let itemfrequente = 0
    let aux = 0
    let maior = 0
    array.each((item, index) => {
        for(let i = 0; i < array.length; i++){
            if(item === array[i]){
                aux++
            }
            if(aux > maior){
                itemfrequente = index
                maior = aux
            }
        }
        aux = 0
    })
    return array[itemfrequente]
}
const numeros = [1, 2, 3, 4, 4, 5]
const maisfrequente = frequente(numeros)
console.log(maisfrequente)

//questao 8

const eliminar = (array) => {
    let vetor = []
    let newarray = array.map(item => item.uppercase())
    newarray.each((item, index) => {
        for(let i = 0; i < newarray.length; i++){
            if(item === newarray[i] && index){
                newarray.splice(index, 1)
            }
        }
    })
    return newarray
}
const numeros = ['1', '2', '3', '4', '5', 'um', 'dois', 'tres', 'quatro', 'cinco']
const newnumeros = eliminar(numeros)
console.log(newnumeros)

//questao 9

const somar = (array1, array2) => {
    const soma = array1
    return soma.map(((_, index) => array1[index] + array2[index]))
}
const array1 = [1, 3, 5]
const array2 = [2, 4, 6]
const newarray = somar(array1, array2)
console.log('array 1:', array1)
console.log('array 2:', array2)
console.log('array soma', newarray)

//questao 10

const juntar = (array1, array2)=> {
    array2.each((item) => {
        array1.push(item)
    });
    return array1
}
const vetorPilha = [1, 2, 3, 4, 5]
const vetorAdiciona = [6, 7, 8, 9, 10]
const newvetor = juntar(vetorPilha, vetorAdiciona)
console.log(newvetor)