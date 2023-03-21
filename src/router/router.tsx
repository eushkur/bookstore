import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { MainPage } from '../pages/MainPage/MainPage';
import { DetailsPage } from '../pages/DetailsPage/DetailsPage';
import { AccountPage } from '../pages/AccountPage/AccountPage';
import { BookPage } from '../pages/BookPage/BookPage';
import { CartPage } from '../pages/CartPage/CartPage';
import { FavoritesPage } from '../pages/FavoritesPage/FavoritesPage';
import { SearchPage } from '../pages/SearchPage/SearchPage';
import { SignInPage } from '../pages/SignInPage/SignInPage';
import { MainTemplate } from '../templates/MainTemplate';
import { ROUTE } from './routes';
import { SignUpPage } from '../pages/SignUpPage/SignUpPage';
import { ResetPage } from '../pages/ResetPage/ResetPage';
import { RequareAuth } from '../components/molecules/RequareAuth/RequareAuth';


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={ROUTE.MAIN} element={<MainTemplate />}>
            <Route index element={<MainPage />} />
            <Route path={ROUTE.DETAILS} element={<DetailsPage />} />
            <Route path={ROUTE.ACCOUNT} element={<AccountPage />} />
            <Route path={ROUTE.BOOK} element={<BookPage />} />
            <Route path={ROUTE.CART} element={<CartPage />} />
            <Route path={ROUTE.SEARCH} element={<SearchPage />} />
            <Route path={ROUTE.SIGN_IN} element={<SignInPage />} />
            <Route path={ROUTE.SIGN_UP} element={<SignUpPage />} />
            <Route path={ROUTE.RESET} element={<ResetPage />} />
            <Route element={<RequareAuth />}>
                <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
            </Route>  
        </Route>
  
    )
);

           