import {
  HttpClient,
  RouterOutlet,
  bootstrapApplication,
  provideHttpClient,
  provideRouter,
  withInterceptorsFromDi
} from "./chunk-DXCOWLIU.js";
import {
  APPLICATION_CONFIG
} from "./chunk-KZL7HRFK.js";
import {
  APP_INITIALIZER,
  firstValueFrom,
  tap,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-M3IVPGRH.js";

// src/app/app.routes.ts
var routes = [
  { path: "dashboard", loadComponent: () => import("./chunk-IGFHDHKZ.js") },
  { path: "chat-room", loadComponent: () => import("./chunk-YUPPMOHD.js") },
  { path: "", redirectTo: "dashboard", pathMatch: "full" }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: APPLICATION_CONFIG,
      useValue: {
        hubUrl: ""
      }
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
      deps: [HttpClient, APPLICATION_CONFIG]
    }
  ]
};
function initializeApp(http, appConfig2) {
  return () => firstValueFrom(http.get("/api/config").pipe(tap((config) => {
    appConfig2.hubUrl = config.hubUrl;
  })));
}

// src/app/app.component.ts
var _AppComponent = class _AppComponent {
  constructor() {
    this.title = "ChatRoomManager";
  }
};
_AppComponent.\u0275fac = function AppComponent_Factory(t) {
  return new (t || _AppComponent)();
};
_AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}, dependencies: [RouterOutlet] });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 11 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
