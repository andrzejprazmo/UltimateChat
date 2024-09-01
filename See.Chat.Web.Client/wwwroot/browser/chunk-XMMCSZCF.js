import {
  ConnectionService,
  StreamService
} from "./chunk-VWNL3MSV.js";
import {
  APPLICATION_CONFIG,
  CommonModule,
  HttpClient,
  RouterLink,
  RouterModule,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-SVSK3QSL.js";

// src/app/pages/dashboard/services/dashboard.service.ts
var _DashboardService = class _DashboardService {
  constructor() {
    this.http = inject(HttpClient);
    this.config = inject(APPLICATION_CONFIG);
  }
  getChatRooms() {
    const url = `${this.config.hubUrl}/api/rooms`;
    return this.http.get(url);
  }
};
_DashboardService.\u0275fac = function DashboardService_Factory(t) {
  return new (t || _DashboardService)();
};
_DashboardService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DashboardService, factory: _DashboardService.\u0275fac, providedIn: "root" });
var DashboardService = _DashboardService;

// src/app/pages/dashboard/components/dashboard/dashboard.component.ts
var _c0 = (a0) => ["/chat-room", a0];
function DashboardComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 3)(2, "h5", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 5)(5, "a", 6);
    \u0275\u0275text(6, "Join");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r1.roomName);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c0, item_r1.connectionId));
  }
}
function DashboardComponent_ForEmpty_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1, "No chat rooms available");
    \u0275\u0275elementEnd();
  }
}
var _DashboardComponent = class _DashboardComponent {
  constructor() {
    this.connectionService = inject(ConnectionService);
    this.streamService = inject(StreamService);
    this.dashboardService = inject(DashboardService);
    this.chatRooms = [];
  }
  ngOnInit() {
    this.dashboardService.getChatRooms().subscribe({
      next: (rooms) => {
        this.chatRooms = rooms;
        this.setEvents();
      }
    });
  }
  setEvents() {
    this.connectionService.initializeConnection().then(() => {
      this.connectionService.connectionHub.on("NewChatRoom", (roomName, connectionId) => {
        this.chatRooms.push({ connectionId, roomName });
      });
    });
  }
  ngOnDestroy() {
    this.connectionService.connectionHub.off("NewChatRoom");
  }
};
_DashboardComponent.\u0275fac = function DashboardComponent_Factory(t) {
  return new (t || _DashboardComponent)();
};
_DashboardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 1, consts: [[1, "d-flex", "flex-row"], [1, "card"], ["role", "alert", 1, "alert", "alert-info"], [1, "card-header"], [1, "card-title"], [1, "card-footer"], [3, "routerLink"]], template: function DashboardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275repeaterCreate(1, DashboardComponent_For_2_Template, 7, 4, "div", 1, \u0275\u0275repeaterTrackByIndex, false, DashboardComponent_ForEmpty_3_Template, 2, 0, "div", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.chatRooms);
  }
}, dependencies: [CommonModule, RouterModule, RouterLink] });
var DashboardComponent = _DashboardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src\\app\\pages\\dashboard\\components\\dashboard\\dashboard.component.ts", lineNumber: 16 });
})();
export {
  DashboardComponent as default
};
//# sourceMappingURL=chunk-XMMCSZCF.js.map
