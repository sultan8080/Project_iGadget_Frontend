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
import ForgotPasswordView from "../views/ForgotPasswordView";
import ResetPasswordView from "../views/ResetPasswordView";
import EmailVeriferView from "../views/EmailVeriferView";
import Page404View from "../views/Page404View";

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
      <Route path={URL.URL_HOME} element={<HomeView />} />
      <Route
        path={URL.URL_DASHBOARD_ADMIN}
        element={
          <PrivateRoute>
            {" "}
            <AdminHomeView />{" "}
          </PrivateRoute>
        }
      />
      <Route
        path={URL.URL_PROFILE}
        element={
          <PrivateRoute>
            {" "}
            <ProfileView />{" "}
          </PrivateRoute>
        }
      />
      <Route path={URL.URL_LOGIN} element={<LoginView />} />
      <Route path={URL.URL_BASKET} element={<BasketView />} />
      <Route path={URL.URL_REGISTER} element={<RegistrationView />} />
      <Route path={URL.URL_CONTACT} element={<ContactView />} />
      <Route path={URL.URL_PROFILE_ORDERS} element={<ProfileOrdersView />} />
      <Route path={URL.URL_PRODUCT} element={<ProductView />} />
      <Route path={URL.URL_SEARCH} element={<SearchView />} />
      <Route path={URL.URL_CATEGORY_ITEMS} element={<CategoryItemsView />} />
      <Route
        path={URL.URL_SEARCH_RESULTS}
        element={<SearchInput onSearch={handleSearchResults} />}
      />
      <Route path={URL.URL_ALL_CATEGORIES} element={<AllCategoriesView />} />
      <Route path={URL.URL_LIST} element={<AllCategoriesView />} />
      <Route path={URL.URL_FORGOT_PASSWORD} element={<ForgotPasswordView />} />
      <Route path={URL.URL_PAGE_404} element={<Page404View />} />
      <Route path={URL.URL_RESET_PASSWORD} element={<ResetPasswordView />} />
      <Route path={URL.URL_EMAIL_VERIFICATION} element={<EmailVeriferView />} />
    </RoutesContainer>
  );
};

export default Routes;
