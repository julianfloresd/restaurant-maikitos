const createMenuPage = () => {
    const content = document.querySelector('#content');

    //Menu Page Content
    const pageContent = document.createElement('div');
    pageContent.classList.add('pageContent')
    content.appendChild(pageContent)

    //Entradas
    const containerEntradas = document.createElement('div')
    containerEntradas.classList.add('menu-category')
    pageContent.appendChild(containerEntradas)

    const headerEntrada = document.createElement('h2')
    headerEntrada.classList.add('category-header')
    headerEntrada.textContent = `ENTRADAS`
    containerEntradas.appendChild(headerEntrada)
    
    const entradaOne = document.createElement('h3')
    entradaOne.classList.add('menu-item')
    const entradaOnePrice = document.createElement('span')
    entradaOnePrice.classList.add('precio')
    entradaOne.textContent = `GUACAMOLE TRADICIONAL`
    entradaOnePrice.textContent = `$265`
    containerEntradas.appendChild(entradaOne)
    entradaOne.appendChild(entradaOnePrice)

    const entradaTwo = document.createElement('h3')
    entradaTwo.classList.add('menu-item')
    const entradaTwoPrice = document.createElement('span')
    entradaTwoPrice.classList.add('precio')
    entradaTwo.textContent = `TAQUITOS DORADOS`
    entradaTwoPrice.textContent = `$325`
    containerEntradas.appendChild(entradaTwo)
    entradaTwo.appendChild(entradaTwoPrice)

    const entradaThree = document.createElement('h3')
    entradaThree.classList.add('menu-item')
    const entradaThreePrice = document.createElement('span')
    entradaThreePrice.classList.add('precio')
    entradaThree.textContent = `CANASTITAS DE CHICHARRON`
    entradaThreePrice.textContent = `$425`
    containerEntradas.appendChild(entradaThree)
    entradaThree.appendChild(entradaThreePrice)

    const entradaFour = document.createElement('h3')
    entradaFour.classList.add('menu-item')
    const entradaFourPrice = document.createElement('span')
    entradaFourPrice.classList.add('precio')
    entradaFour.textContent = `MONTADITOS DE CAMARON`
    entradaFourPrice.textContent = `$695`
    containerEntradas.appendChild(entradaFour)
    entradaFour.appendChild(entradaFourPrice)

    const entradaFive = document.createElement('h3')
    entradaFive.classList.add('menu-item')
    const entradaFivePrice = document.createElement('span')
    entradaFivePrice.classList.add('precio')
    entradaFive.textContent = `CROQUETAS DE POLLO`
    entradaFivePrice.textContent = `$265`
    containerEntradas.appendChild(entradaFive)
    entradaFive.appendChild(entradaFivePrice)

    const entradaSix = document.createElement('h3')
    entradaSix.classList.add('menu-item')
    const entradaSixPrice = document.createElement('span')
    entradaSixPrice.classList.add('precio')
    entradaSix.textContent = `BOLITAS DE QUESO`
    entradaSixPrice.textContent = `$265`
    containerEntradas.appendChild(entradaSix)
    entradaSix.appendChild(entradaSixPrice)

    const entradaSeven = document.createElement('h3')
    entradaSeven.classList.add('menu-item')
    const entradaSevenPrice = document.createElement('span')
    entradaSevenPrice.classList.add('precio')
    entradaSeven.textContent = `SALCHICHAS A LA PARRILLA`
    entradaSevenPrice.textContent = `$325`
    containerEntradas.appendChild(entradaSeven)
    entradaSeven.appendChild(entradaSevenPrice)

    const entradaEight = document.createElement('h3')
    entradaEight.classList.add('menu-item')
    const entradaEightPrice = document.createElement('span')
    entradaEightPrice.classList.add('precio')
    entradaEight.textContent = `SATAY CRISPY DE POLLO`
    entradaEightPrice.textContent = `$325`
    containerEntradas.appendChild(entradaEight)
    entradaEight.appendChild(entradaEightPrice)

    const entradaNine = document.createElement('h3')
    entradaNine.classList.add('menu-item')
    const entradaNinePrice = document.createElement('span')
    entradaNinePrice.classList.add('precio')
    entradaNine.textContent = `MAIKIROLLS`
    entradaNinePrice.textContent = `$265`
    containerEntradas.appendChild(entradaNine)
    entradaNine.appendChild(entradaNinePrice)
}

export default createMenuPage;