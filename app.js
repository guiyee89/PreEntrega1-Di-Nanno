let menu
do {
    menu = prompt(" 1- Purchase your Travel Plan \n 2- Go to Website")
    menu = parseInt(menu)
    switch (menu) {
        case 1: comprarViaje()
            break
        case 2: alert("Bye!")
            break
        default: alert("Invalid Option")
    }
} while (menu != 2);

function comprarViaje() {
    do {
        alert("Select your destination")
        let destino = prompt("1- Sydney \n 2- Melbourne \n 3- Brisbane \n 4- Gold Coast");
        destino = parseInt(destino);
        switch (destino) {
            case 1: comprarServicios()
                break
            case 2: comprarServicios()
                break
            case 3: comprarServicios()
                break
            case 4: comprarServicios()
                break
            default: alert("Invalid Option")
        }
    } while (destino <= 1 || destino >= 4)

    function comprarServicios() {
        let servicios
        alert("Select different services");
        servicios = prompt("1- Luggage \n 2- Insurance \n 3- Travel Planning \n 4- Customer Service");
        servicios = parseInt(servicios);
    }
}







