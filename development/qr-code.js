var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import QRCode from 'qrcode-svg';
let QR_Code = class QR_Code extends LitElement {
    constructor() {
        super(...arguments);
        this.content = 'Hello World';
    }
    render() {
        this.shadowRoot.innerHTML = (new QRCode({
            content: this.content,
            padding: 4,
            join: true,
            container: "svg-viewbox",
            xmlDeclaration: false,
            color: "#000000",
            background: "#ffffff",
            ecl: "L",
        })).svg();
    }
};
__decorate([
    property()
], QR_Code.prototype, "content", void 0);
QR_Code = __decorate([
    customElement('qr-code')
], QR_Code);
export { QR_Code };
//# sourceMappingURL=qr-code.js.map