import styled from "styled-components";

import Header from "../common/Header";
import RightSide from "./RightSide";
import Main from "./Main";
import LeftSide from "./LeftSide";

const Home = (props) => {
  return (
    <Container>
      <Header />
      <LeftSide />
      <Main />
      <RightSide />
    </Container>
  );
};

const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
`;


export default Home;
