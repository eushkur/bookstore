import Spinner from "react-spinners/ClipLoader";
import { CSSProperties, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Error } from "../../components/atoms/Error/Error";
import { Color } from "ui";
import { StyledDetailsBookPage, StyledError } from "./styles";
import { fetchBookByDetails } from "store/feautures/bookDetailsSlice";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getDetailsBook } from "store/selectors/bookDetailsSelectors";
import { SimilarBooks } from "components/organisms/SimilarBooks/SimilarBooks";
import { DetailsBook } from "components/organisms/DetailBook/DetailsBook";
import { Subscription } from "components/molecules/Subscription/Subscription";

const override: CSSProperties = {
  margin: "200px auto",
};

export const DetailsBookPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { isLoading, error, bookDetails, booksSimilar } = useAppSelector(getDetailsBook);

  useEffect(() => {
    id && dispatch(fetchBookByDetails(id));
  }, [dispatch, id]);

  return (
    <StyledDetailsBookPage>
      {isLoading && (
        <Spinner color={Color.PRIMARY} loading={isLoading} cssOverride={override} size={60} />
      )}

      {error && (
        <StyledError>
          <Error value={error} />
        </StyledError>
      )}

      {!isLoading && !error && (
        <>
          <DetailsBook bookDetails={bookDetails} />
          <Subscription />
          <SimilarBooks booksSimilar={booksSimilar} />
        </>
      )}
    </StyledDetailsBookPage>
  );
};
