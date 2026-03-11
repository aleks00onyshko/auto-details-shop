import {createBrowserRouter, redirect} from 'react-router-dom';

import {store} from '@store';
import {
  Authentication,
  Login,
  loginAction,
  Register,
  registerAction,
  selectIsAuthenticated,
  selectIsGuest
} from '@features/authentication';
import {MainLayout} from '@features/main-layout';
import {Chat} from "@features/chat";
import {Dashboard} from '@features/dashboard';
import {Catalogue, CatalogueGrid, clearFilters, ProductList, setFilterPanelOpened} from '@features/catalogue';

import {ProtectedRoute} from './utils/protected-route.tsx';

export const router = createBrowserRouter(
  [
    {
      element: <ProtectedRoute redirectPath="/dashboard" conditionFn={selectIsGuest}/>,
      children: [
        {
          element: <Authentication/>,
          children: [
            {
              path: 'login',
              element: <Login/>,
              action: loginAction,
            },
            {
              path: 'register',
              element: <Register/>,
              action: registerAction,
            },
          ],
        },
      ],
    },
    {
      element: <ProtectedRoute redirectPath="/login" conditionFn={selectIsAuthenticated}/>,
      children: [
        {
          element: <MainLayout chat={<Chat/>}/>,
          children: [
            {
              path: 'dashboard',
              element: <Dashboard/>,
            },
            {
              path: 'catalogue',
              element: <Catalogue/>,
              children: [
                {
                  index: true,
                  loader: () => {
                    store.dispatch(clearFilters());
                    store.dispatch(setFilterPanelOpened(window.innerWidth >= 1024));
                    return null;
                  },
                  element: <CatalogueGrid/>,
                },
                {
                  path: 'results',
                  element: (
                    <ProductList
                      headerText="← Back to Categories"
                      headerNavigatePath="/catalogue"
                    />
                  ),
                },
                {
                  path: ':category',
                  loader: () => {
                    store.dispatch(setFilterPanelOpened(false));

                    return null;
                  },
                  element: (
                    <ProductList
                      headerText="← Back to Categories"
                      headerNavigatePath="/catalogue"
                    />
                  ),
                },
              ],
            },
          ],
        },
      ],
    },
    {
      path: '/',
      loader: () => {
        const {isAuthenticated} = store.getState().authentication;
        return isAuthenticated ? redirect('/dashboard') : redirect('/login');
      },
    },
  ],
  {basename: 'auto-details-shop'}
);
