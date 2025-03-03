/* eslint-disable one-var */
// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { html, css } from "lit-element";
import { classMap } from 'lit-html/directives/class-map';
import BaseIcon from "./baseIcon";

import as400 from '@alaskaairux/icons/dist/restricted/AS-400_es6.js';
import as300 from '@alaskaairux/icons/dist/restricted/AS-300_es6.js';
import as200 from '@alaskaairux/icons/dist/restricted/AS-200_es6.js';
import as100 from '@alaskaairux/icons/dist/restricted/AS-100_es6.js';
import official400 from '@alaskaairux/icons/dist/restricted/AS-tagline-400_es6.js';
import official300 from '@alaskaairux/icons/dist/restricted/AS-tagline-300_es6.js';
import official200 from '@alaskaairux/icons/dist/restricted/AS-tagline-200_es6.js';
import official100 from '@alaskaairux/icons/dist/restricted/AS-tagline-100_es6.js';

// Import touch detection lib
import styleCss from "./alaskaStyle-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-alaska provides users a way to use the Alaska Airline logos.
 *
 * @attr {Boolean} official - Set value for alaska airlines logo with official tagline
 * @slot - Hidden from visibility, used for a11y if icon description is needed
 */

// build the component class
class AuroAlaska extends BaseIcon {
  constructor() {
    super();

    this.privateDefaults();
  }

  /**
   * @private internal defaults
   * @returns {void}
   */
  privateDefaults() {
    this.uri = 'https://unpkg.com/@alaskaairux/icons@latest/dist';
    this.sm = 107;
    this.md = 191;
    this.lg = 527;
    this.alaska = true;
    this.official = false;
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      ...super.properties,

      /**
       * @private
       */
      alaska: {
        type: Boolean,
        reflect: true
      },
      official: {
        type: Boolean,
        reflect: true
      },
    };
  }

  /**
   * @private async function to decide which logo to use
   * @param {number} iconWidth size of parent icon is in
   * @returns {object} SVG to be appended to DOM
   */
  alaskaLogoDef(iconWidth) {
    if (this.alaska) {
      if (iconWidth <= this.sm) {
        this.svg = new DOMParser().parseFromString(as100.svg, 'text/html').body.firstChild;
      } else if (iconWidth > this.sm && iconWidth <= this.md) {
        this.svg = new DOMParser().parseFromString(as200.svg, 'text/html').body.firstChild;
      } else if (iconWidth > this.md && iconWidth <= this.lg) {
        this.svg = new DOMParser().parseFromString(as300.svg, 'text/html').body.firstChild;
      } else {
        this.svg = new DOMParser().parseFromString(as400.svg, 'text/html').body.firstChild;
      }
    }
  }

  /**
   * @private async function to decide which logo to use
   * @param {number} iconWidth size of parent icon is in
   * @returns {object} SVG to be appended to DOM
   */
  alaskaOfficialDef(iconWidth) {
    if (this.official) {
      if (iconWidth <= this.sm) {
        this.svg = new DOMParser().parseFromString(official100.svg, 'text/html').body.firstChild;
      } else if (iconWidth > this.sm && iconWidth <= this.md) {
        this.svg = new DOMParser().parseFromString(official200.svg, 'text/html').body.firstChild;
      } else if (iconWidth > this.md && iconWidth <= this.lg) {
        this.svg = new DOMParser().parseFromString(official300.svg, 'text/html').body.firstChild;
      } else {
        this.svg = new DOMParser().parseFromString(official400.svg, 'text/html').body.firstChild;
      }
    }
  }

  // lifecycle function for the purpose of
  // displaying the correct Alaska logo
  // with the correct Restricted icon
  firstUpdated() {
    const iconContainer = this.shadowRoot.querySelector('.icon');
    const iconWidth = iconContainer.clientWidth;

    if (this.official) {
      this.alaska = false;
    }

    if (this.alaska) {
      this.alaskaLogoDef(iconWidth);
    } else if (this.official) {
      this.alaskaOfficialDef(iconWidth);
    }
  }

  static get styles() {
    return [
      super.styles,
      css`${styleCss}`
    ];
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    const classes = {
      'icon': true,
      'logo': this.alaska || this.official,
    }

    return html`
      <div class="${classMap(classes)}">
        <div class="util_displayHiddenVisually">
          <slot></slot>
        </div>
        ${this.svg}
      </div>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-alaska")) {
  customElements.define("auro-alaska", AuroAlaska);
}
