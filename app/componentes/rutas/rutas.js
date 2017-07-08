angular
.module("miPrimerApp")
.config(config)

function config($routeProvider, $locationProvider){
    $routeProvider
    .when('/',{
        template: "<tarjetaCostume></tarjetaCostume>"
    })
    .otherwidse('/')
}