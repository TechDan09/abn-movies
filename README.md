# ABN-MOVIES

## Getting Started

This is a SPA built with the Vue.js 3 framework.
The application makes use of the free open https://api.tvmaze.com/ api for searching and displaying shows

### Preparing

```
npm install
```

### Running the project

```
npm run serve
```

The app will be available on http://localhost:8080/

## Architecture

Code files are separated into different folders in the `src` directory

- api: This holds helper functions/methods to be used app wide for making api requests to the server

- components: The component folder holds any component which will be reused on more than 1 page

- services: This contains all helper functions for performing an operation or manipulating data within components or other functions

- style: As the name implies this holds css or sass files to be used app wide, recommended for resets and app wide css variables

- views: This holds all pages/screens contained in the app

  - An example of view folder structure can be seen below for a sample page: `Home.vue`

  view/

  ├─ container/

  ├─ components/

  ├─ data/

  ├─ services/

  ├─ Home.vue

  ├─ Home.spec.js

  ├─ style.css

  - data: This holds all api calls that are used within this view or any related component
  - services: This holds helper functions that are specific for a particular view
  - components: This holds components that are most likely to be used on only this view, Any component that is to be reused on multiple views must be moved to the root directory component folder.
  - containers: This is for holding components which have specific services, components or rely on specific api calls to be used withing its components. A container can have folders for data, services and components but a container cannot hold another container.
  - Home.vue
  - Home.spec.js
  - style.css

## Code Style

- All vue components are CamelCased and within separate folders which also holds test files and styles

- Helper functions for data and services are named in kebab-cases.

## Run unit tests

```
npm run test:unit
```

## Compile and Minify for production

```
npm run build
```
