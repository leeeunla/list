import styled from "styled-components";
import { Menu } from "./Menu";
import { Button } from "./Button";
import { ItemList } from "./ItemList";

const Container = styled.div`
  width: 200px;
  height: 100vh;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 0;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 250px;
  width: ${() => window.innerWidth - 150}px;
`;

const XLARGE = "3rem";
const LARGE = "2rem";
const MEDIUM = "1.5rem";
const SMALL = "1rem";
const XSMALL = "0.7rem";
export function Home() {
  return (
    <>
      <Container>
        <Menu fontSize={MEDIUM} />
        <h1>한글 폰트 알아보기</h1>
      </Container>
      <Content>
        <div>
          <Button color="white" bgcolor="khaki" title="버튼1" />
          <Button color="dodgerblue" bgcolor="lightblue" title="버튼2" />
          <Button color="teal" bgcolor="lightgreen" title="버튼3" />
        </div>
        <div>
          <br />
          <br />
          <br />
          <ItemList />
        </div>
      </Content>
    </>
  );
}
