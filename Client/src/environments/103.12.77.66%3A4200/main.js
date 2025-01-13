(self["webpackChunktestApp"] = self["webpackChunktestApp"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/blank/blank.component */ 4188);
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/full/full.component */ 4796);
/* harmony import */ var _elite_life_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elite-life/home/home.component */ 4321);
/* harmony import */ var src_untils_AuthGuard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/untils/AuthGuard.service */ 2916);
/* harmony import */ var _elite_life_customer_manager_customer_manager_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elite-life/customer-manager/customer-manager.component */ 3943);
/* harmony import */ var _elite_life_system_manager_system_manager_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elite-life/system-manager/system-manager.component */ 7249);
/* harmony import */ var _elite_life_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./elite-life/tutorial/tutorial.component */ 987);
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/profile/profile.component */ 2683);
/* harmony import */ var _elite_life_contract_manager_contract_manager_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./elite-life/contract-manager/contract-manager.component */ 2247);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7580);








 // Import component Profile



const routes = [{
  canActivate: [src_untils_AuthGuard_service__WEBPACK_IMPORTED_MODULE_3__.AuthGuardService],
  path: '',
  component: _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_1__.FullComponent,
  children: [{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }, {
    path: 'dashboard',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_pages_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages.module */ 8423)).then(m => m.PagesModule)
  }, {
    path: 'ui-components',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_ui-components_ui-components_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/ui-components/ui-components.module */ 3726)).then(m => m.UicomponentsModule)
  }, {
    path: 'extra',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_extra_extra_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/extra/extra.module */ 1422)).then(m => m.ExtraModule)
  }, {
    path: 'home',
    component: _elite_life_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent
  }, {
    path: 'customer-manager',
    component: _elite_life_customer_manager_customer_manager_component__WEBPACK_IMPORTED_MODULE_4__.CustomerManagerComponent
  }, {
    path: 'system-manager',
    component: _elite_life_system_manager_system_manager_component__WEBPACK_IMPORTED_MODULE_5__.SystemManagerComponent
  }, {
    path: 'about-us',
    component: _elite_life_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_6__.TutorialComponent
  }, {
    path: 'guide',
    component: _elite_life_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_6__.TutorialComponent
  }, {
    path: 'policy',
    component: _elite_life_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_6__.TutorialComponent
  }, {
    path: 'legal',
    component: _elite_life_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_6__.TutorialComponent
  }, {
    path: 'culture',
    component: _elite_life_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_6__.TutorialComponent
  }, {
    path: 'profile',
    component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__.ProfileComponent,
    pathMatch: 'full'
  }, {
    path: 'contract',
    component: _elite_life_contract_manager_contract_manager_component__WEBPACK_IMPORTED_MODULE_8__.ContractManagerComponent
  }]
}, {
  path: '',
  component: _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_0__.BlankComponent,
  children: [{
    path: 'authentication',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_authentication_authentication_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/authentication/authentication.module */ 248)).then(m => m.AuthenticationModule)
  }]
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/toast */ 1225);



class AppComponent {
  constructor() {
    this.title = 'Modernize Angular Admin Tempplate';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 2,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet")(1, "p-toast");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, primeng_toast__WEBPACK_IMPORTED_MODULE_2__.Toast],
    encapsulation: 2
  });
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var angular_tabler_icons__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! angular-tabler-icons */ 451);
/* harmony import */ var angular_tabler_icons_icons__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! angular-tabler-icons/icons */ 8854);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material.module */ 9439);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/full/full.component */ 4796);
/* harmony import */ var _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/blank/blank.component */ 4188);
/* harmony import */ var _layouts_full_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/full/sidebar/sidebar.component */ 5692);
/* harmony import */ var _layouts_full_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/full/header/header.component */ 6376);
/* harmony import */ var _layouts_full_sidebar_branding_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/full/sidebar/branding.component */ 3171);
/* harmony import */ var _layouts_full_sidebar_nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/full/sidebar/nav-item/nav-item.component */ 6351);
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-recaptcha */ 5981);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ 5312);
/* harmony import */ var _elite_life_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./elite-life/home/home.component */ 4321);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/api */ 7780);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/toast */ 1225);
/* harmony import */ var src_untils_SendAccessTokenInterceptor_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/untils/SendAccessTokenInterceptor.service */ 7057);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-apexcharts */ 495);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/button */ 9136);
/* harmony import */ var _layouts_full_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layouts/full/footer/footer.component */ 5236);
/* harmony import */ var _elite_life_customer_manager_customer_manager_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./elite-life/customer-manager/customer-manager.component */ 3943);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/calendar */ 1314);
/* harmony import */ var _elite_life_system_manager_system_manager_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./elite-life/system-manager/system-manager.component */ 7249);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/table */ 6676);
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! primeng/tree */ 8092);
/* harmony import */ var _elite_life_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./elite-life/tutorial/tutorial.component */ 987);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng2-pdf-viewer */ 3203);
/* harmony import */ var _layouts_full_sidebar_profile_sidebar_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./layouts/full/sidebar-profile/sidebar-profile.component */ 1224);
/* harmony import */ var _elite_life_contract_manager_contract_manager_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./elite-life/contract-manager/contract-manager.component */ 2247);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! primeng/dialog */ 6280);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! primeng/avatar */ 6095);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! primeng/inputtext */ 8361);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 7580);





// icons


//Import all material modules


//Import Layouts


// Vertical Layout



























class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({
    providers: [{
      provide: ng_recaptcha__WEBPACK_IMPORTED_MODULE_19__.RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: _environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.recaptcha.siteKey
      }
    }, primeng_api__WEBPACK_IMPORTED_MODULE_20__.MessageService, {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HTTP_INTERCEPTORS,
      useClass: src_untils_SendAccessTokenInterceptor_service__WEBPACK_IMPORTED_MODULE_11__.SendAccessTokenInterceptorService,
      multi: true
    }],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule, _material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, angular_tabler_icons__WEBPACK_IMPORTED_MODULE_25__.TablerIconsModule.pick(angular_tabler_icons_icons__WEBPACK_IMPORTED_MODULE_26__), ng_recaptcha__WEBPACK_IMPORTED_MODULE_19__.RecaptchaFormsModule, ng_recaptcha__WEBPACK_IMPORTED_MODULE_19__.RecaptchaModule, primeng_toast__WEBPACK_IMPORTED_MODULE_27__.ToastModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_28__.NgApexchartsModule, primeng_button__WEBPACK_IMPORTED_MODULE_29__.ButtonModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_30__.CalendarModule, primeng_table__WEBPACK_IMPORTED_MODULE_31__.TableModule, primeng_tree__WEBPACK_IMPORTED_MODULE_32__.TreeModule, ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_33__.PdfViewerModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_34__.DialogModule, primeng_avatar__WEBPACK_IMPORTED_MODULE_35__.AvatarModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_36__.InputTextModule, angular_tabler_icons__WEBPACK_IMPORTED_MODULE_25__.TablerIconsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_3__.FullComponent, _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_4__.BlankComponent, _layouts_full_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__.SidebarComponent, _layouts_full_header_header_component__WEBPACK_IMPORTED_MODULE_6__.HeaderComponent, _layouts_full_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__.FooterComponent, _layouts_full_sidebar_branding_component__WEBPACK_IMPORTED_MODULE_7__.BrandingComponent, _layouts_full_sidebar_nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_8__.AppNavItemComponent,
    //
    _elite_life_home_home_component__WEBPACK_IMPORTED_MODULE_10__.HomeComponent, _elite_life_customer_manager_customer_manager_component__WEBPACK_IMPORTED_MODULE_13__.CustomerManagerComponent, _elite_life_system_manager_system_manager_component__WEBPACK_IMPORTED_MODULE_14__.SystemManagerComponent, _elite_life_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_15__.TutorialComponent, _layouts_full_sidebar_profile_sidebar_profile_component__WEBPACK_IMPORTED_MODULE_16__.SidebarProfileComponent, _elite_life_contract_manager_contract_manager_component__WEBPACK_IMPORTED_MODULE_17__.ContractManagerComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule, _material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, angular_tabler_icons__WEBPACK_IMPORTED_MODULE_25__.TablerIconsModule, ng_recaptcha__WEBPACK_IMPORTED_MODULE_19__.RecaptchaFormsModule, ng_recaptcha__WEBPACK_IMPORTED_MODULE_19__.RecaptchaModule, primeng_toast__WEBPACK_IMPORTED_MODULE_27__.ToastModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_28__.NgApexchartsModule, primeng_button__WEBPACK_IMPORTED_MODULE_29__.ButtonModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_30__.CalendarModule, primeng_table__WEBPACK_IMPORTED_MODULE_31__.TableModule, primeng_tree__WEBPACK_IMPORTED_MODULE_32__.TreeModule, ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_33__.PdfViewerModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_34__.DialogModule, primeng_avatar__WEBPACK_IMPORTED_MODULE_35__.AvatarModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_36__.InputTextModule],
    exports: [angular_tabler_icons__WEBPACK_IMPORTED_MODULE_25__.TablerIconsModule]
  });
})();

/***/ }),

/***/ 2247:
/*!***************************************************************************!*\
  !*** ./src/app/elite-life/contract-manager/contract-manager.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContractManagerComponent: () => (/* binding */ ContractManagerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _service_collaborator_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/collaborator.service */ 8142);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 7780);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 9136);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/calendar */ 1314);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-pdf-viewer */ 3203);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dialog */ 6280);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ 8361);












