(function () {
  'use strict';

  angular
    .module('ferreteriaApp.departments', [
      'ui.router',
      'ferreteriaApp.adminCore'
    ]).config(configStates);

  /* @ngInject */
  function configStates($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('departments', {
        url: '/departments',
        templateUrl: './scripts/departments/index.html',
        controller: 'DepartmentsController',
        controllerAs: 'vm'
      })
      .state('department', {
        url: '/department/:id',
        templateUrl: './scripts/departments/show.html',
        controller: 'DepartmentController',
        controllerAs: 'vm'
      })
      .state('departmentEdit', {
        url: '/department/:id/edit',
        templateUrl: './scripts/departments/edit.html',
        controller: 'DepartmentEditController',
        controllerAs: 'vm'
      })
      .state('departmentNew', {
        url: '/departments/new',
        templateUrl: './scripts/departments/new.html',
        controller: 'DepartmentNewController',
        controllerAs: 'vm'
      });
  }

})();
