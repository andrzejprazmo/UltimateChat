import {
  RouterLink,
  RouterModule
} from "./chunk-QLCES7UQ.js";
import {
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-3AOTZ5YJ.js";

// src/app/pages/dashboard/services/dashboard.service.ts
var _DashboardService = class _DashboardService {
};
_DashboardService.\u0275fac = function DashboardService_Factory(t) {
  return new (t || _DashboardService)();
};
_DashboardService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DashboardService, factory: _DashboardService.\u0275fac, providedIn: "root" });
var DashboardService = _DashboardService;

// src/app/pages/dashboard/components/dashboard/dashboard.component.ts
var _DashboardComponent = class _DashboardComponent {
  constructor() {
    this.dashboardService = inject(DashboardService);
  }
};
_DashboardComponent.\u0275fac = function DashboardComponent_Factory(t) {
  return new (t || _DashboardComponent)();
};
_DashboardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 0, consts: [["routerLink", "/chat-room"]], template: function DashboardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "dashboard works!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p")(3, "a", 0);
    \u0275\u0275text(4, "Create chat room");
    \u0275\u0275elementEnd()();
  }
}, dependencies: [RouterModule, RouterLink] });
var DashboardComponent = _DashboardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src\\app\\pages\\dashboard\\components\\dashboard\\dashboard.component.ts", lineNumber: 12 });
})();
export {
  DashboardComponent as default
};
//# sourceMappingURL=chunk-BFYC6DI6.js.map
