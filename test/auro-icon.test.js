/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable one-var */
/* eslint-disable no-undef */
import { fixture, html, expect, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/auro-icon.js';
import '../src/auro-alaska.js';

const fetchStub = sinon.stub(window, 'fetch');

function mockIconResponse(body = "") {
  return new window.Response(JSON.stringify(body), {
    status: 200,
    headers: { 'Content-type': 'application/json' }
 });
}

beforeEach(() => {
  fetchStub.resetHistory();
  fetchStub.resolves(mockIconResponse("<svg></svg>"));
});

describe('auro-icon', () => {

  it('icon is set', async () => {
    const el = await fixture(html`
      <auro-icon></auro-icon>
    `);

    await waitUntil(() => el.svg, 'Element did not become ready');

    const div = el.shadowRoot.querySelector('div');
    const svg = el.shadowRoot.querySelector('svg');

    expect(div).to.not.have.class('emphasis');
    expect(div).to.not.have.class('accent');
    expect(div).to.not.have.class('disabled');

    expect(svg).to.not.be.null;
  });

  it('icon is not set', async () => {
    const el = await fixture(html`
      <auro-icon category="interface" name="notThere"></auro-icon>
    `);

    await waitUntil(() => el.svg, 'Element did not become ready');

    const div = el.shadowRoot.querySelector('div');
    const svg = el.shadowRoot.querySelector('svg');

    expect(div).to.not.have.class('emphasis');
    expect(div).to.not.have.class('accent');
    expect(div).to.not.have.class('disabled');

    expect(svg).to.not.be.null;
  });

  it('icon is missing properties', async () => {
    const el = await fixture(html`
      <auro-icon></auro-icon>
    `);

    await waitUntil(() => el.svg, 'Element did not become ready');

    const div = el.shadowRoot.querySelector('div');
    const svg = el.shadowRoot.querySelector('svg');

    expect(div).to.not.have.class('emphasis');
    expect(div).to.not.have.class('accent');
    expect(div).to.not.have.class('disabled');
    expect(svg).to.not.be.null;
  });

  it('does not duplicate requests for same icon source', async () => {
    const el = await (fixture(html`
      <auro-icon category="interface" name="chevron-up" emphasis></auro-icon>
      <auro-icon category="interface" name="chevron-up" emphasis></auro-icon>
    `));

    await waitUntil(() => el.svg, 'Element did not become ready');

    expect(fetch).to.be.calledOnceWith(sinon.match('icons/interface/chevron-up.svg'));
  });

  it('auro-icon is using emphasis style & util_displayHiddenVisually', async () => {
    const el = await fixture(html`
      <auro-icon category="interface" name="chevron-up" emphasis></auro-icon>
    `);

    await waitUntil(() => el.svg, 'Element did not become ready');

    const div = el.shadowRoot.querySelector('div');
    const nestedDiv = el.shadowRoot.querySelector('div > div');

    expect(div).to.have.class('primary');
    expect(div).to.have.class('emphasis');
    expect(div).to.not.have.class('accent');
    expect(div).to.not.have.class('disabled');
    expect(nestedDiv).to.have.class('util_displayHiddenVisually');
  });

  it('auro-icon is using label', async () => {
    const el = await fixture(html`
      <auro-icon category="interface" name="chevron-up" label>Hello world</auro-icon>
    `);

    await waitUntil(() => el.svg, 'Element did not become ready');

    const div = el.shadowRoot.querySelector('div');

    expect(div).to.have.class('label');
  });

  it('auro-icon is not hiding content', async () => {
    const el = await fixture(html`
      <auro-icon category="interface" name="chevron-up" label>Hello world</auro-icon>
    `);

    await waitUntil(() => el.svg, 'Element did not become ready');

    const div = el.shadowRoot.querySelector('div > div');

    expect(div).to.not.have.class('util_displayHiddenVisually');
  });

  it('auro-icon is using accent style', async () => {
    const el = await fixture(html`
      <auro-icon category="interface" name="chevron-up" accent></auro-icon>
    `);

    await waitUntil(() => el.svg, 'Element did not become ready');

    const div = el.shadowRoot.querySelector('div');

    expect(div).to.have.class('primary');
    expect(div).to.not.have.class('emphasis');
    expect(div).to.have.class('accent');
    expect(div).to.not.have.class('disabled');
  });

  it('auro-icon is using disabled style', async () => {
    const el = await fixture(html`
      <auro-icon category="interface" name="chevron-up" disabled></auro-icon>
    `);

    await waitUntil(() => el.svg, 'Element did not become ready');

    const div = el.shadowRoot.querySelector('div');

    expect(div).to.have.class('primary');
    expect(div).to.not.have.class('emphasis');
    expect(div).to.not.have.class('accent');
    expect(div).to.have.class('disabled');
  });

  it('default accessibility', async () => {
    const el = await fixture(html`
      <auro-icon category="interface" name="chevron-up"></auro-icon>
    `);

    await waitUntil(() => el.svg, 'Element did not become ready');

    const span = el.shadowRoot.querySelector('span');

    expect(span).to.have.attr('aria-hidden', 'true');
  });

  it('edited accessibility', async () => {
    const el = await fixture(html`
      <auro-icon category="interface" name="chevron-up" ariaHidden="false"></auro-icon>
    `);

    await waitUntil(() => el.svg, 'Element did not become ready');

    const span = el.shadowRoot.querySelector('span');

    expect(span).to.have.attr('aria-hidden', 'false');
  });

  it('auro-icon does not show alaska icon', async () => {
    const el = await fixture(html`
      <auro-icon alaska></auro-icon>
    `);

    await waitUntil(() => el.svg, 'Element did not become ready');

    const div = el.shadowRoot.querySelector('div');

    expect(div).to.not.have.class('logo');
    expect(div).to.not.have.class('emphasis');
    expect(div).to.not.have.class('accent');
  });

  it('auro-icon does not show alaska tagline icon', async () => {
    const el = await fixture(html`
      <auro-icon alaskaTagline></auro-icon>
    `);

    await waitUntil(() => el.svg, 'Element did not become ready');

    const div = el.shadowRoot.querySelector('div');

    expect(div).to.not.have.class('logo');
    expect(div).to.not.have.class('emphasis');
    expect(div).to.not.have.class('accent');
  });

  it('auro-icon shows alaska logo icon', async () => {
    const el = await fixture(html`
      <auro-icon category="logos" name="logo-AS"></auro-icon>
    `);

    await waitUntil(() => el.svg, 'Element did not become ready');

    const div = el.shadowRoot.querySelector('div');

    expect(div).to.have.class('primary');
    expect(div).to.not.have.class('emphasis');
    expect(div).to.not.have.class('accent');
  });

  it('auro-alaska shows small alaska logo', async () => {
    const el = await fixture(html`
      <auro-alaska style="width: 72px" alaska></auro-alaska>
    `);

    const svg = el.shadowRoot.querySelector('svg');
    expect(svg.getAttribute('viewBox')).to.equal('0 0 57 17');
  });

  it('auro-alaska shows small alaska tagline logo', async () => {
    const el = await fixture(html`
      <auro-alaska style="width: 72px" official></auro-alaska>
    `);

    const svg = el.shadowRoot.querySelector('svg');
    expect(svg.getAttribute('viewBox')).to.equal('0 0 57 24');
  });

  it('auro-alaska shows med alaska logo', async () => {
    const el = await fixture(html`
      <auro-alaska style="width: 108px" alaska></auro-alaska>
    `);

    const svg = el.shadowRoot.querySelector('svg');
    expect(svg.getAttribute('viewBox')).to.equal('0 0 83 26');
  });

  it('auro-alaska shows med alaska tagline logo', async () => {
    const el = await fixture(html`
      <auro-alaska style="width: 108px" official></auro-alaska>
    `);

    const svg = el.shadowRoot.querySelector('svg');
    expect(svg.getAttribute('viewBox')).to.equal('0 0 83 35');
  });

  it('auro-alaska shows lg alaska logo', async () => {
    const el = await fixture(html`
      <auro-alaska style="width: 192px" alaska></auro-alaska>
    `);

    const svg = el.shadowRoot.querySelector('svg');
    expect(svg.getAttribute('viewBox')).to.equal('0 0 144 45');
  });

  it('auro-alaska shows lg alaska tagline logo', async () => {
    const el = await fixture(html`
      <auro-alaska style="width: 192px" official></auro-alaska>
    `);

    const svg = el.shadowRoot.querySelector('svg');
    expect(svg.getAttribute('viewBox')).to.equal('0 0 144 63');
  });

  it('auro-alaska shows xl alaska logo', async () => {
    const el = await fixture(html`
      <auro-alaska style="width: 528px" alaska></auro-alaska>
    `);

    const svg = el.shadowRoot.querySelector('svg');
    expect(svg.getAttribute('viewBox')).to.equal('0 0 396 121');
  });

  it('auro-alaska shows xl alaska tagline logo', async () => {
    const el = await fixture(html`
      <auro-alaska style="width: 528px" official></auro-alaska>
    `);

    const svg = el.shadowRoot.querySelector('svg');
    expect(svg.getAttribute('viewBox')).to.equal('0 0 396 171');
  });

  it('auro-icon is accessible', async () => {
    const el = await fixture(html`
      <auro-icon category="interface" name="chevron-up"></auro-icon>
    `);

    await waitUntil(() => el.svg, 'Element did not become ready');

    expect(el).to.be.accessible();
  });

  it('auro-icon custom element is defined', async () => {
    const el = await Boolean(customElements.get("auro-icon"));

    expect(el).to.be.true;
  });
});
