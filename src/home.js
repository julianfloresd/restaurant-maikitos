

const createHomePage = () => {
    const content = document.querySelector('#content');

    //Homepage Content
    const homePage = document.createElement('div')
    homePage.classList.add('homePageContent')
    content.appendChild(homePage)

    //Headline
    const headline = document.createElement('h1')
    headline.textContent = `Food & Share!`
    homePage.appendChild(headline)

    //Paragraph
    const para = document.createElement('p')
    para.textContent = `Tienes un antojo? Nosotros te los cumplimos!!`
    homePage.appendChild(para)

    //Buttons
    const orderBtn = document.createElement('button')
    orderBtn.textContent = `Order Now!`
    homePage.appendChild(orderBtn)

    const contactBtn = document.createElement('button')
    contactBtn.textContent = `Make a Reservation!`
    homePage.appendChild(contactBtn)
}

export default createHomePage;