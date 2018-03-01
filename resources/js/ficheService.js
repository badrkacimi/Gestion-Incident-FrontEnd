angular.module('ficheService', [])

.factory('FicheService',function($http) {

    var FicheFactory={};

    FicheFactory.create=(form)=>{
        return $http.post('http://localhost:8888/GestionIncident/api/fiches',form);
    }

    FicheFactory.update=(form)=>{
        return $http.put('http://localhost:8888/GestionIncident/api/fiches',form);
    }

    FicheFactory.delete=(NumeroFiche)=>{
        return $http.delete('http://localhost:8888/GestionIncident/api/fiches/'+ NumeroFiche);
    }
    
    FicheFactory.read=()=>{
        return $http.get('http://localhost:8888/GestionIncident/api/fiches');
    }
   
    FicheFactory.searchByImma=(immatricule)=>{
        return $http.get('http://localhost:8888/GestionIncident/api/fiches/'+immatricule);
    }
    FicheFactory.getAllvehicule=()=>{
        return $http.get('http://localhost:8888/GestionIncident/api/vehicules');
    }
    return FicheFactory;
    
});