const _c0 = ["sigPad"];
const _c1 = a0 => ({
  height: a0,
  width: "100%"
});
const _c2 = () => ({
  width: "50rem"
});
function ContractManagerComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContractManagerComponent_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.showDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "K\u00FD h\u1EE3p \u0111\u1ED3ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ContractManagerComponent_img_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 32);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r2.imageSignUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ContractManagerComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33)(1, "h3", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " K\u00FD h\u1EE3p \u0111\u1ED3ng ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ContractManagerComponent_ng_template_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function ContractManagerComponent_ng_template_71_Template_p_button_onClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.visible = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p-button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function ContractManagerComponent_ng_template_71_Template_p_button_onClick_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("outlined", true);
  }
}
class ContractManagerComponent {
  constructor(_collaboratorService, messageService) {
    this._collaboratorService = _collaboratorService;
    this.messageService = messageService;
    this.height = 100;
    this.src = '';
    this.titleName = 'Hợp đồng đại lý';
    this.currentPage = 1; // Trang hiện tại
    this.totalPages = 0;
    this.visible = false;
    this.isDrawing = false;
    this.checkScreenSize();
  }
  onResize() {
    this.checkScreenSize();
  }
  checkScreenSize() {
    if (window.innerWidth <= 1024) {
      this.height = 30;
    }
  }
  ngOnInit() {
    this.info = JSON.parse(localStorage.getItem('info') || '{}');
    this.getCollaboratorsContractManager();
    this.beginDate = new Date(this.info.identityDate);
    this.fullname = this.info.name;
    this.address = this.info.address;
    this.cccd = this.info.identity;
    this.identityPlace = this.info.identityPlace;
  }
  ngAfterViewInit() {
    this.sigPadElement = this.sigPad.nativeElement;
    this.context = this.sigPadElement.getContext('2d');
    if (this.context) {
      this.context.strokeStyle = '#000s';
    } else {
      console.error('Không thể khởi tạo context của Canvas');
    }
  }
  getCollaboratorsContractManager() {
    this._collaboratorService.getCollaboratorsContractManager(this.info.id).subscribe(response => {
      let fileName = `contract_EL${this.info.id}.pdf`;
      this.fetchPdf(fileName);
      fileName = `EL${this.info.id}.png`;
      this.fetchSign(fileName);
    }, error => {
      console.error('Error fetching data:', error);
    });
  }
  fetchPdf(fileName) {
    this._collaboratorService.getContractPdf(fileName).subscribe({
      next: response => {
        const blob = new Blob([response], {
          type: 'application/pdf'
        });
        this.src = URL.createObjectURL(blob);
      },
      error: err => {
        console.error('Error fetching PDF:', err);
      }
    });
  }
  fetchSign(fileName) {
    this._collaboratorService.getContractSign(fileName).subscribe({
      next: response => {
        const blob = new Blob([response], {
          type: 'image/png'
        });
        this.imageSignUrl = URL.createObjectURL(blob);
      },
      error: err => {
        console.error('Error fetching PDF:', err);
      }
    });
  }
  // Cập nhật tổng số trang khi PDF được tải xong
  afterLoadComplete(pdf) {
    this.totalPages = pdf.numPages;
  }
  showDialog() {
    this.visible = true;
  }
  onMouseDown(e) {
    if (this.context) {
      this.isDrawing = true; // Bắt đầu vẽ
      const coords = this.relativeCoords(e);
      this.context.beginPath(); // Bắt đầu vẽ từ vị trí này
      this.context.moveTo(coords.x, coords.y); // Đặt điểm bắt đầu
    }
  }
  onMouseMove(e) {
    if (this.isDrawing && this.context) {
      const coords = this.relativeCoords(e);
      this.context.lineTo(coords.x, coords.y); // Vẽ tiếp từ vị trí hiện tại
      this.context.stroke(); // Vẽ đường
    }
  }
  onMouseUp(e) {
    this.isDrawing = false; // Dừng vẽ khi thả chuột
    if (this.context) {
      this.context.closePath(); // Kết thúc vẽ
    }
  }
  relativeCoords(event) {
    const bounds = event.target.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    return {
      x: x,
      y: y
    };
  }
  clear() {
    this.context.clearRect(0, 0, this.sigPadElement.width, this.sigPadElement.height);
    this.context.beginPath();
  }
  confirm() {
    this.img = this.sigPadElement.toDataURL("image/png");
    console.log(this.img);
  }
  save() {
    console.log(this.beginDate);
    if (!this.fullname) {
      this.messageService.add({
        severity: 'error',
        summary: 'Lỗi',
        detail: 'Vui lòng nhập họ tên'
      });
    }
    if (!this.address) {
      this.messageService.add({
        severity: 'error',
        summary: 'Lỗi',
        detail: 'Vui lòng nhập địa chỉ'
      });
    }
    if (!this.cccd) {
      this.messageService.add({
        severity: 'error',
        summary: 'Lỗi',
        detail: 'Vui lòng nhập số CCCD'
      });
    }
    if (!this.beginDate) {
      this.messageService.add({
        severity: 'error',
        summary: 'Lỗi',
        detail: 'Vui lòng nhập ngày cấp CCCD'
      });
    }
    if (!this.identityPlace) {
      this.messageService.add({
        severity: 'error',
        summary: 'Lỗi',
        detail: 'Vui lòng nhập nơi cấp CCCD'
      });
    }
    if (!this.img) {
      this.messageService.add({
        severity: 'error',
        summary: 'Lỗi',
        detail: 'Vui lòng ký tên'
      });
    }
    const model = {
      collaboratorId: this.info.id,
      imageData: this.img
    };
    this._collaboratorService.saveSignature(model).subscribe(response => {
      if (response.data) {
        this.visible = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Thành công',
          detail: 'Ký tên thành công'
        });
        this.imageSignUrl = response.data.filePath;
      }
    }, error => {
      console.error('Error fetching data:', error);
    });
  }
  static #_ = this.ɵfac = function ContractManagerComponent_Factory(t) {
    return new (t || ContractManagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_collaborator_service__WEBPACK_IMPORTED_MODULE_0__.CollaboratorService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__.MessageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ContractManagerComponent,
    selectors: [["app-contract-manager"]],
    viewQuery: function ContractManagerComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sigPad = _t.first);
      }
    },
    hostBindings: function ContractManagerComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseup", function ContractManagerComponent_mouseup_HostBindingHandler($event) {
          return ctx.onMouseUp($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"])("resize", function ContractManagerComponent_resize_HostBindingHandler() {
          return ctx.onResize();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
      }
    },
    decls: 72,
    vars: 33,
    consts: [["sigPad", ""], [1, "cardWithShadow"], [1, "p-24"], [1, "d-flex", "w-100", "p-24"], [2, "color", "#004882"], [1, "row", "align-items-center"], [3, "after-load-complete", "src", "rotation", "original-size", "show-all", "fit-to-page", "zoom", "zoom-scale", "stick-to-page", "render-text", "external-link-target", "autoresize", "show-borders", "page"], [1, "row", "justify-content-center", "m-3", "p-3", 2, "margin-top", "30px"], [1, "col-6"], ["class", "col-3", "mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["alt", "Signature", 3, "src", 4, "ngIf"], ["header", "Header", 3, "visibleChange", "visible", "modal"], ["pTemplate", "header"], [1, "row"], [1, "d-flex", "col-6", 2, "flex-direction", "column"], ["for", "fullname", 1, "font-semibold"], [2, "color", "red"], ["type", "text", "pInputText", "", 3, "ngModelChange", "ngModel"], ["for", "address", 1, "font-semibold"], ["for", "cccd", 1, "font-semibold"], ["for", "beginDate", 1, "font-semibold"], ["dateFormat", "dd/mm/yy", "inputId", "icondisplay", 3, "ngModelChange", "ngModel", "iconDisplay", "showIcon"], ["for", "identityPlace", 1, "font-semibold"], [1, "d-flex", "col-6", 2, "flex-direction", "column", "margin-top", "10px"], ["width", "300", "height", "150", 3, "mousedown", "mousemove"], [1, "d-flex", "col-6", 2, "flex-direction", "column", "border", "1px solid #000", "margin-top", "10px"], [3, "src"], [1, "d-flex", "col-6", 2, "margin-top", "10px"], ["mat-raised-button", "", "color", "primary", 1, "col-5", 3, "click"], [1, "col-1"], ["pTemplate", "footer"], ["mat-raised-button", "", "color", "primary", 1, "col-3", 3, "click"], ["alt", "Signature", 3, "src"], [1, "inline-flex", "align-items-center", "justify-content-center", "gap-2"], [1, "font-bold", "white-space-nowrap"], ["label", "Cancel", "severity", "secondary", 3, "onClick", "text"], ["label", "Save", "severity", "secondary", 3, "onClick", "outlined"]],
    template: function ContractManagerComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 1)(1, "mat-card-content", 2)(2, "div", 3)(3, "mat-card-title", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5)(6, "pdf-viewer", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("after-load-complete", function ContractManagerComponent_Template_pdf_viewer_after_load_complete_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.afterLoadComplete($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7)(8, "div", 8)(9, "mat-card-title", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "B\u00EAn B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ContractManagerComponent_button_11_Template, 2, 0, "button", 9)(12, ContractManagerComponent_img_12_Template, 1, 1, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8)(14, "mat-card-title", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "B\u00EAn A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "C\u00D4NG TY TNHH NGHI\u00CAN C\u1EE8U V\u00C0 S\u1EA2N XU\u1EA4T SINH H\u1ECCC HANA, TH\u1EF0C THU\u1ED8C CTY CP T\u1EACP \u0110O\u00C0N ELITE LIFE - JAPAN.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "M\u00E3 s\u1ED1 doanh nghi\u1EC7p: 0901155104, c\u1EA5p ng\u00E0y 15 th\u00E1ng 02 n\u0103m 2024.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\u0110\u1EA1i di\u1EC7n: \u00D4ng L\u01AF\u01A0NG V\u0102N NGH\u1ECA.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Ch\u1EE9c v\u1EE5: T\u1ED5ng gi\u00E1m \u0111\u1ED1c");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\u0110i\u1EC7n tho\u1EA1i: 0909679955");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p-dialog", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("visibleChange", function ContractManagerComponent_Template_p_dialog_visibleChange_26_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.visible, $event) || (ctx.visible = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ContractManagerComponent_ng_template_27_Template, 3, 0, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 13)(29, "div", 14)(30, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " H\u1ECD v\u00E0 t\u00EAn ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function ContractManagerComponent_Template_input_ngModelChange_34_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.fullname, $event) || (ctx.fullname = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 14)(36, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " \u0110\u1ECBa ch\u1EC9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function ContractManagerComponent_Template_input_ngModelChange_40_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.address, $event) || (ctx.address = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 14)(42, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " CMTND/ CCCD/ HC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function ContractManagerComponent_Template_input_ngModelChange_46_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.cccd, $event) || (ctx.cccd = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 14)(48, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " Ng\u00E0y c\u1EA5p ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "p-calendar", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function ContractManagerComponent_Template_p_calendar_ngModelChange_52_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.beginDate, $event) || (ctx.beginDate = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 14)(54, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, " Ng\u00E0y c\u1EA5p ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function ContractManagerComponent_Template_input_ngModelChange_58_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.identityPlace, $event) || (ctx.identityPlace = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 23)(61, "canvas", 24, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ContractManagerComponent_Template_canvas_mousedown_61_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onMouseDown($event));
        })("mousemove", function ContractManagerComponent_Template_canvas_mousemove_61_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onMouseMove($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 27)(66, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContractManagerComponent_Template_button_click_66_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.confirm());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "X\u00E1c nh\u1EADn ch\u1EEF k\u00FD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContractManagerComponent_Template_button_click_69_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.clear());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, ContractManagerComponent_ng_template_71_Template, 2, 2, "ng-template", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.titleName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](30, _c1, ctx.height + "vh"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.src)("rotation", 0)("original-size", false)("show-all", true)("fit-to-page", true)("zoom", 0.7)("zoom-scale", "page-width")("stick-to-page", false)("render-text", false)("external-link-target", "blank")("autoresize", true)("show-borders", false)("page", ctx.currentPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.imageSignUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.imageSignUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](32, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("visible", ctx.visible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("modal", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.fullname);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.cccd);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.beginDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("iconDisplay", "input")("showIcon", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.identityPlace);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_7__.Button, primeng_calendar__WEBPACK_IMPORTED_MODULE_8__.Calendar, ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_9__.PdfViewerComponent, primeng_dialog__WEBPACK_IMPORTED_MODULE_10__.Dialog, primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputText],
    styles: ["canvas[_ngcontent-%COMP%] {\n    border: 1px solid #000;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZWxpdGUtbGlmZS9jb250cmFjdC1tYW5hZ2VyL2NvbnRyYWN0LW1hbmFnZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImNhbnZhcyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3943:
/*!***************************************************************************!*\
  !*** ./src/app/elite-life/customer-manager/customer-manager.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerManagerComponent: () => (/* binding */ CustomerManagerComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ 4624);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _service_collaborator_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/collaborator.service */ 8142);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 7780);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 9136);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/calendar */ 1314);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ 6676);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);










