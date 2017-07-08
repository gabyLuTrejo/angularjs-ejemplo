var navBar = {
    controller: navCtrl,
    templateUrl: "app/componentes/nav/nav.html"
}

angular
    .module("miPrimerApp")
    .component("navBar", navBar)

function navCtrl(){
    
}