import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import CatalogComponent from './catalog.component';
import CatalogService from './catalog.service';
import CatalogController from './catalog.controller';
import 'material-design-icons/iconfont/material-icons.css';
import './catalog.css';

export const CatalogModule = angular
  .module('catalogMdule', [
    ngMaterial,
    uiRouter
  ])
  .service('catalogService', CatalogService)
  .controller('catalogController', CatalogController)
  .component(CatalogComponent.name, CatalogComponent.config)
  .name;