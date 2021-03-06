(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/nicky/git/ada_stores/frontend/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "9xVd":
    /*!***********************************!*\
      !*** ./src/app/stores.service.ts ***!
      \***********************************/

    /*! exports provided: StoresService */

    /***/
    function xVd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StoresService", function () {
        return StoresService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var StoresService = /*#__PURE__*/function () {
        function StoresService(http) {
          _classCallCheck(this, StoresService);

          this.http = http;
          this.storeList = []; //private storesUrl = 'https://cardano-directory-back.herokuapp.com/stores/?format=json'

          /* Comment above storesUrl and uncomment this URL for testing purposes
           when using the local API */

          this.storesUrl = 'http://localhost:8000/stores/?format=json';
        }

        _createClass(StoresService, [{
          key: "getStores",
          value: function getStores() {
            var _this = this;

            this.http.get(this.storesUrl).toPromise().then(function (data) {
              for (var item in data) {
                _this.storeList.push(data[item]);
              }
            });
            return this.storeList;
          }
        }]);

        return StoresService;
      }();

      StoresService.??fac = function StoresService_Factory(t) {
        return new (t || StoresService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      StoresService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: StoresService,
        factory: StoresService.??fac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _stores_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./stores.service */
      "9xVd");
      /* harmony import */


      var _store_list_store_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./store-list/store-list.component */
      "smD0");

      var AppComponent = function AppComponent(storesService) {
        _classCallCheck(this, AppComponent);

        this.storesService = storesService;
        /*
          storeList: Store[] = [];
        
          getStores(): void {
            this.storesService.getStores()
              .subscribe(storeList => this.storeList = storeList);
          }
          */

        this.title = 'Ada and Friends - Business Directory';
      };

      AppComponent.??fac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_stores_service__WEBPACK_IMPORTED_MODULE_1__["StoresService"]));
      };

      AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-store-list");
          }
        },
        directives: [_store_list_store_list_component__WEBPACK_IMPORTED_MODULE_2__["StoreListComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _store_box_store_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./store-box/store-box.component */
      "qOGq");
      /* harmony import */


      var _store_list_store_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./store-list/store-list.component */
      "smD0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.??fac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({
        providers: [],
        imports: [[_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _store_box_store_box_component__WEBPACK_IMPORTED_MODULE_3__["StoreBoxComponent"], _store_list_store_list_component__WEBPACK_IMPORTED_MODULE_4__["StoreListComponent"]],
          imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]
        });
      })();
      /***/

    },

    /***/
    "qOGq":
    /*!**************************************************!*\
      !*** ./src/app/store-box/store-box.component.ts ***!
      \**************************************************/

    /*! exports provided: StoreBoxComponent */

    /***/
    function qOGq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StoreBoxComponent", function () {
        return StoreBoxComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function StoreBoxComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "div", 21);
        }
      }

      function StoreBoxComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "div", 22);
        }
      }

      function StoreBoxComponent_p_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx_r2.store.address, ", ", ctx_r2.store.state, "");
        }
      }

      function StoreBoxComponent_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0);
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r4.store.address);
        }
      }

      var StoreBoxComponent = /*#__PURE__*/function () {
        function StoreBoxComponent() {
          _classCallCheck(this, StoreBoxComponent);
        }

        _createClass(StoreBoxComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return StoreBoxComponent;
      }();

      StoreBoxComponent.??fac = function StoreBoxComponent_Factory(t) {
        return new (t || StoreBoxComponent)();
      };

      StoreBoxComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: StoreBoxComponent,
        selectors: [["app-store-box"]],
        inputs: {
          store: "store",
          index: "index"
        },
        decls: 29,
        vars: 10,
        consts: [["class", "clearfix visible-md-block visible-lg-block", 4, "ngIf"], ["class", "clearfix visible-sm-block", 4, "ngIf"], [1, "col-md-4", "col-sm-6"], [1, "single-explore-item"], [1, "single-explore-img"], ["alt", "shop image", 3, "src"], [1, "single-explore-txt", "bg-theme-1"], [1, "explore-person"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], [1, "row"], [1, "col-sm-10"], [1, "explore-rating-price"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "explore-open-close-part"], [1, "col-xs-5"], ["target", "_blank", "rel", "noreferrer noopener", 3, "href"], ["onclick", "window.location.href='#'", 1, "close-btn", "open-btn"], [1, "col-xs-7"], [1, "explore-map-icon"], ["data-feather", "map-pin"], [1, "clearfix", "visible-md-block", "visible-lg-block"], [1, "clearfix", "visible-sm-block"]],
        template: function StoreBoxComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, StoreBoxComponent_div_0_Template, 1, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, StoreBoxComponent_div_1_Template, 1, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, StoreBoxComponent_p_15_Template, 2, 2, "p", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, StoreBoxComponent_ng_template_16_Template, 1, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "open website");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.index % 3 === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.index % 2 === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", ctx.store.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("href", ctx.store.website, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.store.name, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("href", ctx.store.googlemaps_link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.store.state)("ngIfElse", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("href", ctx.store.website, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("href", ctx.store.googlemaps_link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9yZS1ib3guY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "smD0":
    /*!****************************************************!*\
      !*** ./src/app/store-list/store-list.component.ts ***!
      \****************************************************/

    /*! exports provided: StoreListComponent */

    /***/
    function smD0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StoreListComponent", function () {
        return StoreListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _stores_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../stores.service */
      "9xVd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _store_box_store_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../store-box/store-box.component */
      "qOGq");

      function StoreListComponent_app_store_box_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-store-box", 7);
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;
          var indexOfStore_r2 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("store", item_r1)("index", indexOfStore_r2);
        }
      }

      var StoreListComponent = /*#__PURE__*/function () {
        function StoreListComponent(storesService) {
          _classCallCheck(this, StoreListComponent);

          this.storesService = storesService;
          this.storeList = [];
        }
        /* // Used if getStores Returns an observable
        getStores(): void {
          this.storesService.getStores()
            .subscribe(storeList => this.storeList = storeList);
        } */


        _createClass(StoreListComponent, [{
          key: "getMyStores",
          value: function getMyStores() {
            this.storeList = this.storesService.getStores();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getMyStores();
          }
        }]);

        return StoreListComponent;
      }();

      StoreListComponent.??fac = function StoreListComponent_Factory(t) {
        return new (t || StoreListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_stores_service__WEBPACK_IMPORTED_MODULE_1__["StoresService"]));
      };

      StoreListComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: StoreListComponent,
        selectors: [["app-store-list"]],
        decls: 11,
        vars: 1,
        consts: [[2, "text-align", "left"], ["id", "explore", 1, "explore"], [1, "container"], [1, "section-header"], [1, "explore-content"], [1, "row"], [3, "store", "index", 4, "ngFor", "ngForOf"], [3, "store", "index"]],
        template: function StoreListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "find your store");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Find stores and businesses that accept ADA coin, the Cardano Blockchain coin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, StoreListComponent_app_store_box_10_Template, 1, 2, "app-store-box", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.storeList);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _store_box_store_box_component__WEBPACK_IMPORTED_MODULE_3__["StoreBoxComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9yZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map