const _c0 = () => ({
  "min-width": "50rem"
});
const _c1 = () => [5, 10, 20];
function CustomerManagerComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "STT");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "H\u1ECD t\u00EAn");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "T\u00EAn \u0111\u0103ng nh\u1EADp");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "S\u0110T");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "C\u1EA5p \u0111\u1ED9");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Ng\u00E0y tham gia");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function CustomerManagerComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const customer_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](customer_r1.position);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](customer_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](customer_r1.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](customer_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](customer_r1.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](customer_r1.rank);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](15, 7, customer_r1.createdAt, "dd/MM/yyyy hh:mm:ss"));
  }
}
class CustomerManagerComponent {
  constructor(_collaboratorService) {
    this._collaboratorService = _collaboratorService;
    this.displayedColumns = ['position', 'name', 'userName', 'email', 'mobile', 'rank', 'createdAt'];
    this.collaboratorNumber = 0;
  }
  ngOnInit() {
    this.info = JSON.parse(localStorage.getItem('info') || '{}');
    this.getAllCollaboratorByParentId();
  }
  onDateChange(event) {
    if (this.rangeDates && this.rangeDates.length === 2) {
      const [startDate, endDate] = this.rangeDates;
      this.startDate = startDate;
      this.endDate = endDate;
      if (this.startDate && this.endDate) {
        this.getAllCollaboratorByParentId();
      }
    }
  }
  getAllCollaboratorByParentId() {
    const model = {
      id: this.info.id,
      startDate: this.startDate,
      endDate: this.endDate
    };
    this._collaboratorService.getAllCollaboratorByParentId(model).subscribe(response => {
      this.data = response.data;
      this.data = this.data.map((item, index) => ({
        ...item,
        position: index + 1
      }));
    }, error => {
      this.data = [];
      console.error('Error fetching data:', error);
    });
  }
  exportExcelAllCollaboratorByParentId() {
    const model = {
      id: this.info.id,
      startDate: this.startDate,
      endDate: this.endDate
    };
    this._collaboratorService.exportExcelAllCollaboratorByParentId(model).subscribe(response => {
      const blob = new Blob([response], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Báo cáo quản lý khách hàng.xlsx';
      link.click();
    }, error => {
      console.error('Error fetching data:', error);
    });
  }
  static #_ = this.ɵfac = function CustomerManagerComponent_Factory(t) {
    return new (t || CustomerManagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_collaborator_service__WEBPACK_IMPORTED_MODULE_0__.CollaboratorService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CustomerManagerComponent,
    selectors: [["app-customer-manager"]],
    viewQuery: function CustomerManagerComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__.MatPaginator, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      }
    },
    decls: 12,
    vars: 10,
    consts: [[1, "cardWithShadow"], [1, "p-24"], [1, "d-flex", "w-100"], [2, "color", "#004882"], [1, "m-l-auto"], ["selectionMode", "range", 3, "ngModelChange", "onSelect", "ngModel", "readonlyInput"], ["label", "Xu\u1EA5t Excel", "icon", "pi pi-file-export", "styleClass", "m-0", 3, "onClick", "outlined"], [1, ""], [3, "value", "paginator", "rows", "tableStyle", "rowsPerPageOptions"], ["pTemplate", "header"], ["pTemplate", "body"], [2, "width", "5%"], [2, "width", "15%"], [2, "width", "10%"]],
    template: function CustomerManagerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-content", 1)(2, "div", 2)(3, "mat-card-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Qu\u1EA3n l\u00FD kh\u00E1ch h\u00E0ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4)(6, "p-calendar", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function CustomerManagerComponent_Template_p_calendar_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.rangeDates, $event) || (ctx.rangeDates = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onSelect", function CustomerManagerComponent_Template_p_calendar_onSelect_6_listener($event) {
          return ctx.onDateChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function CustomerManagerComponent_Template_p_button_onClick_7_listener() {
          return ctx.exportExcelAllCollaboratorByParentId();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7)(9, "p-table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CustomerManagerComponent_ng_template_10_Template, 15, 0, "ng-template", 9)(11, CustomerManagerComponent_ng_template_11_Template, 16, 10, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.rangeDates);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonlyInput", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("outlined", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.data)("paginator", true)("rows", 5)("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c0))("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c1));
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardTitle, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_6__.Button, primeng_calendar__WEBPACK_IMPORTED_MODULE_7__.Calendar, primeng_table__WEBPACK_IMPORTED_MODULE_8__.Table, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4321:
/*!***************************************************!*\
  !*** ./src/app/elite-life/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ 4624);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 7697);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 7780);
/* harmony import */ var _service_statistical_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/statistical.service */ 453);
/* harmony import */ var _service_collaborator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/collaborator.service */ 8142);
/* harmony import */ var _service_wallets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/wallets.service */ 1696);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ 640);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-apexcharts */ 495);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/button */ 9136);



















