import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  color: white;
`;

export const Title = styled.div`
  text-align: center;
  font-size: 36px;
  margin-top: 2rem;
`;

export const Caption = styled.div`
  margin: 1rem;
  margin-bottom: 0;
  text-align: center;
`;

export const Logo = styled.div`
  text-align: center;

  img {
    max-width: 600px;
    max-height: 600px;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
`;

export const Image = styled.img`
  vertical-align: middle;
  border-style: none;
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;
