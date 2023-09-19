import styled from "styled-components";
import { Navbar } from "./Navbar";
import { useState } from "react";
import { Home } from "./Home";
import { Contact } from "./Contact";
import { About } from "./About";
import { Error } from "./Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Container = styled.div`
  width: 80%;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 20% 80%;
`;
const Content = styled.div``;

export function MyRouter() {
  const [page, setPage] = useState(Home);
  return (
    <>
      <BrowserRouter>
        <Container>
          <Navbar setPage={setPage} />
          <Content>
            <Routes>
              {/* path는 주소창의 url을 말함*/}
              <Route path="/" element={<Home />}></Route>
              <Route path="/ contact" element={<Contact />}></Route>
              <Route path="/ about" element={<About />}></Route>
              <Route path="*" element={<Error />}></Route>
            </Routes>
          </Content>
        </Container>
      </BrowserRouter>
    </>
  );
}
