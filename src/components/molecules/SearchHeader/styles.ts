import { motion } from "framer-motion";
import styled from "styled-components";
import { Color, Media, H3 } from "ui";

const Search = styled(motion.div)`
  justify-self: center;
  padding: 12px 16px;
  border: 1px solid ${Color.SECONDARY};
  min-width: 500px;
  display: flex;
  justify-content: space-between;

  ${Media.LG} {
    min-width: 290px;
    width: 100%;
  }

  ${Media.MD} {
    min-width: 270px;
  }
`;

const SearchInput = styled.input`
  min-width: 500px;
  border: none;
  outline: none;
  :focus {
    color: ${Color.PRIMARY};
  }

  ${Media.LG} {
    min-width: 225px;
  }

  ${Media.MD} {
    min-width: 200px;
  }
`;

const SearchButton = styled(motion.button)`
  display: flex;
  align-content: center;
  background: none;
  border: none;
  cursor: pointer;
`;

const SearchListWrapper = styled(motion.div)`
  position: absolute;
  top: 90px;
  left: 20%;
  z-index: 2;
  display: grid;
  align-content: center;
  min-width: 55%;
  height: 50vh;
  background: ${Color.WHITE};
  border: 1px solid ${Color.GRAY};
  overflow-y: scroll;
`;

const SearchList = styled.ul`
  display: grid;
`;

const SearchCard = styled(motion.li)`
  display: flex;
  padding: 20px;
  border-bottom: 1px solid ${Color.GRAY};
`;

const WrapperImage = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  padding: 0 14px;
  margin-right: 16px;
  background: ${Color.BLUE};
`;

const Image = styled.img`
  max-width: 50px;
  width: 100%;
`;

const Title = styled.p`
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 32px;
`;

const Message = styled.p`
  text-align: center;
  ${H3}
`;

const SearchError = styled.span`
  color: ${Color.RED};
`;

const StyledError = styled.div`
  align-self: center;
  margin-top: 20%;
`;

export {
  Search,
  SearchButton,
  SearchInput,
  SearchList,
  SearchCard,
  WrapperImage,
  Image,
  Title,
  SearchListWrapper,
  Message,
  SearchError,
  StyledError,
};
