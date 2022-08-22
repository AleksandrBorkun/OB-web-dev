import styled from '@emotion/styled'

export const Title = styled.h2`
color: #F5FBF2;
position: relative;
text-align: center;
margin-top: 0;
margin-bottom: 0;
`;

export const CenteredDiv = styled.div`
display: flex;
justify-content: center;
`;

export const Circle = styled.span`
position: relative;
&::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -.5em;
  height: 50px;
  width: 50px;
  background-color: #8613a5;
  border-radius: 25px;
}
`;
