import React from "react";
import { Route, Routes as RoutesContainer } from "react-router-dom";
import * as URL from "../constants/urls/urlFrontEnd";

import { PrivateRoute } from "./PrivateRoute";

import AdminHomeView from "../views/AdminHomeView";
import HomeView from "../views/HomeView";
import LoginView from "../views/LoginView";
import CartView from "../views/CartView";
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
import AdminUsers from "../components/Admin/Users/AdminUsers";
import AdminRoutes from "./AdminRoutes";
import AdminProducts from "../components/Admin/Products/AdminProducts";
import AdminProductsEdit from "../components/Admin/Products/AdminProductsEdit";
import AdminUsersEdit from "../components/Admin/Users/AdminUsersEdit";
import AdminUsersNew from "../components/Admin/Users/AdminUsersNew";
import AdminCategoriesNew from "../components/Admin/Category/AdminCategoriesNew";
import AdminCategoriesEdit from "../components/Admin/Category/AdminCategoriesEdit";
import AdminProductsNew from "../components/Admin/Products/AdminProductsNew";
import AdminCategories from "../components/Admin/Category/AdminCategories";
import ChangePassword from "../components/Admin/Profile/ChangePassword";
import Profile from "../components/Admin/Profile/Profile";

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
      {/* <Route path={URL.URL_DASHBOARD_ADMIN} element={<AdminHomeView />} />
      <Route path={URL.URL_PROFILE} element={<ProfileView />} /> */}

      <Route
        path={URL.URL_DASHBOARD_ADMIN}
        element={
 
            <AdminRoutes />
      
        }
      >
        {/* <Route path={URL.URL_DASHBOARD_ADMIN} element={<AdminRoutes />}> */}
        <Route index element={<AdminHomeView />} />
        <Route
          path={URL.URL_DASHBOARD_ADMIN_PRODUCTS}
          element={<AdminProducts />}
        />
        <Route
          path={URL.URL_DASHBOARD_ADMIN_PRODUCTS_EDIT}
          element={<AdminProductsEdit />}
        />
        <Route
          path={URL.URL_DASHBOARD_ADMIN_PRODUCTS_CREATE}
          element={<AdminProductsNew />}
        />

        <Route path={URL.URL_DASHBOARD_ADMIN_USERS} element={<AdminUsers />} />
        <Route
          path={URL.URL_DASHBOARD_ADMIN_USERS_EDIT}
          element={<AdminUsersEdit />}
        />
        <Route
          path={URL.URL_DASHBOARD_ADMIN_USERS_CREATE}
          element={<AdminUsersNew />}
        />

        <Route
          path={URL.URL_DASHBOARD_ADMIN_CATEGORY}
          element={<AdminCategories />}
        />
        <Route
          path={URL.URL_DASHBOARD_ADMIN_CATEGORY_EDIT}
          element={<AdminCategoriesEdit />}
        />
        <Route
          path={URL.URL_DASHBOARD_ADMIN_CATEGORY_CREATE}
          element={<AdminCategoriesNew />}
        />
        <Route path={URL.URL_DASHBOARD_ADMIN_PROFILE} element={<Profile />} />
        <Route
          path={URL.URL_DASHBOARD_ADMIN_CHANGEPASSWORD}
          element={<ChangePassword />}
        />
      </Route>

      {/* <Route path={URL.URL_DASHBOARD_ADMIN} element={<AdminRoutes />} /> */}
      <Route
        path={URL.URL_PROFILE}
        element={
          <PrivateRoute>
            <ProfileView />
          </PrivateRoute>
        }
      />
      <Route path={URL.URL_LOGIN} element={<LoginView />} />
      <Route path={URL.URL_CART} element={<CartView />} />
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
