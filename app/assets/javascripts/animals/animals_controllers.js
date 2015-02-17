var AnimalsCtrls = angular.module("AnimalsCtrls", []);
var CollapseCtrls = angular.module("CollapseCtrls", []);

CollapseCtrls.controller("CollapseCtrl",["$scope", function ($scope) {
  	$scope.isCollapsed = false;
}]);


AnimalsCtrls.controller("AnimalsCtrl", ["$scope", "$http", "Animals", function ($scope, $http, Animals) {

	$scope.animals = [];

	http.get("/animals.json")
		.success(function (data) {
			console.log(data);
			$scope.animals = data;
		})

	$scope.findAnimal = function () {
	    var species = this.species;
	    for (var i = 0; i < $scope.animals.length; i++) {
	      	if ($scope.animals[i].species === species) {
	          $scope.foundAnimal = $scope.animals[i];
	          return foundAnimal;
	        }
	    };
	};

}]);