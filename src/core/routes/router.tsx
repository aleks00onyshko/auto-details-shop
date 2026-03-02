import { createBrowserRouter, redirect } from 'react-router-dom';

import { Authentication, Login, Register } from '@features/authentication';
import {
  loginAction,
  registerAction,
  selectIsAuthenticated,
  selectIsGuest,
} from '@features/authentication/store';
import { MainLayout } from '@shared/components/main-layout';
import { CatalogueGrid, ProductList } from '@features/catalogue/components';
import { Dashboard } from '@features/dashboard';
import { Catalogue } from '@features/catalogue';
import { clearFilters, setFilterPanelOpened } from '@features/catalogue/store';

import { ProtectedRoute } from './utils';
import { store } from '../../store';

export const router = createBrowserRouter([
  {
    element: <ProtectedRoute redirectPath="/dashboard" conditionFn={selectIsGuest} />,
    children: [
      {
        element: <Authentication />,
        children: [
          {
            path: 'login',
            element: <Login />,
            action: loginAction,
          },
          {
            path: 'register',
            element: <Register />,
            action: registerAction,
          },
        ],
      },
    ],
  },
  {
    element: <ProtectedRoute redirectPath="/login" conditionFn={selectIsAuthenticated} />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: 'dashboard',
            element: <Dashboard />,
          },
          {
            path: 'catalogue',
            element: <Catalogue />,
            children: [
              {
                index: true,
                loader: () => {
                  store.dispatch(clearFilters());
                  store.dispatch(setFilterPanelOpened(window.innerWidth >= 1024));
                  return null;
                },
                element: <CatalogueGrid />,
              },
              {
                path: 'results',
                element: (
                  <ProductList headerText="← Back to Categories" headerNavigatePath="/catalogue" />
                ),
              },
              {
                path: ':category',
                loader: () => {
                  store.dispatch(setFilterPanelOpened(false));

                  return null;
                },
                element: (
                  <ProductList headerText="← Back to Categories" headerNavigatePath="/catalogue" />
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
      const { isAuthenticated } = store.getState().authentication;
      return isAuthenticated ? redirect('/dashboard') : redirect('/login');
    },
  },
]);
