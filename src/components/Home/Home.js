import styled from "styled-components";

import Header from "../common/Header";
import RightSide from "./RightSide";
import Main from "./Main";
import LeftSide from "./LeftSide";

const Home = (props) => {
  return (
    <Container>
      <Header />
      <Layout>
        <LeftSide />
        <Main />
        <RightSide />
      </Layout>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fx) minmax(0, 12fx) minmax(300px, 7fx);
  column-gap: 25px;
  row-gap: 25px;
  grid-template-rows: auto;
  margin: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;


export default Home;
