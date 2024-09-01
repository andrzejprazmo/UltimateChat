import {
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-FDWGOU24.js";

// src/app/pages/chat-room/services/chat-room.service.ts
var _ChatRoomService = class _ChatRoomService {
  constructor() {
  }
};
_ChatRoomService.\u0275fac = function ChatRoomService_Factory(t) {
  return new (t || _ChatRoomService)();
};
_ChatRoomService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChatRoomService, factory: _ChatRoomService.\u0275fac, providedIn: "root" });
var ChatRoomService = _ChatRoomService;

// src/app/pages/chat-room/components/chat-room/chat-room.component.ts
var _ChatRoomComponent = class _ChatRoomComponent {
  constructor() {
    this.chatRoomService = inject(ChatRoomService);
  }
};
_ChatRoomComponent.\u0275fac = function ChatRoomComponent_Factory(t) {
  return new (t || _ChatRoomComponent)();
};
_ChatRoomComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatRoomComponent, selectors: [["app-chat-room"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 0, template: function ChatRoomComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "chat-room works!");
    \u0275\u0275elementEnd();
  }
} });
var ChatRoomComponent = _ChatRoomComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatRoomComponent, { className: "ChatRoomComponent", filePath: "src\\app\\pages\\chat-room\\components\\chat-room\\chat-room.component.ts", lineNumber: 11 });
})();
export {
  ChatRoomComponent as default
};
//# sourceMappingURL=chunk-L7LUVDBP.js.map
