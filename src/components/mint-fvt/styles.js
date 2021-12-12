import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  color:white;
  width:90%;
`;

export const Section = styled.div`
  margin-top: 2rem;
`;

export const CardSection = styled.div`
margin-top: 1rem;
display: flex;
justify-content: space-around;
flex-wrap:wrap;
`

const titleAnimation = keyframes`
100% {  
    transform:translateX(0);
  }
`;

export const Title = styled.div`
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  overflow: hidden;
  label {
    animation: 4s ${titleAnimation} forwards;
    transform: translateX(100%);
    display: block;
  }
  @keyframes typing {
    from {
      width: 1%;
    }
    to {
      width: 100%;
    }
  }
`;

export const Introduce = styled.div`
flex: 1 1 0;
min-width:300px;
  padding: 0 2rem;
  margin:1rem;
`;

export const IntroduceTitle = styled.div`
  text-align: center;
  font-size: 32px;
`;

export const IntroduceContent = styled.div`
  margin-top: 2rem;
  text-align: center;
  > span {
    font-size: 14px;
  }
`;

export const ImageWrapper = styled.div`
width:100%;
`

export const Image = styled.img`
vertical-align: middle;
    border-style: none;
    @media only screen and (max-width:800px){
      width:100%;
    }
`

export const ImageFull = styled.img`
vertical-align: middle;
    border-style: none;
    width:100%;
`

export const MintVipBtn = styled.button`
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  background: #cf6727;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const AlignCenter = styled.div`
text-align:center;
`
export const Anchor = styled.a`
word-break: break-all;
`