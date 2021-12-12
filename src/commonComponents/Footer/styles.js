import styled from "styled-components";
import { ChevronRight } from "@styled-icons/bootstrap/ChevronRight";

export const Container = styled.div`
  border-top: solid 3px #9a8a78;
  margin: 0 auto;
  width: 90%;
  margin-top: 4rem;
`;

export const Inner = styled.div``;

export const Content = styled.div`
  text-align: center;
  padding: 12px;
  display: flex;
  @media only screen and (max-width: 1050px) {
    flex-direction: column;
  }
`;

export const Logo = styled.div`
  float: none;
  display: inline-flex;
  img {
    width: 220px;
    height: 220px;
  }
`;

export const Action = styled.div`
  font-size: 15px;
  div.social--link img {
    with: 20px;
    height: 20px;
    padding: 0 8px;
  }

  div.terms {
    margin-top: 12px;
    a {
      color: white;
      text-decoration: underline;
    }
  }

  div.others {
    margin-top: 12px;
    a {
      color: white;
      margin-right: 24px;
      text-decoration: underline;
    }
  }
`;

export const SendMail = styled.div`
  align-items: center;
  display: inline-block;
`;

export const MailForm = styled.div`
  display: flex;
  justify-content: center;

  input {
    padding: 4px 12px;
  }
  input.thanks--joining {
    display: block;
    margin: 0;
    background: white;
  }
  @media only screen and (max-width: 400px) {
    input {
      width: 150px;
    }
    input.thanks--joining {
      width: 150px;
    }
  }
`;

export const MailBtn = styled.div`
  background: #9a8a78;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: pointer;
`;

export const CopyRight = styled.div`
  color: #9a8a78;
  text-align: center;
  padding-bottom: 20px;
`;

export const ChevronRightIcon = styled(ChevronRight)`
  color: black;
`;

export const H5 = styled.h5`
  color: white;
  font-size: 1.25rem;
  margin: 0 0 0.5rem 0;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;
`;

export const FlexBox = styled.div`
  flex: 1 1 0;
  text-align: center;
`;
