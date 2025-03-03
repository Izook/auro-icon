# auro-icon

`<auro-icon>` is a [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) for the purpose of displaying the [icons](https://auro.alaskaair.com/icons/usage) from the Auro Design System.

## UI development browser support

For the most up to date information on [UI development browser support](https://auro.alaskaair.com/support/browsersSupport)

## Install

[![Build Status](https://img.shields.io/github/actions/workflow/status/AlaskaAirlines/auro-icon/testPublish.yml?branch=master&style=for-the-badge)](https://github.com/AlaskaAirlines/[namespace]-[name]/actions?query=workflow%3A%22test+and+publish%22)
[![See it on NPM!](https://img.shields.io/npm/v/@alaskaairux/auro-icon?style=for-the-badge&color=orange)](https://www.npmjs.com/package/@alaskaairux/auro-icon)
[![License](https://img.shields.io/npm/l/@alaskaairux/auro-icon?color=blue&style=for-the-badge)](https://www.apache.org/licenses/LICENSE-2.0)

```shell
$ npm i @alaskaairux/auro-icon
```

Installing as a direct, dev or peer dependency is up to the user installing the package. If you are unsure as to what type of dependency you should use, consider reading this [stack overflow](https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies) answer.

### Design Token CSS Custom Property dependency

The use of any Auro custom element has a dependency on the [Auro Design Tokens](https://auro.alaskaair.com/getting-started/developers/design-tokens).

### CSS Custom Property fallbacks

[CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) are [not supported](https://auro.alaskaair.com/support/custom-properties) in older browsers. For this, fallback properties are pre-generated and included with the npm.

Any update to the Auro Design Tokens will be immediately reflected with browsers that support CSS custom properties, legacy browsers will require updated components with pre-generated fallback properties.

### Define dependency in project component

Defining the component dependency within each component that is using the `<auro-icon>` component.

```javascript
import "@alaskaairux/auro-icon";
```

**Reference component in HTML**

```html
<auro-icon category="alert" name="error" accent></auro-icon>
```

## Install bundled assets from CDN

In cases where the project is not able to process JS assets, there are pre-processed assets available for use.

**NOTE:** Be sure to replace `@latest` in the URL with the version of the asset you want. @latest is NOT aware of any MAJOR releases, use at your own risk.

```html
<link rel="stylesheet" href="https://unpkg.com/@alaskaairux/design-tokens@latest/dist/tokens/CSSCustomProperties.css" />
<link rel="stylesheet" href="https://unpkg.com/@alaskaairux/webcorestylesheets@latest/dist/bundled/essentials.css" />

<script src="https://unpkg.com/@alaskaairux/auro-icon@latest/dist/auro-icon__bundled.es5.js" nomodule></script>
<script src="https://unpkg.com/@alaskaairux/auro-icon@latest/dist/auro-icon__bundled.js" type="module"></script>

<script src="https://unpkg.com/@alaskaairux/auro-icon@latest/dist/auro-alaska__bundled.es5.js" nomodule></script>
<script src="https://unpkg.com/@alaskaairux/auro-icon@latest/dist/auro-alaska__bundled.js" type="module"></script>
```

### IE11 Support

**Displaimer:** While these components are supported in IE, there may be issues with loading the [web components polyfill](https://www.webcomponents.org/polyfills). Please consult their documentation when supporting IE11.


## auro-icon use cases

The `<auro-icon>` element should be used in situations where users may:

* want to use an auro icons without a lot of setup
* want to add an icon to another auro component

## API Code Examples

Primary auro-icon

```html
<auro-icon category="interface" name="chevron-up"></auro-icon>
<auro-icon category="interface" name="chevron-up" onDark></auro-icon>
```

Emphasis auro-icon

```html
<auro-icon category="interface" name="chevron-up" emphasis></auro-icon>
<auro-icon category="interface" name="chevron-up" emphasis onDark></auro-icon>
```

Accent auro-icon

```html
<auro-icon category="interface" name="chevron-up" accent></auro-icon>
<auro-icon category="interface" name="chevron-up" accent onDark></auro-icon>
```

Disabled auro-icon

```html
<auro-icon category="interface" name="chevron-up" disabled></auro-icon>
<auro-icon category="interface" name="chevron-up" disabled onDark></auro-icon>
```

## Alaska Logos

See [auro-alaska](https://auro.alaskaair.com/components/auro/icon/alaska).

## Other airline logos

The auro-icon component has easy access to other than Alaska airline logos.

For full list, see [Icons repo](https://github.com/AlaskaAirlines/Icons/tree/master/src/icons/logos).

Example use:

```html
<auro-icon category="logos" name="tail-AS"></auro-icon>
```

## Development

In order to develop against this project, if you are not part of the core team, you will be required to fork the project prior to submitting a pull request.

Please be sure to review the [contribution guidelines](https://auro.alaskaair.com/getting-started/developers/contributing) for this project. Please make sure to **pay special attention** to the **conventional commits** section of the document.

### Start development environment

Once the project has been cloned to your local resource and you have installed all the dependencies you will need to open two different shell sessions. One is for the **npm tasks**, the second is to run the **server**.

```shell
// shell terminal one
$ npm run dev

// shell terminal two
$ npm run serve
```

Open [localhost:3001](http://localhost:3001/)

### Testing
Automated tests are required for every Auro component. See `.\test\auro-icon.test.js` for the tests for this component. Run `npm test` to run the tests and check code coverage. Tests must pass and meet a certain coverage threshold to commit. See [the testing documentation](https://auro.alaskaair.com/support/tests) for more details.
