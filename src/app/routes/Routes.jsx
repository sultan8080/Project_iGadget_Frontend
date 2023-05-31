import React from "react";
import { Route, Routes as RoutesContainer } from "react-router-dom";

import { ROLE_ADMIN } from "../constants/rolesConstant";
import * as URL from "../constants/urls/urlFrontEnd";
import AdminHomeView from "../views/AdminHomeView";
import HomeView from "../views/HomeView";
import LoginView from "../views/LoginView";
import { PrivateRoute } from "./PrivateRoute";
import BasketView from "../views/BasketView";
import ProductView from "../views/ProductView";

import RegistrationView from "../views/RegistrationView";
import ContactView from "../views/ContactView";

import ProfileView from "../views/ProfileView";
import ProfileOrdersView from "../views/ProfileOrdersView";
import AllCategoriesView from "../views/AllCategoriesView";

/**
 * Routes of the application
 * with public and private route
 *
 * @author Peter Mollet
 */
const Routes = () => {
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
      <Route path={URL.URL_ALL_CATEGORIES} element={<AllCategoriesView />} />
    </RoutesContainer>
  );
};

export default Routes;
