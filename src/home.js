

const createHomePage = () => {
    const content = document.querySelector('#content');
    const homePage = document.createElement('div')
    content.appendChild(homePage)

    //Headline
    const headline = document.createElement('h1')
    headline.textContent = `Food & Share!`
    homePage.appendChild(headline)

    //Paragraph
    const para = document.createElement('p')
    para.textContent = `Tienes un antojo? Nosotros te los cumplimos!!`
    homePage.appendChild(para)
}

export default createHomePage;