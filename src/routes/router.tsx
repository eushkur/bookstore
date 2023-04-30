import { RequareAuth } from "components/molecules/RequareAuth/RequareAuth";
import {
  MainPage,
  SearchPage,
  DetailsBookPage,
  SignInPage,
  SignUpPage,
  ResetPage,
  NotFoundPage,
  FavoritesPage,
  CartPage,
  AccountPage,
} from "pages";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { MainTemplate } from "templates/MainTemplate";
import { ROUTE } from "./routes";
import { Registration } from "components/organisms/Registration/Registration";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.MAIN} element={<MainTemplate />}>
      <Route index element={<MainPage />} />
      <Route path={`${ROUTE.SEARCH}:page`} element={<SearchPage />} />
      <Route path={`${ROUTE.DETAILS_BOOK}:id`} element={<DetailsBookPage />} />

      <Route element={<Registration />}>
        <Route path={ROUTE.SIGN_IN} element={<SignInPage />} />
        <Route path={ROUTE.SIGN_UP} element={<SignUpPage />} />
      </Route>

      <Route path={ROUTE.RESET} element={<ResetPage />} />
      <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />

      <Route element={<RequareAuth />}>
        <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
        <Route path={ROUTE.CART} element={<CartPage />} />
        <Route path={ROUTE.ACCOUNT} element={<AccountPage />} />
      </Route>
    </Route>,
  ),
);