const _c0 = ["chart"];
const _c1 = () => [5, 10, 20];
function HomeComponent_mat_option_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const month_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", month_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", month_r1.viewValue, " ");
  }
}
function HomeComponent_th_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " STT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function HomeComponent_td_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r2.position, " ");
  }
}
function HomeComponent_th_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " H\u1ECD t\u00EAn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function HomeComponent_td_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r3.name, " ");
  }
}
function HomeComponent_th_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " M\u00E3 s\u1ED1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function HomeComponent_td_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r4.userName, " ");
  }
}
function HomeComponent_th_96_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " C\u1EA5p \u0111\u1ED9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function HomeComponent_td_97_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r5.rank, " ");
  }
}
function HomeComponent_tr_98_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 43);
  }
}
function HomeComponent_tr_99_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 44);
  }
}
class HomeComponent {
  constructor(messageService, _statisticalService, _collaboratorService, _walletsService) {
    this.messageService = messageService;
    this._statisticalService = _statisticalService;
    this._collaboratorService = _collaboratorService;
    this._walletsService = _walletsService;
    this.displayedColumns = ['position', 'name', 'userName', 'rank'];
    this.collaboratorNumber = 0;
    this.hideWallet1 = true;
    this.hideWallet2 = true;
    this.hideWallet3 = true;
    this.baseUrl = window.location.origin;
    this.chartOptions = {
      series: [{
        name: "Nạp tiền",
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: "Rút tiền",
        data: [11, 32, 45, 32, 34, 52, 41]
      }],
      chart: {
        height: 350,
        type: "area"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };
  }
  ngOnInit() {
    this.info = JSON.parse(localStorage.getItem('info') || '{}');
    const currentYear = new Date().getFullYear();
    this.months = Array.from({
      length: 12
    }, (_, index) => ({
      value: `${index + 1}`,
      viewValue: `${this.getMonthName(index)} ${currentYear}`
    }));
    this.getDataForMonth(1);
    this.getWalletByCollaboratorId();
  }
  ngAfterViewInit() {
    this.getCollaboratorByParentId();
  }
  getMonthName(monthIndex) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[monthIndex];
  }
  onMonthChange(event) {
    const selectedMonth = event.value;
    this.getDataForMonth(selectedMonth);
  }
  getMaskedBalance1() {
    const formattedBalance = this.formatNumber(this.balance1);
    return '*'.repeat(formattedBalance.length);
  }
  getMaskedBalance2() {
    const formattedBalance = this.formatNumber(this.balance2);
    return '*'.repeat(formattedBalance.length);
  }
  getMaskedBalance3() {
    const formattedBalance = this.formatNumber(this.balance3);
    return '*'.repeat(formattedBalance.length);
  }
  formatNumber(value) {
    return value.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    });
  }
  copyToClipboard(text) {
    console.log('Copy to clipboard', text);
    navigator.clipboard.writeText(text).then(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Thành công',
        detail: 'Bạn đã copy thành công',
        life: 3000
      });
    });
  }
  confirmActivateAccount() {
    // Logic to activate account
    console.log('Account activation logic here');
  }
  getDataForMonth(month) {
    const model = {
      Month: month,
      Year: new Date().getFullYear(),
      Id: this.info.id
    };
    this._statisticalService.getStatistical(model).subscribe(response => {
      const data = response.data;
      const moneyIn = data.map(item => item.moneyIn);
      const moneyOut = data.map(item => item.moneyOut);
      const dates = data.map(item => item.date);
      this.chartOptions = {
        series: [{
          name: "Nạp tiền",
          data: moneyIn
        }, {
          name: "Rút tiền",
          data: moneyOut
        }],
        chart: {
          height: 350,
          type: "area"
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth"
        },
        xaxis: {
          categories: dates,
          type: "category"
        },
        tooltip: {
          x: {
            format: "dd/MM/yy"
          }
        }
      };
    }, error => {
      console.error('Error fetching data:', error);
    });
  }
  formatCurrency(value) {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(value);
  }
  getCollaboratorByParentId() {
    this._collaboratorService.getCollaboratorByParentId(this.info.id).subscribe(response => {
      this.data = response.data;
      this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource(this.data);
      this.dataSource.data = this.dataSource.data.map((item, index) => ({
        ...item,
        position: index + 1
      }));
      this.collaboratorNumber = this.dataSource.data.length;
      this.dataSource.paginator = this.paginator;
    }, error => {
      console.error('Error fetching data:', error);
    });
  }
  exportExcelCollaboratorByParentId() {
    this._collaboratorService.exportExcelCollaboratorByParentId(this.info.id).subscribe(response => {
      const blob = new Blob([response], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Danh sách cộng tác viên.xlsx';
      link.click();
    }, error => {
      console.error('Error fetching data:', error);
    });
  }
  getWalletByCollaboratorId() {
    this._walletsService.getWalletByCollaboratorId(this.info.id).subscribe(response => {
      this.listWalletData = response.data;
      this.balance1 = this.listWalletData.filter(item => item.walletTypeEnums === 'Source').reduce((sum, item) => sum + (item.available || 0), 0);
      // Tính tổng cho balance2 (Sale1, Sale2, Sale3)
      this.balance2 = this.listWalletData.filter(item => ['Sale1', 'Sale2', 'Sale3'].includes(item.walletTypeEnums)).reduce((sum, item) => sum + (item.available || 0), 0);
      // Tính tổng cho balance3 (CustomerGratitude, CustomerShare)
      this.balance3 = this.listWalletData.filter(item => ['CustomerGratitude', 'CustomerShare'].includes(item.walletTypeEnums)).reduce((sum, item) => sum + (item.available || 0), 0);
    }, error => {
      this.listWalletData = [];
      console.error('Error fetching data:', error);
    });
  }
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_statistical_service__WEBPACK_IMPORTED_MODULE_0__.StatisticalService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_collaborator_service__WEBPACK_IMPORTED_MODULE_1__.CollaboratorService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_wallets_service__WEBPACK_IMPORTED_MODULE_2__.WalletsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    viewQuery: function HomeComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      }
    },
    decls: 101,
    vars: 35,
    consts: [[1, "row"], [1, "col-lg-4", "col-md-6", "col-sm-12", "mb-3"], [1, "cardWithShadow"], [1, "p-24", "card-content"], ["matTooltip", "\u0110\u00E2y l\u00E0 v\u00ED 1", "matTooltipPosition", "right", 1, "pi", "pi-info-circle", 2, "cursor", "pointer"], [1, "row", "m-t-24"], [1, "col-10", "d-flex", "align-items-center"], [1, "mat-headline-5", "balance-text", 2, "color", "#fff"], ["mat-icon-button", "", "type", "button", 3, "click"], [1, "col-12", "mb-3"], [1, "p-24", 2, "color", "#fff", "border-radius", "10px", "background", "#444"], [1, "d-flex", "flex-wrap", "align-items-center"], [1, "avatar", 2, "border-radius", "50%", "margin-right", "15px"], ["src", "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg", "alt", "avatar", 1, "avatar-img"], [1, "info"], [1, "mat-headline-5", "fullname"], [1, "btn_invite", 2, "position", "absolute", "top", "16px", "right", "16px"], [3, "click"], [1, "pi", "pi-clone"], [1, "col-lg-12"], [1, "p-24"], [1, "d-flex", "w-100"], [2, "color", "#004882"], [1, "m-l-auto"], ["appearance", "outline", 1, "theme-select"], ["value", "1", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "series", "chart", "xaxis", "stroke", "tooltip", "dataLabels"], ["label", "Xu\u1EA5t Excel", "icon", "pi pi-file-export", "styleClass", "m-0", 3, "onClick", "outlined"], [1, ""], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "position"], ["style", "font-weight: bold;", "mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "userName"], ["matColumnDef", "rank"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of periodic elements", 3, "pageSizeOptions"], [3, "value"], ["mat-header-cell", "", 2, "font-weight", "bold"], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card", 2)(3, "mat-card-content", 3)(4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "S\u1ED1 d\u01B0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_12_listener() {
          return ctx.hideWallet1 = !ctx.hideWallet1;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 1)(16, "mat-card", 2)(17, "mat-card-content", 3)(18, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "S\u1ED1 d\u01B0");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 5)(21, "div", 6)(22, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_25_listener() {
          return ctx.hideWallet2 = !ctx.hideWallet2;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 1)(29, "mat-card", 2)(30, "mat-card-content", 3)(31, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "S\u1ED1 d\u01B0");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 5)(34, "div", 6)(35, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](37, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_38_listener() {
          return ctx.hideWallet3 = !ctx.hideWallet3;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 0)(42, "div", 9)(43, "mat-card", 2)(44, "mat-card-content", 10)(45, "div", 11)(46, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 14)(49, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "S\u1ED1 th\u00E0nh vi\u00EAn m\u1EDDi:4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](57, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 16)(59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "M\u00E3 M\u1EDDi: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_61_listener() {
          return ctx.copyToClipboard(ctx.baseUrl + "/authentication/login?collaboratorCode=" + (ctx.info == null ? null : ctx.info.userName));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 0)(64, "div", 19)(65, "mat-card", 2)(66, "mat-card-content", 20)(67, "div", 21)(68, "mat-card-title", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Bi\u1EC3u \u0111\u1ED3 n\u1EA1p r\u00FAt");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 23)(71, "mat-form-field", 24)(72, "mat-select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function HomeComponent_Template_mat_select_selectionChange_72_listener($event) {
          return ctx.onMonthChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](73, HomeComponent_mat_option_73_Template, 2, 2, "mat-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](74, "apx-chart", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 0)(76, "div", 19)(77, "mat-card", 2)(78, "mat-card-content", 20)(79, "div", 21)(80, "mat-card-title", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 23)(83, "p-button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function HomeComponent_Template_p_button_onClick_83_listener() {
          return ctx.exportExcelCollaboratorByParentId();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 29)(85, "table", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](86, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](87, HomeComponent_th_87_Template, 2, 0, "th", 32)(88, HomeComponent_td_88_Template, 2, 1, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](89, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](90, HomeComponent_th_90_Template, 2, 0, "th", 32)(91, HomeComponent_td_91_Template, 2, 1, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](92, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](93, HomeComponent_th_93_Template, 2, 0, "th", 32)(94, HomeComponent_td_94_Template, 2, 1, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](95, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](96, HomeComponent_th_96_Template, 2, 0, "th", 32)(97, HomeComponent_td_97_Template, 2, 1, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](98, HomeComponent_tr_98_Template, 1, 0, "tr", 37)(99, HomeComponent_tr_99_Template, 1, 0, "tr", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](100, "mat-paginator", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.hideWallet1 ? ctx.getMaskedBalance1() : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](11, 22, ctx.balance1, "1.0-2"), " ELP ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.hideWallet1 ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.hideWallet2 ? ctx.getMaskedBalance2() : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](24, 25, ctx.balance2, "1.0-2"), " ELP ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.hideWallet2 ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.hideWallet3 ? ctx.getMaskedBalance3() : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](37, 28, ctx.balance3, "1.0-2"), " ELP ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.hideWallet3 ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.info.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("M\u00E3 h\u1ED9i vi\u00EAn: ", ctx.info.userName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Ng\u00E0y tham gia: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](57, 31, ctx.info.createdAt, "dd/MM/yyyy"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.months);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("xaxis", ctx.chartOptions.xaxis)("stroke", ctx.chartOptions.stroke)("tooltip", ctx.chartOptions.tooltip)("dataLabels", ctx.chartOptions.dataLabels);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("B\u1EA3ng th\u00E0nh vi\u00EAn(", ctx.collaboratorNumber, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("outlined", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](34, _c1));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltip, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRow, ng_apexcharts__WEBPACK_IMPORTED_MODULE_15__.ChartComponent, primeng_button__WEBPACK_IMPORTED_MODULE_16__.Button, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
    styles: [".cardWithShadow[_ngcontent-%COMP%] {\n    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);\n    border-radius: 10px;\n}\n\n.avatar-img[_ngcontent-%COMP%] {\n    border-radius: 50%;\n    max-width: 150px;\n    height: 150px;\n    object-fit: cover;\n}\n\n.fullname[_ngcontent-%COMP%] {\n    color: #F6D361;\n    font-family: \"SF Pro Display\";\n    font-size: 3rem;\n    font-style: normal;\n    font-weight: 500;\n    line-height: normal;\n    margin: 17px 0;\n    display: flex;\n}\n\n.info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #FFF;\n    font-family: Inter;\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: normal;\n    margin: 5px 0;\n}\n\n.rank[_ngcontent-%COMP%] {\n    \n\n\n\n    color: #382C00;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    border-radius: 30px;\n    background: var(--gold, linear-gradient(95deg, #AF8C0C -6.72%, #FAD85D 23.65%, #AF8C0C 50.58%, #FAD85D 78.65%, #AF8C0C 107.87%));\n    padding: 2px 24px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: -moz-fit-content;\n    width: fit-content;\n    margin: 11px 15px;\n}\n\n.rank[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: #6F5E04;\n    font-family: \"SF Pro Display\";\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: normal;\n}\n\n.btn_invite[_ngcontent-%COMP%] {\n    display: flex; \n    align-items: center; \n    position: absolute; \n    top: 16px; \n    right: 16px;\n    border-radius: 10px;\n    background: #767676;\n    color: #FFF;\n    font-family: Inter;\n    font-size: 18px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n}\n\n.btn_invite[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: #FFF;\n    font-family: Inter;\n    font-size: 18px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n}\n\n\n\n\n.card-content[_ngcontent-%COMP%] {\n    height: auto;\n    border-radius: 10px;\n    background: conic-gradient(from 311deg at 50% 50%, #144DB5 5deg, #0F3E91 123deg, #00203A 325deg);\n    color: #fff;\n}\n\n.balance-text[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n    white-space: nowrap;\n}\n\n.avatar-img[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 100px;\n    object-fit: cover;\n}\n\n\n\n  \n  @media (max-width: 768px) {\n    .card-content[_ngcontent-%COMP%] {\n      height: 200px;\n      text-align: center;\n    }\n  \n    .info[_ngcontent-%COMP%] {\n      text-align: center;\n    }\n\n    .fullname[_ngcontent-%COMP%] {\n        color: #F6D361;\n        font-family: \"SF Pro Display\";\n        font-size: 2.3rem;\n        font-style: normal;\n        font-weight: 500;\n        line-height: normal;\n        margin: 8px 0;\n        display: flex;\n    }\n\n    .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        color: #FFF;\n        font-family: Inter;\n        font-size: 14px;\n        font-style: normal;\n        font-weight: 500;\n        line-height: normal;\n        margin: 5px 0;\n    }\n  }\n  \n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZWxpdGUtbGlmZS9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJDQUEyQztJQUMzQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSTs7Z01BRTRMO0lBQzVMLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGdJQUFnSTtJQUNoSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOzs7QUFHQSw2QkFBNkI7QUFDN0I7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdHQUFnRztJQUNoRyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7Ozs7O0VBS0U7SUFDRTtNQUNFLGFBQWE7TUFDYixrQkFBa0I7SUFDcEI7O0lBRUE7TUFDRSxrQkFBa0I7SUFDcEI7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsNkJBQTZCO1FBQzdCLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixhQUFhO1FBQ2IsYUFBYTtJQUNqQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLGFBQWE7SUFDakI7RUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkV2l0aFNoYWRvdyB7XG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uYXZhdGFyLWltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmZ1bGxuYW1lIHtcbiAgICBjb2xvcjogI0Y2RDM2MTtcbiAgICBmb250LWZhbWlseTogXCJTRiBQcm8gRGlzcGxheVwiO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIG1hcmdpbjogMTdweCAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5pbmZvIHAge1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIGZvbnQtZmFtaWx5OiBJbnRlcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICBtYXJnaW46IDVweCAwO1xufVxuXG4ucmFuayB7XG4gICAgLyogbWFyZ2luOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ29sZCwgY29uaWMtZ3JhZGllbnQoZnJvbSAxODBkZWcgYXQgNTAlIDUwJSwgIzkwN0MzOSAxMDkuNDM5ODY3NzM0OTA5MDZkZWcsICNEQkJDNTYgMTgzLjIzOTg3MjQ1NTU5NjkyZGVnLCAjQzJBNjRDIDI2Mi40Mzk4NjEyOTc2MDc0ZGVnLCAjRjREMTYwIDMxMS4wMzk4NTc4NjQzNzk5ZGVnKSk7ICovXG4gICAgY29sb3I6ICMzODJDMDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1nb2xkLCBsaW5lYXItZ3JhZGllbnQoOTVkZWcsICNBRjhDMEMgLTYuNzIlLCAjRkFEODVEIDIzLjY1JSwgI0FGOEMwQyA1MC41OCUsICNGQUQ4NUQgNzguNjUlLCAjQUY4QzBDIDEwNy44NyUpKTtcbiAgICBwYWRkaW5nOiAycHggMjRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIG1hcmdpbjogMTFweCAxNXB4O1xufVxuXG4ucmFuayBzcGFuIHtcbiAgICBjb2xvcjogIzZGNUUwNDtcbiAgICBmb250LWZhbWlseTogXCJTRiBQcm8gRGlzcGxheVwiO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG4uYnRuX2ludml0ZSB7XG4gICAgZGlzcGxheTogZmxleDsgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICB0b3A6IDE2cHg7IFxuICAgIHJpZ2h0OiAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogIzc2NzY3NjtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBmb250LWZhbWlseTogSW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbi5idG5faW52aXRlIHNwYW4ge1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIGZvbnQtZmFtaWx5OiBJbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxuXG4vKiBUw4TCg25nIGtow6HCusKjIG7DhMKDbmcgcmVzcG9uc2l2ZSAqL1xuLmNhcmQtY29udGVudCB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogY29uaWMtZ3JhZGllbnQoZnJvbSAzMTFkZWcgYXQgNTAlIDUwJSwgIzE0NERCNSA1ZGVnLCAjMEYzRTkxIDEyM2RlZywgIzAwMjAzQSAzMjVkZWcpO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uYmFsYW5jZS10ZXh0IHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uYXZhdGFyLWltZyB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cblxuXG4gIFxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuY2FyZC1jb250ZW50IHtcbiAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICBcbiAgICAuaW5mbyB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmZ1bGxuYW1lIHtcbiAgICAgICAgY29sb3I6ICNGNkQzNjE7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBEaXNwbGF5XCI7XG4gICAgICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgLmluZm8gcCB7XG4gICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICBmb250LWZhbWlseTogSW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgIH1cbiAgfVxuICBcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 8142:
/*!************************************************************!*\
  !*** ./src/app/elite-life/service/collaborator.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollaboratorService: () => (/* binding */ CollaboratorService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 1318);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);





class CollaboratorService {
  constructor(http, injector, router) {
    this.router = router;
    this.serviceUri = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.EnpointUrl}/Collaborator`;
    this._http = http;
  }
  getCollaboratorByParentId(CollaboratorId) {
    const apiUrl = `${this.serviceUri}/get-collaborator-by-parentId?CollaboratorId=${CollaboratorId}`;
    return this._http.get(apiUrl).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      throw error;
    }));
  }
  exportExcelCollaboratorByParentId(CollaboratorId) {
    const apiUrl = `${this.serviceUri}/export-excel-collaborator-by-parentId?CollaboratorId=${CollaboratorId}`;
    return this._http.get(apiUrl, {
      responseType: 'blob'
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      throw error;
    }));
  }
  getAllCollaboratorByParentId(model) {
    const apiUrl = `${this.serviceUri}/get-all-collaborator-by-parentId`;
    return this._http.post(apiUrl, model).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      throw error;
    }));
  }
  exportExcelAllCollaboratorByParentId(model) {
    const apiUrl = `${this.serviceUri}/export-excel-all-collaborator-by-parentId`;
    return this._http.post(apiUrl, model, {
      responseType: 'blob'
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      throw error;
    }));
  }
  getCollaboratorSystemTree(CollaboratorId) {
    const apiUrl = `${this.serviceUri}/get-collaborator-system-manager?CollaboratorId=${CollaboratorId}`;
    return this._http.get(apiUrl).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      throw error;
    }));
  }
  getTotalValueWithLevel(CollaboratorId) {
    const apiUrl = `${this.serviceUri}/get-total-value-with-level?inputId=${CollaboratorId}`;
    return this._http.get(apiUrl).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      throw error;
    }));
  }
  getCollaboratorsContractManager(CollaboratorId) {
    const apiUrl = `${this.serviceUri}/get-collaborator-contract-manager?CollaboratorId=${CollaboratorId}`;
    return this._http.get(apiUrl).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      throw error;
    }));
  }
  saveSignature(model) {
    const apiUrl = `${this.serviceUri}/save-signature`;
    return this._http.post(apiUrl, model).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      throw error;
    }));
  }
  getContractPdf(fileName) {
    const apiUrl = `${this.serviceUri}/get-contract-pdf/${fileName}`;
    return this._http.get(apiUrl, {
      responseType: 'blob'
    }); // Đặt responseType là 'blob'
  }
  getContractSign(fileName) {
    const apiUrl = `${this.serviceUri}/get-contract-sign/${fileName}`;
    return this._http.get(apiUrl, {
      responseType: 'blob'
    }); // Đặt responseType là 'blob'
  }
  static #_ = this.ɵfac = function CollaboratorService_Factory(t) {
    return new (t || CollaboratorService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: CollaboratorService,
    factory: CollaboratorService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 453:
/*!***********************************************************!*\
  !*** ./src/app/elite-life/service/statistical.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatisticalService: () => (/* binding */ StatisticalService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 1318);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);





class StatisticalService {
  constructor(http, injector, router) {
    this.router = router;
    this.serviceUri = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.EnpointUrl}/Statistical`;
    this._http = http;
  }
  getStatistical(model) {
    const apiUrl = `${this.serviceUri}/daily-wallet?Month=${model.Month}&Year=${model.Year}&CollaboratorId=${model.Id}`;
    return this._http.get(apiUrl).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      throw error;
    }));
  }
  static #_ = this.ɵfac = function StatisticalService_Factory(t) {
    return new (t || StatisticalService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: StatisticalService,
    factory: StatisticalService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1696:
/*!*******************************************************!*\
  !*** ./src/app/elite-life/service/wallets.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WalletsService: () => (/* binding */ WalletsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 1318);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);





