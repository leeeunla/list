import styled from "styled-components";

const styleButton = styled.button`
  width: 100px;
  height: 40px;
  padding: 10px 20px;
  font-size: 1.3rem;
  color: ${(props) => props.bgcolor};
  border-radius: 10px;
`;
export function Button(color, bgcolor) {
  return (
    <>
      <styleButton color={color} bgcolor={bgcolor}>
        버튼
      </styleButton>
    </>
  );
}
