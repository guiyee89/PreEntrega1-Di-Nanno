let menu
do {
    menu = prompt(" 1- Purchase your Travel Plan \n 2- Cancel")
    menu = parseInt(menu)
    switch (menu){
        case 1: comprarPlan()
        break
        case 2: alert("Bye!")
        break
        default: alert("Invalid Option")
    }
} while (menu !=2)

function comprarPlan() {
    let plan = 0
    alert("Select one of this travel packs")
    Number (prompt(" 1- Sydney \n 2- Melbourne \n 3- Brisbane \n 4- Gold Coast \n 5- Cancel"))

    let servicios = alert("Choose your travel services")
    prompt(" 1- Luggage \n 2- Insurance \n 3- Travel Planning \n 4- Customer Service \n 5- Cancel")

    switch (servicios){
        case 1: 
        break
    }


}

    