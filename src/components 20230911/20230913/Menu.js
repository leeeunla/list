import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: lightgray;
`;
const Li = styled.li`
  width: 100%;
  padding-left: 20px;
  list-style: none;
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
  line-height: 30px;
  padding: 0 5px;
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
  &:hover {
    background-color: white;
    color: lightgray;
  }
`;

export function Menu({ fontSize }) {
  return (
    <>
      <Container>
        <ul style={{ display: "flex", flexWrap: "wrap" }}>
          <Li fontSize={fontSize}>
            <Link href="#">Home</Link>
          </Li>
          <Li fontSize={fontSize}>
            <Link href="#">Content</Link>
          </Li>
          <Li fontSize={fontSize}>
            <Link href="#">About Us</Link>
          </Li>
          <Li fontSize={fontSize}>
            <Link href="#">Contact</Link>
          </Li>
          <Li fontSize={fontSize}>
            <Link href="#">Social</Link>
          </Li>
        </ul>
      </Container>
    </>
  );
}
