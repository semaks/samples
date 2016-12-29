class CatalogService {

  /* @ngInject */
  constructor($resource) {
    this._$resource = $resource;
  }

  loadCatalog() {
    let itemsResource = this._$resource(
      'http://127.0.0.1:8081/item',
      {},
      {
        get: {
          method: 'GET',
          isArray: true
        }
      });
    return itemsResource.get();
  }
}

export default CatalogService;