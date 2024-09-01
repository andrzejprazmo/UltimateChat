import {
  APPLICATION_CONFIG,
  APP_INITIALIZER,
  HttpClient,
  RouterOutlet,
  bootstrapApplication,
  firstValueFrom,
  inject,
  map,
  provideHttpClient,
  provideRouter,
  tap,
  withInterceptorsFromDi,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-SVSK3QSL.js";

// src/app/pages/chat-room/resolvers/chat-room.resolver.ts
var chatRoomResolver = (route, state) => {
  const connectionId = route.params["id"];
  if (!connectionId) {
    return null;
  }
  const http = inject(HttpClient);
  const config = inject(APPLICATION_CONFIG);
  const url = `${config.hubUrl}/api/room/${connectionId}`;
  return http.get(url).pipe(map((data) => {
    return data;
  }));
};

// src/app/app.routes.ts
var routes = [
  { path: "dashboard", loadComponent: () => import("./chunk-XMMCSZCF.js") },
  { path: "chat-room/:id", loadComponent: () => import("./chunk-XBV7ZA5K.js"), resolve: { chatRoom: chatRoomResolver } },
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
    this.title = "ChatClientManager";
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
