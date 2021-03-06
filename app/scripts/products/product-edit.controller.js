(function () {
  'use strict';

  angular
    .module('ferreteriaApp.products')
    .controller('ProductEditController', ProductEditController);

  /* @ngInject */
  function ProductEditController($state, $http) {
    var vm = this;
    vm.product = {};
    vm.editProduct = editProduct;
    vm.brands = [];
    getProduct();
    loadInfo();

    function editProduct() {
      $http.put('/api/product/' + $state.params.id, vm.product, {})
        .then(function (res) {
          $state.go('product', { id: $state.params.id });
        }, function () {
        });
    }

    function getProduct() {
      $http.get('/api/product/' + $state.params.id, {})
        .then(function (res) {
          vm.product = res.data[0][0];
        }, function () {
          vm.product = {};
        });
    }

    function loadInfo() {
      $http.get('api/brands', {})
        .then(function (data) {
          vm.brands = data.data[0];
        }, function () {
          vm.brands = [];
        });
    }
  }

})();
