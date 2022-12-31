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
        alert("Select your destination for $1000")
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
        alert("Select one or more services")
        do {
            let servicios = 0
            servicios = prompt(" 1- $75 Luggage \n 2- $100 Insurance \n 3- $150 Travel Planning \n 4- $150 Customer Service \n\n 5- Done!");
            servicios = parseInt(servicios);
            switch (servicios) {
                case 1: comprarServicios()
                    break
                case 2: comprarServicios()
                    break
                case 3: comprarServicios()
                    break
                case 4: comprarServicios()
                    break
                case 5: alert("Thanks for your purchase!")
                    break
                default: alert("Invalid Option")
            }

        } while (servicios <= 1 || servicios >= 5)
    }
}
