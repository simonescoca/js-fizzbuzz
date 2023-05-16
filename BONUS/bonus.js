// BONUS 1:
// Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
// BONUS 2:
// Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.

// const ulElement = document.querySelector ("ul")

// for (let i = 1 ; i < 101 ; i++) {

//     const li = document.createElement ("li")

//     if (i % 3 === 0 && i % 5 !== 0) {
//         li.append ("Fizz")
//         li.classList.add ("fizz")
//         ulElement.appendChild (li)
//     } else if (i % 5 === 0 && i % 3 !== 0) {
//         li.append ("Buzz")
//         li.classList.add ("buzz")
//         ulElement.appendChild (li)
//     } else if (i % 3 === 0 && i % 5 === 0) {
//         li.append ("FizzBuzz")
//         li.classList.add ("fizzbuzz")
//         ulElement.appendChild (li)
//     } else {
//         li.append (i)
//         ulElement.appendChild (li)
//     }
// }




const ulElement0 = document.getElementById ("ul-0")
const ulElement1 = document.getElementById ("ul-1")
const ulElement2 = document.getElementById ("ul-2")
const ulElement3 = document.getElementById ("ul-3")
const ulElement4 = document.getElementById ("ul-4")
const ulElement5 = document.getElementById ("ul-5")
const ulElement6 = document.getElementById ("ul-6")
const ulElement7 = document.getElementById ("ul-7")
const ulElement8 = document.getElementById ("ul-8")
const ulElement9 = document.getElementById ("ul-9")

for (let i = 1 ; i < 11 ; i++) {

    const li = document.createElement ("li")

    if (i % 3 === 0 && i % 5 !== 0) {
        li.append ("Fizz")
        li.classList.add ("fizz")
        ulElement0.appendChild (li)
    } else if (i % 5 === 0 && i % 3 !== 0) {
        li.append ("Buzz")
        li.classList.add ("buzz")
        ulElement0.appendChild (li)
    } else if (i % 3 === 0 && i % 5 === 0) {
        li.append ("FizzBuzz")
        li.classList.add ("fizzbuzz")
        ulElement0.appendChild (li)
    } else {
        li.append (i)
        li.classList.add ("number")
        ulElement0.appendChild (li)
    }
}

for (let i = 11 ; i < 21 ; i++) {

    const li = document.createElement ("li")

    if (i % 3 === 0 && i % 5 !== 0) {
        li.append ("Fizz")
        li.classList.add ("fizz")
        ulElement1.appendChild (li)
    } else if (i % 5 === 0 && i % 3 !== 0) {
        li.append ("Buzz")
        li.classList.add ("buzz")
        ulElement1.appendChild (li)
    } else if (i % 3 === 0 && i % 5 === 0) {
        li.append ("FizzBuzz")
        li.classList.add ("fizzbuzz")
        ulElement1.appendChild (li)
    } else {
        li.append (i)
        li.classList.add ("number")
        ulElement1.appendChild (li)
    }
}

for (let i = 21 ; i < 31 ; i++) {

    const li = document.createElement ("li")

    if (i % 3 === 0 && i % 5 !== 0) {
        li.append ("Fizz")
        li.classList.add ("fizz")
        ulElement2.appendChild (li)
    } else if (i % 5 === 0 && i % 3 !== 0) {
        li.append ("Buzz")
        li.classList.add ("buzz")
        ulElement2.appendChild (li)
    } else if (i % 3 === 0 && i % 5 === 0) {
        li.append ("FizzBuzz")
        li.classList.add ("fizzbuzz")
        ulElement2.appendChild (li)
    } else {
        li.append (i)
        li.classList.add ("number")
        ulElement2.appendChild (li)
    }
}

