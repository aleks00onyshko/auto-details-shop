import { useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@store/hooks.ts';
import { clearFilters, selectCatalogueFiltersAsQueryParams } from '../../store';

export const useCatalogueNavigation = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [_, setSearchParams] = useSearchParams();
  const filtersAsQueryParams = useAppSelector(selectCatalogueFiltersAsQueryParams);

  useEffect(() => {
    if (location.pathname === '/catalogue') {
      dispatch(clearFilters());
    }
  }, [location.pathname]);

  useEffect(() => {
    if (filtersAsQueryParams) {
      setSearchParams(filtersAsQueryParams, { replace: true });
      if (location.pathname === '/catalogue') {
        navigate('/catalogue/results', { replace: true });
      }
    } else {
      setSearchParams({});
      if (location.pathname === '/catalogue/results') {
        navigate('/catalogue', { replace: true });
      }
    }
  }, [filtersAsQueryParams]);
};
