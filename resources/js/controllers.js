var controller = angular.module('ficheController', ['ficheService'])

controller.controller(
    'ficheController',
    ['$scope', '$http', 'FicheService', '$log',
        function ($scope, $http, FicheService, $log) {

            $scope.frm = {};

            $scope.frmToggle1 = function () {
                $('#ficheForm').slideToggle();
            }

            $scope.frmToggle3 = function (fiche) {
                $scope.ufrm = fiche;
                $('#updateFiche').slideToggle();
            }

            $scope.frmToggle = function () {
                $('#ficheFormSearchId').slideToggle();
            }
            FicheService.read().then(
                (data) => 
                {
                $scope.fiches = data.data;
            });

            $scope.getAllvehicule = function () 
            {
                FicheService.getAllvehicule().then((data2) => {
                    $scope.vehicules = data2.data;
                    //    console.log($scope.vehicules);
                }
                )

            }

            $scope.addFiche = function (badrFiche) {

                var fiche = {
                    'lieuIncident': badrFiche.lieuIncident,
                    'DateIncident': badrFiche.DateIncident,
                    'numeroFiche': badrFiche.numeroFiche,
                    'descriptionIncident': badrFiche.descriptionIncident,
                    'nombreVoyageur': badrFiche.nombreVoyageur,
                    'incidentCritique': badrFiche.incidentCritique,
                    'vehicule': badrFiche.vehicule
                }

                console.log(fiche);

                FicheService.create(fiche)
                    .success(() => {
                        $scope.fiches = FicheService.read().then((data) => {
                            $scope.fiches = data.data;
                        })
                        
                        $scope.frm = {};
                        $('#ficheForm').slideToggle();
                    })
                    .error((err) => {
                        $log.error(err);
                    });
            }
            $scope.searchFiche = function (idf) {

                FicheService.searchById(id)
                    .success(() => {
                        $scope.fiches = FicheService.read().then((data) => {
                            $scope.fiches = data.data;
                        })
                        $scope.frm = {};
                        $('#ficheForm').slideToggle();
                    })
                    .error((err) => {
                        $log.error(err);
                    });
            }
            $scope.searchFicheiMM = function (immv) {

                FicheService.searchByImma(immatricule)
                    .success(() => {
                        $scope.fiches = FicheService.read().then((data) => {
                            $scope.fiches = data.data;
                        })
                        $scope.frm = {};
                        $('#ficheForm').slideToggle();
                    })
                    .error((err) => {
                        $log.error(err);
                    });
            }
            $scope.updateFiche = function ($params) {

                var fiche = {
                    'lieuIncident': $params.lieuIncident,
                    'dateIncident': $params.dateIncident,
                    'NumeroFiche': $params.NumeroFiche,
                    'descriptionIncident': $params.descriptionIncident,
                    'nombreVoyageur': $params.nombreVoyageur,
                    'incidentCritique': $params.incidentCritique,
                    'IdentifientVehicule': $params.vehicule
                }

                console.log(fiche);

                FicheService.update(fiche)
                    .success(() => {
                        $scope.fiches = FicheService.read().then((data) => {
                            $scope.fiches = data.data;
                        })
                        $scope.frm = {};
                        $('#ficheForm').slideToggle();
                    })
                    .error((err) => {
                        $log.error(err);
                    });
            }

            $scope.removeFiche = function (mum) {

                console.log(mum);
                var cfrm = confirm("Est-vous sure de supprimer la fiche ?");
                if (cfrm) {

                    FicheService.delete(mum)
                        .success(function () {
                            $scope.fiches = FicheService.read().then((data) => {
                                $scope.fiches = data.data;
                            })
                        })
                        .error(function (err) {
                            $log.error(err);
                        })
                }
            }


        }]);
