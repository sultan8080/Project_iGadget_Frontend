import React from "react";
import { Route, Routes as RoutesContainer } from "react-router-dom";

import { ROLE_ADMIN } from "../constants/rolesConstant";
import * as URL from "../constants/urls/urlFrontEnd";

import { PrivateRoute } from "./PrivateRoute";

import AdminHomeView from "../views/AdminHomeView";
import HomeView from "../views/HomeView";
import LoginView from "../views/LoginView";
import BasketView from "../views/BasketView";
import ProductView from "../views/ProductView";
import CategoryItemsView from "../views/CategoryItemsView";
import RegistrationView from "../views/RegistrationView";
import ContactView from "../views/ContactView";
import ProfileView from "../views/ProfileView";
import ProfileOrdersView from "../views/ProfileOrdersView";
import AllCategoriesView from "../views/AllCategoriesView";
import SearchView from "../views/SearchView";

import SearchInput from "../components/layouts/SearchInput";

/**
 * Routes of the application
 * with public and private route
 *
 * @author Peter Mollet
 */
const Routes = () => {

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <RoutesContainer>
      <Route
        path={URL.URL_HOME}
        element={
          <PrivateRoute>
            <HomeView />
          </PrivateRoute>
        }
      />
      <Route
        path={URL.URL_ADMIN_HOME}
        element={
          <PrivateRoute roles={[ROLE_ADMIN]}>
            <AdminHomeView />
          </PrivateRoute>
        }
      />
      <Route path={URL.URL_LOGIN} element={<LoginView />} />
      <Route path={URL.URL_BASKET} element={<BasketView />} />
      <Route path={URL.URL_REGISTER} element={<RegistrationView />} />
      <Route path={URL.URL_CONTACT} element={<ContactView />} />
      <Route path={URL.URL_PROFILE} element={<ProfileView />} />
      <Route path={URL.URL_PROFILE_ORDERS} element={<ProfileOrdersView />} />
      <Route path={URL.URL_PRODUCT} element={<ProductView />} />
      <Route path={URL.URL_SEARCH} element={<SearchView />} />
      <Route path={URL.URL_CATEGORY_ITEMS} element={<CategoryItemsView />} />
      <Route path={URL.URL_SEARCH_RESULTS} element={<SearchInput onSearch={handleSearchResults} />} />
      <Route path={URL.URL_ALL_CATEGORIES} element={<AllCategoriesView />} />
    </RoutesContainer>
  );
};

export default Routes;
