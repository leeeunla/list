import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  width: 500px;
  text-align: center;
  margin: 0 auto;
  h1 {
    font-size: 4rem;
  }
  button {
    width: 100px;
    font-size: 2rem;
  }
`;

export function CounterState() {
  const [count, setCount] = useState(0);
  //let count = 0;
  function minus() {
    setCount(count - 1);
    //count = count - 1;
    console.log("minus", count);
  }
  function plus() {
    setCount(count + 1);
    // count = count + 1;
    console.log("plus", count);
  }
  return (
    <>
      <Container>
        <h1>0</h1>
        <button onClick={minus}>-</button>
        <button onClick={plus}>+</button>
      </Container>
    </>
  );
}