class WalletsService {
  constructor(http, injector, router) {
    this.router = router;
    this.serviceUri = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.EnpointUrl}/Wallets`;
    this._http = http;
  }
  getWalletByCollaboratorId(CollaboratorId) {
    const apiUrl = `${this.serviceUri}/wallet-by-collaborratorId?CollaboratorId=${CollaboratorId}`;
    return this._http.get(apiUrl).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      throw error;
    }));
  }
  static #_ = this.ɵfac = function WalletsService_Factory(t) {
    return new (t || WalletsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: WalletsService,
    factory: WalletsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7249:
/*!***********************************************************************!*\
  !*** ./src/app/elite-life/system-manager/system-manager.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SystemManagerComponent: () => (/* binding */ SystemManagerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _service_wallets_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/wallets.service */ 1696);
/* harmony import */ var _service_collaborator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/collaborator.service */ 8142);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ 640);
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tree */ 8092);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);









class SystemManagerComponent {
  constructor(_walletsService, _collaboratorService) {
    this._walletsService = _walletsService;
    this._collaboratorService = _collaboratorService;
    this.hideWallet1 = true;
    this.hideWallet2 = true;
    this.hideWallet3 = true;
    this.countChildren = {};
  }
  ngOnInit() {
    this.info = JSON.parse(localStorage.getItem('info') || '{}');
    this.getWalletByCollaboratorId();
    this.countChildren = {};
    this.getCollaboratorSystemTree();
    this.getTotalValueWithLevel();
  }
  getMaskedBalance1() {
    const formattedBalance = this.formatNumber(this.balance1);
    return '*'.repeat(formattedBalance.length);
  }
  formatNumber(value) {
    return value.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    });
  }
  getWalletByCollaboratorId() {
    this._walletsService.getWalletByCollaboratorId(this.info.id).subscribe(response => {
      this.listWalletData = response.data;
      this.balance1 = this.listWalletData.filter(item => item.walletTypeEnums === 'Source').reduce((sum, item) => sum + (item.available || 0), 0);
    }, error => {
      this.listWalletData = [];
      console.error('Error fetching data:', error);
    });
  }
  getCollaboratorSystemTree() {
    this._collaboratorService.getCollaboratorSystemTree(this.info.id).subscribe(response => {
      this.treeData = response.data;
      this.treeData.push({
        id: this.info.id,
        name: this.info.userName,
        rank: this.info.rank,
        levelLabel: "null",
        parentId: null
      });
      this.totalMember = this.treeData.length - 1;
      this.tree = this.buildTree(this.treeData);
      this.expandAll();
    }, error => {
      console.error('Error fetching data:', error);
    });
  }
  buildTree(data, parentId = null, level = 0) {
    const children = data.filter(item => item.parentId === parentId);
    if (children.length === 0) {
      return [];
    }
    const childNodes = children.map(item => {
      return {
        key: item.id,
        data: `${item.name} (${item.rank})`,
        label: `${item.name} (${item.rank})`,
        children: this.buildTree(data, item.id, level + 1)
      };
    });
    if (level === 0) {
      return childNodes;
    }
    const nodeKey = `DL${level - 1}`;
    this.countChildren[nodeKey] = (this.countChildren[nodeKey] || 0) + childNodes.length;
    return [{
      key: `DL${level - 1}`,
      data: `DL${level - 1} (${childNodes.length})`,
      label: `DL${level - 1} (${childNodes.length})`,
      children: childNodes
    }];
  }
  getTotalValueWithLevel() {
    this._collaboratorService.getTotalValueWithLevel(this.info.id).subscribe(response => {
      this.balance1 = response.data;
    }, error => {
      console.error('Error fetching data:', error);
    });
  }
  expandAll() {
    this.tree.forEach(node => {
      this.expandRecursive(node, true);
    });
  }
  expandRecursive(node, isExpand) {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach(childNode => {
        this.expandRecursive(childNode, isExpand);
      });
    }
  }
  static #_ = this.ɵfac = function SystemManagerComponent_Factory(t) {
    return new (t || SystemManagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_wallets_service__WEBPACK_IMPORTED_MODULE_0__.WalletsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_collaborator_service__WEBPACK_IMPORTED_MODULE_1__.CollaboratorService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: SystemManagerComponent,
    selectors: [["app-system-manager"]],
    decls: 59,
    vars: 10,
    consts: [[1, "cardWithShadow"], [1, "p-24"], [1, "d-flex", "w-100", "p-24"], [2, "color", "#004882"], [1, "row", "align-items-center"], [1, "col-lg-4", "col-md-6", "col-sm-12", "mb-3"], [1, "p-24", "card-content"], ["matTooltip", "T\u1ED5ng doanh thu c\u1EE7a c\u1EA3 h\u1EC7 th\u1ED1ng", "matTooltipPosition", "right", 1, "pi", "pi-info-circle", 2, "cursor", "pointer"], [1, "row", "m-t-24"], [1, "col-10", "d-flex", "align-items-center"], [1, "mat-headline-5", "balance-text", 2, "color", "#fff"], ["mat-icon-button", "", "type", "button", 3, "click"], [1, "w-full", "md:w-30rem", 3, "value"]],
    template: function SystemManagerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-content", 1)(2, "div", 2)(3, "mat-card-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Qu\u1EA3n l\u00FD h\u1EC7 th\u1ED1ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "mat-card", 0)(8, "mat-card-content", 6)(9, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "T\u1ED5ng doanh thu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8)(13, "div", 9)(14, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SystemManagerComponent_Template_button_click_17_listener() {
          return ctx.hideWallet1 = !ctx.hideWallet1;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 5)(21, "mat-card", 0)(22, "mat-card-content", 6)(23, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "T\u1ED5ng s\u1ED1 th\u00E0nh vi\u00EAn");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 8)(26, "div", 9)(27, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 5)(30, "mat-card", 0)(31, "mat-card-content", 6)(32, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Th\u00E0nh vi\u00EAn DL0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 8)(35, "div", 9)(36, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 5)(39, "mat-card", 0)(40, "mat-card-content", 6)(41, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Th\u00E0nh vi\u00EAn DL1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 8)(44, "div", 9)(45, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 5)(48, "mat-card", 0)(49, "mat-card-content", 6)(50, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Th\u00E0nh vi\u00EAn DL2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 8)(53, "div", 9)(54, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "mat-card", 0)(57, "mat-card-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "p-tree", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.hideWallet1 ? ctx.getMaskedBalance1() : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](16, 7, ctx.balance1, "1.0-2"), " ELP ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.hideWallet1 ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.totalMember || 0, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.countChildren["DL0"] || 0, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.countChildren["DL1"] || 0, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.countChildren["DL2"] || 0, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.tree);
      }
    },
    dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__.MatTooltip, primeng_tree__WEBPACK_IMPORTED_MODULE_7__.Tree, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DecimalPipe],
    styles: [".card-content[_ngcontent-%COMP%] {\n    height: auto;\n    border-radius: 10px;\n    background: conic-gradient(from 311deg at 50% 50%, #144DB5 5deg, #0F3E91 123deg, #00203A 325deg);\n    color: #fff;\n    min-height: 145px;\n}\n\n.balance-text[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n    white-space: nowrap;\n}\n\n\n\n\n  \n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZWxpdGUtbGlmZS9zeXN0ZW0tbWFuYWdlci9zeXN0ZW0tbWFuYWdlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixnR0FBZ0c7SUFDaEcsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkIiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1jb250ZW50IHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiBjb25pYy1ncmFkaWVudChmcm9tIDMxMWRlZyBhdCA1MCUgNTAlLCAjMTQ0REI1IDVkZWcsICMwRjNFOTEgMTIzZGVnLCAjMDAyMDNBIDMyNWRlZyk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWluLWhlaWdodDogMTQ1cHg7XG59XG5cbi5iYWxhbmNlLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cblxuXG5cbiAgXG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 987:
/*!***********************************************************!*\
  !*** ./src/app/elite-life/tutorial/tutorial.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TutorialComponent: () => (/* binding */ TutorialComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-pdf-viewer */ 3203);





const _c0 = a0 => ({
  height: a0,
  width: "100%"
});
class TutorialComponent {
  constructor(route) {
    this.route = route;
    this.height = 100;
    this.src = '';
    this.titleName = '';
    this.currentPage = 1; // Trang hiện tại
    this.totalPages = 0;
    this.checkScreenSize();
  }
  onResize() {
    this.checkScreenSize();
  }
  checkScreenSize() {
    if (window.innerWidth <= 1024) {
      this.height = 30;
    }
  }
  ngOnInit() {
    const currentPath = this.route.snapshot.routeConfig?.path;
    // Sử dụng switch-case để kiểm tra và gán giá trị
    switch (currentPath) {
      case 'about-us':
        this.src = '/assets/tutorial/about-us.pdf';
        this.titleName = 'Về chúng tôi';
        break;
      case 'guide':
        this.src = '/assets/tutorial/hdsd.pdf';
        this.titleName = 'Hướng dẫn sử dụng';
        break;
      case 'policy':
        this.src = '/assets/tutorial/business-policy.pdf';
        this.titleName = 'Chính sách kinh doanh';
        break;
      case 'legal':
        this.src = '/assets/tutorial/legality.pdf';
        this.titleName = 'Cơ sở pháp lý';
        break;
      case 'culture':
        this.src = '/assets/tutorial/culture.pdf';
        this.titleName = 'Văn hóa Elite';
        break;
      default:
        this.src = '';
        break;
    }
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
  // Quay lại trang trước
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  // Cập nhật tổng số trang khi PDF được tải xong
  afterLoadComplete(pdf) {
    this.totalPages = pdf.numPages;
    console.log('Tổng số trang: ', this.totalPages);
  }
  static #_ = this.ɵfac = function TutorialComponent_Factory(t) {
    return new (t || TutorialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TutorialComponent,
    selectors: [["app-tutorial"]],
    hostBindings: function TutorialComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function TutorialComponent_resize_HostBindingHandler() {
          return ctx.onResize();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
      }
    },
    decls: 16,
    vars: 20,
    consts: [[1, "cardWithShadow"], [1, "p-24"], [1, "d-flex", "w-100", "p-24"], [2, "color", "#004882"], [1, "row", "align-items-center"], [3, "after-load-complete", "src", "rotation", "original-size", "show-all", "fit-to-page", "zoom", "zoom-scale", "stick-to-page", "render-text", "external-link-target", "autoresize", "show-borders", "page"], [1, "row", "justify-content-center", "mt-3", "align-items-center"], [1, "col-3"], ["mat-raised-button", "", "color", "primary", 1, "col-2", 3, "click"], [1, "col-2", "justify-content-center", 2, "font-weight", "bold", "align-items", "center", "display", "flex"]],
    template: function TutorialComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-content", 1)(2, "div", 2)(3, "mat-card-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "pdf-viewer", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("after-load-complete", function TutorialComponent_Template_pdf_viewer_after_load_complete_6_listener($event) {
          return ctx.afterLoadComplete($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TutorialComponent_Template_button_click_9_listener() {
          return ctx.previousPage();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Previous Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TutorialComponent_Template_button_click_13_listener() {
          return ctx.nextPage();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Next Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titleName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.height + "vh"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.src)("rotation", 0)("original-size", false)("show-all", false)("fit-to-page", true)("zoom", 1)("zoom-scale", "page-width")("stick-to-page", false)("render-text", false)("external-link-target", "blank")("autoresize", true)("show-borders", false)("page", ctx.currentPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Page ", ctx.currentPage, " of ", ctx.totalPages, "");
      }
    },
    dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__.PdfViewerComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4188:
/*!**************************************************!*\
  !*** ./src/app/layouts/blank/blank.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlankComponent: () => (/* binding */ BlankComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/bidi */ 3680);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ 7049);




class BlankComponent {
  constructor() {}
  static #_ = this.ɵfac = function BlankComponent_Factory(t) {
    return new (t || BlankComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BlankComponent,
    selectors: [["app-blank"]],
    decls: 2,
    vars: 0,
    consts: [["autosize", "", "autoFocus", "", "dir", "ltr", 1, "mainWrapper", "blue_theme"]],
    template: function BlankComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__.Dir, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__.MatSidenavContainer],
    encapsulation: 2
  });
}

/***/ }),

/***/ 5236:
/*!*********************************************************!*\
  !*** ./src/app/layouts/full/footer/footer.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class FooterComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 46,
    vars: 0,
    consts: [[1, "container-fluid", "bg-white", "border-top", "py-4"], [1, "row", "text-md-left", 2, "padding", "0 50px 20px 50px", "margin", "0"], [1, "col-md-2", "mb-3"], [1, "fw-bold"], [1, "list-unstyled", 2, "list-style", "none"], ["href", "tel:0967364999", "target", "_blank", "rel", "noopener noreferrer", 2, "text-decoration", "none", "color", "#2a3547"], ["href", "https://zalo.me/g/hcwaid814", "target", "_blank", "rel", "noopener noreferrer", 2, "text-decoration", "none", "color", "#2a3547"], ["src", "assets/images/elite-live/chungnhan.png", "alt", "Ch\u1EE9ng nh\u1EADn", 1, "img-fluid"], [1, "col-md-3", "mb-3"], ["src", "assets/images/elite-live/momo.png", "alt", "Momo", 1, "img-fluid", "me-2", 2, "width", "40px"], ["src", "assets/images/elite-live/credit-card.png", "alt", "Credit Card", 1, "img-fluid", "me-2", 2, "width", "40px"], ["src", "assets/images/elite-live/transfer.png", "alt", "Transfer", 1, "img-fluid", 2, "width", "40px"], ["src", "assets/images/elite-live/facebook.png", "alt", "Facebook", 1, "img-fluid", "me-2", 2, "width", "40px"], ["src", "assets/images/elite-live/youtube.png", "alt", "YouTube", 1, "img-fluid", "me-2", 2, "width", "40px"], ["src", "assets/images/elite-live/zalo.png", "alt", "Zalo", 1, "img-fluid", 2, "width", "40px"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "H\u1ED7 tr\u1EE3 kh\u00E1ch h\u00E0ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4)(6, "li")(7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Hotline: 0967364999");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li")(10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Zalo h\u1ED7 tr\u1EE3 chung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "H\u01B0\u1EDBng d\u1EABn s\u1EED d\u1EE5ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2)(15, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "V\u1EC1 Elite Life");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 4)(18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "V\u1EC1 ch\u00FAng t\u00F4i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "V\u0103n h\u00F3a Elite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "C\u01A1 s\u1EDF ph\u00E1p l\u00FD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "H\u1EE3p \u0111\u1ED3ng \u0111\u1EA1i l\u00FD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Ch\u00EDnh s\u00E1ch kinh doanh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2)(29, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Ch\u1EE9ng nh\u1EADn b\u1EDFi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8)(33, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Ph\u01B0\u01A1ng th\u1EE9c thanh to\u00E1n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 9)(37, "img", 10)(38, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8)(40, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "K\u1EBFt n\u1ED1i v\u1EDBi ch\u00FAng t\u00F4i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 12)(44, "img", 13)(45, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
    },
    styles: ["h5 {\n    font-size: 16px;\n    margin-bottom: 15px;\n  }\n  \n  ul {\n    padding-left: 0;\n    margin-bottom: 0;\n  }\n  \n  ul li {\n    font-size: 14px;\n    line-height: 1.8;\n  }\n  \n  img {\n    max-width: 100%;\n  }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9mdWxsL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGVBQWU7RUFDakIiLCJzb3VyY2VzQ29udGVudCI6WyJoNSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cbiAgXG4gIHVsIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuICBcbiAgdWwgbGkge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMS44O1xuICB9XG4gIFxuICBpbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 4796:
/*!************************************************!*\
  !*** ./src/app/layouts/full/full.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FullComponent: () => (/* binding */ FullComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ 7912);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/bidi */ 3680);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ 7049);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar/sidebar.component */ 5692);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 6376);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ 5236);
/* harmony import */ var _sidebar_profile_sidebar_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar-profile/sidebar-profile.component */ 1224);












const _c0 = ["leftsidenav"];
function FullComponent_app_sidebar_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-sidebar");
  }
}
function FullComponent_app_sidebar_profile_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-sidebar-profile");
  }
}
const MOBILE_VIEW = 'screen and (max-width: 768px)';
const TABLET_VIEW = 'screen and (min-width: 769px) and (max-width: 1024px)';
const MONITOR_VIEW = 'screen and (min-width: 1024px)';
class FullComponent {
  get isOver() {
    return this.isMobileScreen;
  }
  constructor(breakpointObserver, router) {
    this.breakpointObserver = breakpointObserver;
    this.router = router;
    this.isProfilePage = false;
    //get options from service
    this.layoutChangesSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription.EMPTY;
    this.isMobileScreen = false;
    this.isContentWidthFixed = true;
    this.isCollapsedWidthFixed = false;
    this.htmlElement = document.querySelector('html');
    this.layoutChangesSubscription = this.breakpointObserver.observe([MOBILE_VIEW, TABLET_VIEW, MONITOR_VIEW]).subscribe(state => {
      // SidenavOpened must be reset true when layout changes
      this.isMobileScreen = state.breakpoints[MOBILE_VIEW];
      this.isContentWidthFixed = state.breakpoints[MONITOR_VIEW];
    });
  }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd) {
        this.isProfilePage = event.url.includes('/profile');
      }
    });
  }
  ngOnDestroy() {
    this.layoutChangesSubscription.unsubscribe();
  }
  toggleCollapsed() {
    this.isContentWidthFixed = false;
  }
  onSidenavClosedStart() {
    this.isContentWidthFixed = false;
  }
  onSidenavOpenedChange(isOpened) {
    this.isCollapsedWidthFixed = !this.isOver;
  }
  static #_ = this.ɵfac = function FullComponent_Factory(t) {
    return new (t || FullComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: FullComponent,
    selectors: [["app-full"]],
    viewQuery: function FullComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
      }
    },
    decls: 10,
    vars: 5,
    consts: [["leftsidenav", ""], ["autosize", "", "autoFocus", "", "dir", "ltr", 1, "mainWrapper", "blue_theme", "light-theme"], [1, "sidebarNav", 3, "openedChange", "closedStart", "mode", "opened"], [4, "ngIf"], [1, "contentWrapper"], [3, "toggleCollapsed", "toggleMobileNav", "showToggle"], [1, "pageWrapper"]],
    template: function FullComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-sidenav-container", 1)(1, "mat-sidenav", 2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("openedChange", function FullComponent_Template_mat_sidenav_openedChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.onSidenavOpenedChange($event));
        })("closedStart", function FullComponent_Template_mat_sidenav_closedStart_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.onSidenavClosedStart());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, FullComponent_app_sidebar_3_Template, 1, 0, "app-sidebar", 3)(4, FullComponent_app_sidebar_profile_4_Template, 1, 0, "app-sidebar-profile", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-sidenav-content", 4)(6, "app-header", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("toggleCollapsed", function FullComponent_Template_app_header_toggleCollapsed_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.toggleCollapsed());
        })("toggleMobileNav", function FullComponent_Template_app_header_toggleMobileNav_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.sidenav.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "main", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mode", ctx.isOver ? "over" : "side")("opened", !ctx.isOver);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isProfilePage);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isProfilePage);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("showToggle", !ctx.isOver);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.Dir, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatSidenavContent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _sidebar_profile_sidebar_profile_component__WEBPACK_IMPORTED_MODULE_3__.SidebarProfileComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 6376:
/*!*********************************************************!*\
  !*** ./src/app/layouts/full/header/header.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var src_app_pages_authentication_service_authenticate_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pages/authentication/service/authenticate.service */ 9308);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ 1034);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var angular_tabler_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-tabler-icons */ 451);











function HeaderComponent_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.toggleMobileNav.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i-tabler", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class HeaderComponent {
  constructor(dialog, _authenticateService, router) {
    this.dialog = dialog;
    this._authenticateService = _authenticateService;
    this.router = router;
    this.showToggle = true;
    this.toggleChecked = false;
    this.toggleMobileNav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.toggleMobileFilterNav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.toggleCollapsed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.showFiller = false;
  }
  goToProfile() {
    this.router.navigate(['/profile']); // Change '/profile' with the route you want
  }
  logout() {
    this._authenticateService.logout();
  }
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_pages_authentication_service_authenticate_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    inputs: {
      showToggle: "showToggle",
      toggleChecked: "toggleChecked"
    },
    outputs: {
      toggleMobileNav: "toggleMobileNav",
      toggleMobileFilterNav: "toggleMobileFilterNav",
      toggleCollapsed: "toggleCollapsed"
    },
    decls: 24,
    vars: 2,
    consts: [["profilemenu", "matMenu"], [1, "topbar"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], [1, "flex-1-auto"], ["mat-flat-button", "", "color", "primary", "href", "https://adminmart.com/product/modernize-angular-admin-dashboard/", "target", "_blank", 1, "d-flex", "justify-content-center", 2, "background", "conic-gradient(from 180deg at 50% 50%, #907C39 109.43986773490906deg, #DBBC56 183.23987245559692deg, #C2A64C 262.4398612976074deg, #F4D160 311.0398578643799deg)", "color", "#fff"], ["mat-icon-button", "", "aria-label", "Notifications", 3, "matMenuTriggerFor"], ["src", "/assets/images/profile/user-1.jpg", "width", "35", 1, "rounded-circle", "object-cover"], [1, "topbar-dd", "cardWithShadow"], ["mat-menu-item", "", 3, "click"], [1, "d-flex", "align-items-center"], ["name", "user", 1, "icon-18", "d-flex"], ["mat-menu-item", ""], ["name", "mail", 1, "icon-18", "d-flex"], ["name", "list-check", 1, "icon-18", "d-flex"], [1, "p-x-12", "m-t-12"], ["mat-stroked-button", "", "color", "primary", 1, "w-100", 3, "click"], ["mat-icon-button", "", 3, "click"], ["name", "menu-2", 1, "icon-20", "d-flex"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HeaderComponent_button_1_Template, 2, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " MUA COMBO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-menu", 7, 0)(9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.goToProfile());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i-tabler", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Hồ sơ của tôi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 11)(14, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i-tabler", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "My Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 11)(18, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i-tabler", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "My Task ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 14)(22, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_22_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.logout());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        const profilemenu_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showToggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", profilemenu_r4);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuTrigger, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, angular_tabler_icons__WEBPACK_IMPORTED_MODULE_9__.TablerIconComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 1224:
/*!***************************************************************************!*\
  !*** ./src/app/layouts/full/sidebar-profile/sidebar-profile.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidebarProfileComponent: () => (/* binding */ SidebarProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class SidebarProfileComponent {
  static #_ = this.ɵfac = function SidebarProfileComponent_Factory(t) {
    return new (t || SidebarProfileComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SidebarProfileComponent,
    selectors: [["app-sidebar-profile"]],
    decls: 2,
    vars: 0,
    template: function SidebarProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sidebar-profile works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3171:
/*!************************************************************!*\
  !*** ./src/app/layouts/full/sidebar/branding.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrandingComponent: () => (/* binding */ BrandingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class BrandingComponent {
  constructor() {}
  static #_ = this.ɵfac = function BrandingComponent_Factory(t) {
    return new (t || BrandingComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BrandingComponent,
    selectors: [["app-branding"]],
    decls: 3,
    vars: 0,
    consts: [[1, "branding"], ["href", "/"], ["src", "./assets/images/elite-live/logo-header.png", "alt", "logo", 1, "align-middle", "m-2"]],
    template: function BrandingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 6351:
/*!*********************************************************************!*\
  !*** ./src/app/layouts/full/sidebar/nav-item/nav-item.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppNavItemComponent: () => (/* binding */ AppNavItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_nav_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/nav.service */ 1855);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ 943);
/* harmony import */ var angular_tabler_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-tabler-icons */ 451);






const _c0 = a0 => ({
  "mat-toolbar activeMenu": a0
});
function AppNavItemComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.item.navCap, "\n");
  }
}
function AppNavItemComponent_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppNavItemComponent_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.onItemSelected(ctx_r0.item));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i-tabler", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, ctx_r0.item.route ? ctx_r0.router.isActive(ctx_r0.item.route, true) : false));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", ctx_r0.item.iconName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.item.displayName);
  }
}
class AppNavItemComponent {
  constructor(navService, router) {
    this.navService = navService;
    this.router = router;
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }
  ngOnChanges() {
    this.navService.currentUrl.subscribe(url => {
      if (this.item.route && url) {}
    });
  }
  onItemSelected(item) {
    // if (!item.children || !item.children.length) {
    //   this.router.navigate([item.route]);
    // }
    if (item.route) {
      // Điều hướng bằng Angular Router
      this.router.navigate([item.route]);
    } else if (item.href) {
      // Điều hướng theo href
      window.open(item.href, '_blank', 'noopener,noreferrer');
    }
    // scroll
    document.querySelector('.page-wrapper')?.scroll({
      top: 0,
      left: 0
    });
  }
  static #_ = this.ɵfac = function AppNavItemComponent_Factory(t) {
    return new (t || AppNavItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_0__.NavService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppNavItemComponent,
    selectors: [["app-nav-item"]],
    inputs: {
      item: "item",
      depth: "depth"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    decls: 2,
    vars: 2,
    consts: [["mat-subheader", "", "class", "nav-caption", 4, "ngIf"], ["mat-list-item", "", "class", "menu-list-item", 3, "ngClass", "click", 4, "ngIf"], ["mat-subheader", "", 1, "nav-caption"], ["mat-list-item", "", 1, "menu-list-item", 3, "click", "ngClass"], ["matListItemIcon", "", 1, "routeIcon", 2, "color", "#fff", 3, "name"], [1, "hide-menu", 2, "color", "#fff"]],
    template: function AppNavItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AppNavItemComponent_div_0_Template, 2, 1, "div", 0)(1, AppNavItemComponent_a_1_Template, 4, 5, "a", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.item.navCap);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.item.navCap);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListItem, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListItemIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListSubheaderCssMatStyler, angular_tabler_icons__WEBPACK_IMPORTED_MODULE_5__.TablerIconComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 5506:
/*!******************************************************!*\
  !*** ./src/app/layouts/full/sidebar/sidebar-data.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   navItems: () => (/* binding */ navItems)
/* harmony export */ });
const navItems = [{
  displayName: 'Trang chủ',
  iconName: 'home',
  route: '/home'
}, {
  displayName: 'Quản lý khách hàng',
  iconName: 'users-group',
  route: '/customer-manager'
}, {
  displayName: 'Quản lý hệ thống',
  iconName: 'briefcase',
  route: '/system-manager'
}, {
  displayName: 'Về chúng tôi',
  iconName: 'building',
  route: '/about-us'
}, {
  displayName: 'Hướng dẫn sử dụng',
  iconName: 'file-text',
  route: '/guide'
}, {
  displayName: 'Hợp đồng đại lý',
  iconName: 'file-text',
  route: '/contract'
}, {
  displayName: 'Chính sách kinh doanh',
  iconName: 'file-text',
  route: '/policy'
}, {
  displayName: 'Cơ sở pháp lý',
  iconName: 'file-text',
  route: '/legal'
},
// {
//   navCap: 'Extra',
// },
{
  displayName: 'Văn hóa Elite',
  iconName: 'file-text',
  route: '/culture'
}, {
  displayName: 'Hotline: 0967364999',
  iconName: 'file-text',
  href: 'tel:0967364999'
}, {
  displayName: 'Zalo hỗ trợ chung',
  iconName: 'file-text',
  href: 'https://zalo.me/g/hcwaid814'
}, {
  displayName: 'Đào tạo hướng dẫn',
  iconName: 'file-text',
  route: '/training'
}];

/***/ }),

/***/ 5692:
/*!***********************************************************!*\
  !*** ./src/app/layouts/full/sidebar/sidebar.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidebarComponent: () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _sidebar_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar-data */ 5506);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_nav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/nav.service */ 1855);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ 943);
/* harmony import */ var _branding_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./branding.component */ 3171);
/* harmony import */ var _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav-item/nav-item.component */ 6351);







function SidebarComponent_app_nav_item_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-nav-item", 3);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("item", item_r1);
  }
}
class SidebarComponent {
  constructor(navService) {
    this.navService = navService;
    this.navItems = _sidebar_data__WEBPACK_IMPORTED_MODULE_0__.navItems;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function SidebarComponent_Factory(t) {
    return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_1__.NavService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SidebarComponent,
    selectors: [["app-sidebar"]],
    decls: 4,
    vars: 1,
    consts: [[1, "flex-layout"], [1, "sidebar-list", 2, "background", "linear-gradient(180deg, #004882 0%, #00233F 100%)", "padding", "10px 5px", "border-top-right-radius", "10px"], [3, "item", 4, "ngFor", "ngForOf"], [3, "item"]],
    template: function SidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-branding");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-nav-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SidebarComponent_app_nav_item_3_Template, 1, 1, "app-nav-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.navItems);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_material_list__WEBPACK_IMPORTED_MODULE_6__.MatNavList, _branding_component__WEBPACK_IMPORTED_MODULE_2__.BrandingComponent, _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_3__.AppNavItemComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 9439:
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaterialModule: () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/autocomplete */ 9771);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/checkbox */ 7024);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/datepicker */ 1977);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/radio */ 3804);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slider */ 4992);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8827);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ 1034);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ 7049);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ 4102);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/expansion */ 9322);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/grid-list */ 6488);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ 943);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/stepper */ 6622);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tabs */ 8223);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tree */ 8379);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button-toggle */ 9864);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/badge */ 6256);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/chips */ 2772);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/progress-bar */ 6354);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 5244);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tooltip */ 640);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/paginator */ 4624);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/sort */ 2047);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/table */ 7697);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
// Material Form Controls









// Material Navigation



// Material Layout








// Material Buttons & Indicators








// Material Popups & Modals




// Material Data tables




class MaterialModule {
  static #_ = this.ɵfac = function MaterialModule_Factory(t) {
    return new (t || MaterialModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: MaterialModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__.MatAutocompleteModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__.MatCheckboxModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDatepickerModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__.MatRadioModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__.MatSlideToggleModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenavModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbarModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__.MatGridListModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_17__.MatListModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__.MatStepperModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__.MatTabsModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_20__.MatTreeModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__.MatButtonToggleModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_23__.MatBadgeModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__.MatChipsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIconModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__.MatProgressSpinnerModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__.MatProgressBarModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatRippleModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_29__.MatBottomSheetModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__.MatDialogModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__.MatSnackBarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__.MatTooltipModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_35__.MatTableModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
    exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__.MatAutocompleteModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__.MatCheckboxModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDatepickerModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__.MatRadioModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__.MatSlideToggleModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenavModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbarModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__.MatGridListModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_17__.MatListModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__.MatStepperModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__.MatTabsModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_20__.MatTreeModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__.MatButtonToggleModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_23__.MatBadgeModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__.MatChipsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIconModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__.MatProgressSpinnerModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__.MatProgressBarModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatRippleModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_29__.MatBottomSheetModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__.MatDialogModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__.MatSnackBarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__.MatTooltipModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_35__.MatTableModule]
  });
})();

/***/ }),

/***/ 9308:
/*!**********************************************************************!*\
  !*** ./src/app/pages/authentication/service/authenticate.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthenticateService: () => (/* binding */ AuthenticateService)
/* harmony export */ });
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ 4751);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1318);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);






class AuthenticateService {
  constructor(http, injector, router) {
    this.router = router;
    this.serviceUri = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.EnpointUrl}/Authenticate`;
    this._http = http;
  }
  login(model) {
    const apiUrl = `${this.serviceUri}/login`;
    return this._http.post(apiUrl, model).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      throw error;
    }));
  }
  signUp(formData) {
    const apiUrl = `${this.serviceUri}/register`;
    return this._http.post(apiUrl, formData).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      throw error;
    }));
  }
  getBankId(model) {
    const apiUrl = `${this.serviceUri}/register-bankId`;
    return this._http.post(apiUrl, model).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      throw error;
    }));
  }
  checkParent(model) {
    const apiUrl = `${this.serviceUri}/register-checkParent`;
    return this._http.post(apiUrl, model).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      throw error;
    }));
  }
  getBanks() {
    const apiUrl = `${this.serviceUri}/register-getBanks`;
    return this._http.get(apiUrl);
  }
  refreshToken(accessToken, refreshToken) {
    const payload = {
      accessToken,
      refreshToken
    };
    const apiUrl = `${this.serviceUri}/refresh-token`;
    return this._http.post(apiUrl, payload);
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('refreshTokenExpiryTime');
    localStorage.removeItem('info');
    this.router.navigate(['/authentication/login']);
  }
  isAuthenticated() {
    const token = this.getToken();
    if (!token) {
      return false;
    }
    return true; //!this.isTokenExpired(token);
  }
  getToken() {
    const token = localStorage.getItem('token');
    if (token) return token;
    return '';
  }
  isTokenExpired(token) {
    const decodedToken = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_0__.jwtDecode)(token);
    const expirationDate = new Date(0);
    expirationDate.setUTCSeconds(decodedToken.exp);
    return expirationDate.valueOf() < new Date().valueOf();
  }
  static #_ = this.ɵfac = function AuthenticateService_Factory(t) {
    return new (t || AuthenticateService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: AuthenticateService,
    factory: AuthenticateService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2683:
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileComponent: () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/datepicker */ 1977);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var angular_tabler_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-tabler-icons */ 451);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);