for (let i = 31 ; i < 41 ; i++) {

    const li = document.createElement ("li")

    if (i % 3 === 0 && i % 5 !== 0) {
        li.append ("Fizz")
        li.classList.add ("fizz")
        ulElement3.appendChild (li)
    } else if (i % 5 === 0 && i % 3 !== 0) {
        li.append ("Buzz")
        li.classList.add ("buzz")
        ulElement3.appendChild (li)
    } else if (i % 3 === 0 && i % 5 === 0) {
        li.append ("FizzBuzz")
        li.classList.add ("fizzbuzz")
        ulElement3.appendChild (li)
    } else {
        li.append (i)
        li.classList.add ("number")
        ulElement3.appendChild (li)
    }
}
for (let i = 41 ; i < 51 ; i++) {

    const li = document.createElement ("li")

    if (i % 3 === 0 && i % 5 !== 0) {
        li.append ("Fizz")
        li.classList.add ("fizz")
        ulElement4.appendChild (li)
    } else if (i % 5 === 0 && i % 3 !== 0) {
        li.append ("Buzz")
        li.classList.add ("buzz")
        ulElement4.appendChild (li)
    } else if (i % 3 === 0 && i % 5 === 0) {
        li.append ("FizzBuzz")
        li.classList.add ("fizzbuzz")
        ulElement4.appendChild (li)
    } else {
        li.append (i)
        li.classList.add ("number")
        ulElement4.appendChild (li)
    }
}

for (let i = 51 ; i < 61 ; i++) {

    const li = document.createElement ("li")

    if (i % 3 === 0 && i % 5 !== 0) {
        li.append ("Fizz")
        li.classList.add ("fizz")
        ulElement5.appendChild (li)
    } else if (i % 5 === 0 && i % 3 !== 0) {
        li.append ("Buzz")
        li.classList.add ("buzz")
        ulElement5.appendChild (li)
    } else if (i % 3 === 0 && i % 5 === 0) {
        li.append ("FizzBuzz")
        li.classList.add ("fizzbuzz")
        ulElement5.appendChild (li)
    } else {
        li.append (i)
        li.classList.add ("number")
        ulElement5.appendChild (li)
    }
}

for (let i = 61 ; i < 71 ; i++) {

    const li = document.createElement ("li")

    if (i % 3 === 0 && i % 5 !== 0) {
        li.append ("Fizz")
        li.classList.add ("fizz")
        ulElement6.appendChild (li)
    } else if (i % 5 === 0 && i % 3 !== 0) {
        li.append ("Buzz")
        li.classList.add ("buzz")
        ulElement6.appendChild (li)
    } else if (i % 3 === 0 && i % 5 === 0) {
        li.append ("FizzBuzz")
        li.classList.add ("fizzbuzz")
        ulElement6.appendChild (li)
    } else {
        li.append (i)
        li.classList.add ("number")
        ulElement6.appendChild (li)
    }
}

for (let i = 71 ; i < 81 ; i++) {

    const li = document.createElement ("li")

    if (i % 3 === 0 && i % 5 !== 0) {
        li.append ("Fizz")
        li.classList.add ("fizz")
        ulElement7.appendChild (li)
    } else if (i % 5 === 0 && i % 3 !== 0) {
        li.append ("Buzz")
        li.classList.add ("buzz")
        ulElement7.appendChild (li)
    } else if (i % 3 === 0 && i % 5 === 0) {
        li.append ("FizzBuzz")
        li.classList.add ("fizzbuzz")
        ulElement7.appendChild (li)
    } else {
        li.append (i)
        li.classList.add ("number")
        ulElement7.appendChild (li)
    }
}
for (let i = 81 ; i < 91 ; i++) {

    const li = document.createElement ("li")

    if (i % 3 === 0 && i % 5 !== 0) {
        li.append ("Fizz")
        li.classList.add ("fizz")
        ulElement8.appendChild (li)
    } else if (i % 5 === 0 && i % 3 !== 0) {
        li.append ("Buzz")
        li.classList.add ("buzz")
        ulElement8.appendChild (li)
    } else if (i % 3 === 0 && i % 5 === 0) {
        li.append ("FizzBuzz")
        li.classList.add ("fizzbuzz")
        ulElement8.appendChild (li)
    } else {
        li.append (i)
        li.classList.add ("number")
        ulElement8.appendChild (li)
    }
}

for (let i = 91 ; i < 101 ; i++) {

    const li = document.createElement ("li")

    if (i % 3 === 0 && i % 5 !== 0) {
        li.append ("Fizz")
        li.classList.add ("fizz")
        ulElement9.appendChild (li)
    } else if (i % 5 === 0 && i % 3 !== 0) {
        li.append ("Buzz")
        li.classList.add ("buzz")
        ulElement9.appendChild (li)
    } else if (i % 3 === 0 && i % 5 === 0) {
        li.append ("FizzBuzz")
        li.classList.add ("fizzbuzz")
        ulElement9.appendChild (li)
    } else {
        li.append (i)
        li.classList.add ("number")
        ulElement9.appendChild (li)
    }
}