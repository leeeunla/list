import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 500%;
  margin: 0 auto;
  padding: 0 30px;
  background-color: greenyellow;
  color: gray;
`;
const Li = styled.li`
  font-size: 1.8rem;
  list-style: none;
  &:hover {
    background-color: gray;
    cursor: pointer;
  }
`;

const Content = styled.p``;
const Button = styled.button``;

export function Flower() {
  return (
    <>
      <Container>
        <ul style={{ display: "flex", justifyContent: "space-around" }}>
          <Li style={{ color: "pink" }}>봄</Li>
          <Li style={{ color: "yellow" }}>여름</Li>
          <Li style={{ color: "brown" }}>가을</Li>
          <Li style={{ color: "white" }}>
            <a href="#winter">겨울</a>
          </Li>
        </ul>
      </Container>
      <Content
        style={{
          backgroundColor: "lightpink",
          margin: "50px",
          borderRadius: "50px",
        }}
      >
        <div
          style={{
            border: "1px",
            width: "340px",
            height: "285px",
            float: "left",
            margin: "200px",
            textAlign: "center",
            fontSize: "1.2rem",
          }}
        >
          <p>봄(벚꽃)</p>
          <p>
            벚꽃은 벚나무의 꽃이다. 봄에 화창하게 피는 분홍색, 또는 하얀색
            꽃잎이 일반적이다. 꽃말은 가장 대표적인 것으로는 중간고사가 있고 그
            외에도 대표적인 것으로는 아름다운 정신(영혼), 정신적 사랑, 삶의
            아름다움이다. 그 외에도 절세미인, 삶의 덧없음과 아름다움, 순결,
            뛰어난 아름다움, 정신미, 교양, 부(富), 그리고 번영을 뜻한다. 벚꽃은
            장미과 벚나무속(Prunus) 벚나무아속(subg. Japanese cherry)
            벚나무절(sect. Cerasus) 식물의 꽃이다.
          </p>
          <Button>버튼</Button>
        </div>
        <img src="https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8JUVCJUIyJTlBJUVBJUJEJTgzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
        <img src="https://images.unsplash.com/photo-1538943186303-104afadcbb16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyㄴㄱY2h8N3x8JUVCJUIyJTlBJUVBJUJEJTgzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
      </Content>

      <Content
        style={{
          backgroundColor: "lightyellow",
          margin: "50px",
          borderRadius: "50px",
        }}
      >
        <div
          style={{
            border: "1px",
            width: "340px",
            height: "285px",
            float: "left",
            margin: "200px",
            textAlign: "center",
            fontSize: "1.2rem",
          }}
        >
          <p>여름(해바라기)</p>
          <p>
            해바라기는 중앙아메리카가 원산지인 한해살이풀로, 해를 닮은 노란 꽃이
            상당히 인상적인 식물이다. 유럽에 처음 들어왔을 때는 그 압도적인
            자태로 돌풍을 일으켰지만, 씨앗을 워낙 많이 품는 데다 어디서든 잘
            자라기에 금방 평범해졌다.
          </p>
          <Button>버튼</Button>
        </div>

        <img src="https://images.unsplash.com/photo-1598920710727-e6c74781538c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8JUVEJTk1JUI0JUVCJUIwJTk0JUVCJTlEJUJDJUVBJUI4JUIwfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
        <img src="https://images.unsplash.com/photo-1568383965198-49154caee0ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fCVFRCU5NSVCNCVFQiVCMCU5NCVFQiU5RCVCQyVFQSVCOCVCMHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
      </Content>
      <Content
        style={{
          backgroundColor: "orange",
          margin: "50px",
          borderRadius: "80px",
        }}
      >
        <div
          style={{
            border: "1px",
            width: "340px",
            height: "285px",
            float: "left",
            margin: "200px",
            textAlign: "center",
            fontSize: "1.2rem",
          }}
        >
          <p>가을(코스모스)</p>
          <p>
            원산지는 멕시코. 이름의 유래는 질서를 뜻하는 코스모스. 명명자는
            스페인의 식물학자 안토니오 호세 카바닐레스. 국내에서 코스모스
            관광지로는 구리 한강 공원의 코스모스 축제가 유명하다.
          </p>
          <Button>버튼</Button>
        </div>
        <img src="https://images.unsplash.com/photo-1602934585418-f588bea4215c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8JUVDJUJEJTk0JUVDJThBJUE0JUVCJUFBJUE4JUVDJThBJUE0JTIwJUVEJTk0JThDJUVCJTlEJUJDJUVDJTlCJThDfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
        <img src="https://images.unsplash.com/photo-1600647993560-11a92e039466?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJUJEJTk0JUVDJThBJUE0JUVCJUFBJUE4JUVDJThBJUE0JTIwJUVEJTk0JThDJUVCJTlEJUJDJUVDJTlCJThDfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
      </Content>
      <Content
        style={{
          backgroundColor: "black",
          margin: "50px",
          borderRadius: "80px",
        }}
      >
        <div
          style={{
            border: "1px",
            width: "340px",
            height: "285px",
            float: "left",
            margin: "200px",
            textAlign: "center",
            fontSize: "1.2rem",
            color: "white",
          }}
        >
          <p id="winter">겨울(매화)</p>
          <p>
            꽃은 매화라고 부르는데, 난초(蘭), 국화(菊), 대나무(竹)와 함께
            사군자라고 하여 선비의 절개를 상징한다. 이른 봄의 추위를 무릅쓰고
            제일 먼저 꽃을 피우는 점 때문이다. 특히 한겨울에 피는 매화는
            설중매라고 따로 부르기도 한다. 개화 시기는 남부지방은 1~3월,
            중부지방은 3~4월이다. 붉은 매화를 홍매(紅梅), 흰 매화를
            백매(白梅)라고 하는데, 백매는 종종 벚꽃과 혼동되기도 하고, 특히 바람
            불면 흰 꽃잎이 우수수 날리며 떨어지는 데서 착각을 일으킨다.[2]
            벚꽃과 가장 큰 차이는 향기의 유무이다. 벚꽃에는 향기가 거의
            없지만[3] 매화는 향기가 있다. 봄철 매화밭은 아주 향기롭다.
          </p>
          <Button>버튼</Button>
        </div>
        <img src="https://images.unsplash.com/photo-1521249896530-93597e4e8c4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8JUVCJUE3JUE0JUVEJTk5JTk0JUVBJUJEJTgzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
        <img src="https://images.unsplash.com/photo-1549439168-4f7c81b92071?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fCVFQiVBNyVBNCVFRCU5OSU5NCVFQSVCRCU4M3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
      </Content>
    </>
  );
}