// icons







class ProfileComponent {
  static #_ = this.ɵfac = function ProfileComponent_Factory(t) {
    return new (t || ProfileComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ProfileComponent,
    selectors: [["app-profile"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 69,
    vars: 2,
    consts: [["picker", ""], [1, "container", "rounded", "bg-white", "mt-5", "mb-5"], [1, "row"], [1, "col-md-3", "border-right"], [1, "d-flex", "flex-column", "align-items-center", "text-center", "p-3", "py-5"], ["width", "150px", "src", "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg", 1, "rounded-circle", "mt-5"], [1, "font-weight-bold"], [1, "text-black-50"], [1, "col-md-5", "border-right"], [1, "p-3", "py-5"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "text-right"], [1, "mat-subtitle-2", "f-s-14", "f-w-600", "m-b-12", "d-block"], ["appearance", "outline", "color", "primary", 1, "w-100"], ["matInput", "", "formControlName", "fullName", "placeholder", "H\u1ECD v\u00E0 t\u00EAn"], ["matInput", "", "formControlName", "username", "placeholder", "T\u00EAn \u0111\u0103ng nh\u1EADp"], ["matInput", "", "formControlName", "identity", "placeholder", "S\u1ED1 CMND/CCCD/HC"], ["matInput", "", "formControlName", "accountNumber", "placeholder", "S\u1ED1 t\u00E0i kho\u1EA3n"], ["matInput", "", "formControlName", "bank", "placeholder", "Ng\u00E2n h\u00E0ng"], ["matInput", "", "formControlName", "accountOwner", "placeholder", "Ch\u1EE7 t\u00E0i kho\u1EA3n"], ["matInput", "", "formControlName", "issueDate", "placeholder", "Ng\u00E0y c\u1EA5p", 3, "matDatepicker"], ["matIconSuffix", "", 3, "for"], ["matInput", "", "formControlName", "issuePlace", "placeholder", "N\u01A1i c\u1EA5p"], ["matInput", "", "formControlName", "branch", "placeholder", "Chi nh\u00E1nh"], [1, "mt-5", "text-center"], ["mat-raised-button", "", "color", "primary", "type", "submit"], [1, "col-md-4"], [1, "d-flex", "justify-content-between", "align-items-center", "experience"]],
    template: function ProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Edogaru");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "edogaru.com.my");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Th\u00F4ng tin c\u00E1 nh\u00E2n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form")(15, "mat-label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "H\u1ECD v\u00E0 t\u00EAn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "T\u00EAn \u0111\u0103ng nh\u1EADp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "CMND/CCCD/HC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "S\u1ED1 t\u00E0i kho\u1EA3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Ng\u00E2n h\u00E0ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Ch\u1EE7 t\u00E0i kho\u1EA3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Ng\u00E0y c\u1EA5p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 20)(43, "mat-datepicker-toggle", 21)(44, "mat-datepicker", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "N\u01A1i c\u1EA5p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Chi nh\u00E1nh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 24)(55, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Save Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 26)(58, "div", 9)(59, "div", 27)(60, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i v\u00E0 Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\u0110\u1ECBa ch\u1EC9 emai");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        const picker_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", picker_r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", picker_r1);
      }
    },
    dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_2__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_2__.MatInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDatepickerModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDatepickerToggle, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatNativeDateModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_5__.MatSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, angular_tabler_icons__WEBPACK_IMPORTED_MODULE_8__.TablerIconsModule],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1855:
/*!*****************************************!*\
  !*** ./src/app/services/nav.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavService: () => (/* binding */ NavService)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);




