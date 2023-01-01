const TOTAL = 0
function menuPrincipal() {
    let menu;
    do {
        menu = prompt(" Menu\n\n 1- Purchase a Travel Plan \n\n 2- Calculate Total Amount \n\n 3- Go to Website")
        menu = parseInt(menu)
        switch (menu) {
            case 1: TOTAL = TOTAL + comprarDestino()
                break;
            case 2: alert("Total amount for your plan is " + total)
                total = 0
                break;
            case 3: ("Bye")
                break;
            default: alert("Invalid Option")
        }
    } while (menu != 3)
}

function comprarDestino() {
    let destino = 0;
    let menuDestino
    alert("Select your destination")
    menuDestino = prompt(" 1- Sydney $1100 \n 2- Melbourne $1000")
    menuDestino = parseInt(menuDestino)

    switch (menuDestino) {
        case 1: destino = 1100 + comprarServicio()
            break
        case 2: destino = 1000 + comprarServicio()
            break
        default: ("Invalid Option")
    }
    return destino;
}

function comprarServicio() {
    let servicio = 0;
    let menuServicio
    do {
        alert("Select different services")
        menuServicio = prompt(" 1- Luggage $75 \n 2- Insurance $100 \n\n 3- Done and back to Menu")
        menuServicio = parseInt(menuServicio)

        switch (menuServicio) {
            case 1: servicio = servicio + 75
                break
            case 2: servicio = servicio + 100
                break
            case 3: servicio = servicio + totalCuenta()
                break
            default: ("Invalid Option")
        }
    } while (menuServicio <= 1 || menuServicio >= 2)

    return servicio;
}

function totalCuenta(){
    let totalPack = TOTAL
    let menuTotal
    menuTotal = prompt(" 1- Calculate total amount \n\n 2- Go back to Menu")
    menuTotal = parseInt(menuTotal)

    switch(menuTotal){
        case 1: alert("Total " + totalPack)
        break
        case 2: menuPrincipal()
        break
        default: alert("Invalid Option")
    }
}

menuPrincipal()

