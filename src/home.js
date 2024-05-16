

const createHomePage = () => {
    const content = document.querySelector('#content');

    //Homepage Content
    const pageContent = document.createElement('div')
    pageContent.classList.add('pageContent')
    content.appendChild(pageContent)

    //Headline
    const headline = document.createElement('h1')
    headline.textContent = `Food & Share!`
    pageContent.appendChild(headline)

    //Paragraph
    const para = document.createElement('p')
    para.textContent = `Tienes un antojo? Nosotros te los cumplimos!!`
    pageContent.appendChild(para)

    //Buttons
    const orderBtn = document.createElement('button')
    orderBtn.textContent = `Order Now!`
    pageContent.appendChild(orderBtn)

    const contactBtn = document.createElement('button')
    contactBtn.textContent = `Make a Reservation!`
    pageContent.appendChild(contactBtn)
}

export default createHomePage;