class NavService {
  constructor(router) {
    this.router = router;
    this.currentUrl = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {
        this.currentUrl.next(event.urlAfterRedirects);
      }
    });
  }
  static #_ = this.ɵfac = function NavService_Factory(t) {
    return new (t || NavService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: NavService,
    factory: NavService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  recaptcha: {
    siteKey: '6LfKNi0cAAAAACeYwFRY9_d_qjGhpiwYUo5gNW5-'
  },
  EnpointUrl: "https://localhost:7048"
};

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 2916:
/*!*****************************************!*\
  !*** ./src/untils/AuthGuard.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuardService: () => (/* binding */ AuthGuardService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_pages_authentication_service_authenticate_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pages/authentication/service/authenticate.service */ 9308);



const AuthGuardService = (route, state) => {
  const authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(src_app_pages_authentication_service_authenticate_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticateService);
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
  if (!authService.isAuthenticated()) {
    router.navigateByUrl("/authentication/login");
    return false;
  }
  return true;
};

/***/ }),

/***/ 7057:
/*!**********************************************************!*\
  !*** ./src/untils/SendAccessTokenInterceptor.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SendAccessTokenInterceptorService: () => (/* binding */ SendAccessTokenInterceptorService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 1318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_pages_authentication_service_authenticate_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pages/authentication/service/authenticate.service */ 9308);



class SendAccessTokenInterceptorService {
  constructor(authService) {
    this.authService = authService;
  }
  intercept(req, next) {
    const accessToken = localStorage.getItem('token');
    const refreshToken = localStorage.getItem('refreshToken');
    if (accessToken) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`
        }
      });
    }
    return next.handle(req).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      if (error.status === 401 && refreshToken && accessToken) {
        return this.authService.refreshToken(accessToken, refreshToken).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(newTokens => {
          localStorage.setItem('token', newTokens.accessToken);
          localStorage.setItem('refreshToken', newTokens.refreshToken);
          const newRequest = req.clone({
            setHeaders: {
              Authorization: `Bearer ${newTokens.accessToken}`
            }
          });
          return next.handle(newRequest);
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(refreshError => {
          this.authService.logout();
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => refreshError);
        }));
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  static #_ = this.ɵfac = function SendAccessTokenInterceptorService_Factory(t) {
    return new (t || SendAccessTokenInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_pages_authentication_service_authenticate_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticateService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: SendAccessTokenInterceptorService,
    factory: SendAccessTokenInterceptorService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 9601:
/*!************************!*\
  !*** canvas (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 9464:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 8717:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 6588:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 3032:
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 8306:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(886), __webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
