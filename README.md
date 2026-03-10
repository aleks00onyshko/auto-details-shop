# Auto details shop

## Structure

* **Authentication** Basic Login/Register flow. Route guards implemented
* **Dashboard** Basic dashboard, most data mocked, skeletons, chart with mocked data
* **Chat** Used websokets and RTk query, working
* **Faceted Search** Config based filtering with dropdowns representing each category
  * Each dropdown change adds on to the queryParams of the /cars request
  * Chips also implemented, stored in one specific slice
  * `useFilterCategories()` - take a a look, tried to solve generic RTK endpoint challenge. All that to make
    `FilterPanel` component dumb
* **Generic `ProductList` component** Gets data from url(queryParams and category) and performs data fetch
* **Redux persist** Implemented, to avoid usages of localstorage in redux slices for authentication specifically
* **Shared components** Implemented `FormField`, `Table`, `Select` and reused them throughout the app
* **Deploy** used github pages

## 🏗️ Architecture & State Management

* **RTK Query/Redux:** RTK query is used for data fetching and caching
* **Redux** For each feature I have corresponding slice in the Redux/RTK
* **Tailwind** Used it for styles

---

## 🛠️ Setup & Installation

1. **Install dependencies**
    ```bash
    npm install
    ```

2. **Run the development server**
    ```bash
    npm run dev
    ```

3. **Open in Browser**
   Typically runs at `http://localhost:3000`


4. **Deploy**
   ```bash
   npm run build
   ```
      ```bash
   npm run deploy
   ```

---

## 📂 Project Structure

```text
src/
├── features/        # Authentication, Catalogue, Dashboard, Chat
│ ├── Authentication # Login, Register, Redux infrastructure
│ └── Chat     # Chat, Redux infrastructure
│ ├── ...
├── core/
│   ├── types     # Project shared interfaces
│   └── routes     # routing config and helpers
├── shared/
│   ├── components     # Table, Select, FormField
│   └── hooks          # useClickOutside() hook, for overlays
├── store/
│   ├── hooks.ts       # typed useAppDispatch() and useAppSelect()
│   └── index.ts       # root store setup with persist and all slices
├──
```

## 📂 Hosting

## Hosting

<a id='ssFeatures' href="https://aleks00onyshko.github.io/auto-details-shop">Click here to check hosted website</a>

