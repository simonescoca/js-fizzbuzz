// BONUS 1:
// Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
// BONUS 2:
// Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.

const ulElement = document.querySelector ("ul")

for (let i = 1 ; i < 101 ; i++) {

    const li = document.createElement ("li")

    if (i % 3 === 0 && i % 5 !== 0) {
        li.append ("Fizz")
        li.classList.add ("fizz")
        ulElement.appendChild (li)
    } else if (i % 5 === 0 && i % 3 !== 0) {
        li.append ("Buzz")
        li.classList.add ("buzz")
        ulElement.appendChild (li)
    } else if (i % 3 === 0 && i % 5 === 0) {
        li.append ("FizzBuzz")
        li.classList.add ("fizzbuzz")
        ulElement.appendChild (li)
    } else {
        li.append (i)
        ulElement.appendChild (li)
    }
}