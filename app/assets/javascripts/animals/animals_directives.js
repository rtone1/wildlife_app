var AnimalDirs = angular.module("AnimalDirs", []);

AnimalDirs.directive("animal", function () {
	return {
		restrict: "EA",
		templateUrl: "animal_template.html"
	}
});