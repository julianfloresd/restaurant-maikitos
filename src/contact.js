const createContactPage = () => {
    const content = document.querySelector('#content');

    //Contact Items
    const pageContent = document.createElement('div');
    pageContent.classList.add('pageContent')
    content.appendChild(pageContent)

    //Address
    const containerAddress = document.createElement('div')
    containerAddress.classList.add('address')
    pageContent.appendChild(containerAddress)
    
    const addressHeader = document.createElement('h2')
    addressHeader.textContent = `Direcciones:`
    containerAddress.appendChild(addressHeader)
    
    const sanfranciscoAddressHeader = document.createElement('h3')
    sanfranciscoAddressHeader.textContent = `San Fco.: `
    const sanfranciscoAddress = document.createElement('p')
    sanfranciscoAddress.textContent = `Av. Pdte. Ant. Guzmán. Plaza Edith`
    containerAddress.appendChild(sanfranciscoAddressHeader)
    containerAddress.appendChild(sanfranciscoAddress)
    
    const santiagoAddressHeader = document.createElement('h3')
    santiagoAddressHeader.textContent = `Santiago: `
    const santiagoAddress = document.createElement('p')
    santiagoAddress.textContent = `Ave. Rafael Vidal, frente a Lumijor`
    containerAddress.appendChild(santiagoAddressHeader)
    containerAddress.appendChild(santiagoAddress)

    //Working Hours
    const containerWorkingHours = document.createElement('div')
    containerWorkingHours.classList.add('hours')
    pageContent.appendChild(containerWorkingHours)
    
    const workingHoursHeader = document.createElement('h2')
    workingHoursHeader.textContent = `Horarios:`
    containerWorkingHours.appendChild(workingHoursHeader)

    const sanfranciscoHorarioHeader = document.createElement('h3')
    sanfranciscoHorarioHeader.textContent = `San Fco.: `
    const sanfranciscoHorario = document.createElement('p')
    sanfranciscoHorario.textContent = `12:00PM-11:00PM - Todos los días`
    containerWorkingHours.appendChild(sanfranciscoHorarioHeader)
    containerWorkingHours.appendChild(sanfranciscoHorario)

    const santiagoHorarioHeader = document.createElement('h3')
    santiagoHorarioHeader.textContent = `San Fco.: `
    const santiagoHorario = document.createElement('p')
    santiagoHorario.textContent = `Lun Mie y Jue:6:00PM-11:00PM, Vie-Sab:6:00PM-12:00AM, Dom 1:00PM-11:00PM - MARTES NO LABORAMOS`
    containerWorkingHours.appendChild(santiagoHorarioHeader)
    containerWorkingHours.appendChild(santiagoHorario)
    

    //Phone Number
    const containerPhoneNumber = document.createElement('div')
    containerPhoneNumber.classList.add('phone')
    pageContent.appendChild(containerPhoneNumber)
    
    const phoneHeader = document.createElement('h2')
    phoneHeader.textContent = `Numeros telefonicos:`
    containerPhoneNumber.appendChild(phoneHeader)

    const sanfranciscoPhoneHeader = document.createElement('h3')
    sanfranciscoPhoneHeader.textContent = `San Fco.: `
    const sanfranciscoPhoneNumber = document.createElement('p')
    sanfranciscoPhoneNumber.textContent = `Tel: (809) 588-6111`
    containerPhoneNumber.appendChild(sanfranciscoPhoneHeader)
    containerPhoneNumber.appendChild(sanfranciscoPhoneNumber)

    const santiagoPhoneHeader = document.createElement('h3')
    santiagoPhoneHeader.textContent = `Santiago: `
    const santiagoPhoneNumber = document.createElement('p')
    santiagoPhoneNumber.textContent = `Tel: 809-708-4661`
    containerPhoneNumber.appendChild(santiagoPhoneHeader)
    containerPhoneNumber.appendChild(santiagoPhoneNumber)
    
}

export default createContactPage;