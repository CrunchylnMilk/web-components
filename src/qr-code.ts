import {LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import QRCode from 'qrcode-svg'

@customElement('qr-code')
export class QR_Code extends LitElement {

  @property()
  content = 'Hello World'

 override render() {

this.shadowRoot!.innerHTML = (new QRCode({
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
}