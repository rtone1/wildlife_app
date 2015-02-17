  var AnimalsApp = angular.module("AnimalsApp", [
    "AnimalsCtrls"
    "CollapseCtrls"
  ]);

  AnimalsApp.config(["$httpProvider", function($httpProvider){
      $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  }]);