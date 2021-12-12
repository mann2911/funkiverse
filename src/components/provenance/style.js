import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  background-color: rgb(38, 38, 38);
  color: rgb(255, 255, 255);
`;

export const RecordHeader = styled.div`
  margin-top: 2rem;
  background-color: #3c3c3c;
  padding: 1rem 8rem 4rem 8rem;
  @media only screen and (max-width: 850px) {
    padding: 1rem;
  }
`;

export const Title = styled.div`
  text-align: center;
  font-size: 32px;
  font-weight: bold;
`;

export const DividerDiv = styled.div`
  margin-top: 2rem;
  border-bottom: 1px solid rgb(154, 138, 120);
`;

export const DoubleDividerDiv = styled.div`
  border-top: 3px solid rgb(154, 138, 120);
  margin: 4rem auto 0px;
`;

export const Caption = styled.div`
  margin-top: 1rem;
`;

export const RecordInfo = styled.div`
  margin-top: 2rem;
`;

export const SpinnerContainer = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RecordInfoTitle = styled.div`
  font-weight: bold;
`;

export const RecordInfoContent = styled.div`
  margin-top: 1rem;
  div.info-label {
    margin: 1rem 0;
  }
  div.formula {
    text-align: center;
    font-size: 14px;
  }

  textarea {
    width: 100%;
    height: 160px;
    font-size: 12px;
    background-color: black;
    color: white;
  }
`;

export const TableWrapper = styled.table`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ProvTable = styled.tbody`
  margin: 1rem;
  font-size: 12px;
    overflow-x: auto;
  tr td{
    text-align: center;
    margin:0.5;
    a.link:hover {
      color: white !important;
    }
  }
}`;

export const RecordInfoHeader = styled.div`
  margin-top: 2rem;
  margin-top: 2rem;
  text-align: center;
`;

export const InfoLableDiv = styled.div`
  margin: 1rem 0px;
`;

export const FormulaDiv = styled.div`
  text-align: center;
  font-size: 14px;
`;

export const RelevantInfo = styled.div``;

export const InfoItem = styled.div`
  display: flex;
  font-size: 12px;
  justify-content: center;
  @media only screen and (max-width: 720px) {
    margin-right: 8px;
    display: block;
    width: 100%;
  }
`;

export const ReInfoLabel = styled.div`
  flex: 1 1 0;
  text-align: right;
  margin-right: 8px;
  @media only screen and (max-width: 1200px) and (min-width: 720px) {
    flex: unset;
    width: 40%;
    text-align: right;
    margin-right: 8px;
    display: inline-block;
    flex-direction: row-reverse;
  }
  @media only screen and (max-width: 720px) {
    display: block;
    width: 100%;
    text-align: center;
    margin: 1rem 0 0 0;
  }
`;
export const TextArea = styled.textarea`
  padding: 0;
`;

export const ReInfoValue = styled.div`
  flex: 1 1 0;
  margin-left: 8px;
  @media only screen and (max-width: 1200px) and (min-width: 720px) {
    flex: unset;
    display: unset;
    margin-left: 8px;
    width: 100%;
  }
  @media only screen and (max-width: 720px) {
    display: block;
    text-align: center;
    width: 100%;
    word-break: break-all;
    margin: 0;
  }
`;
export const Pipe = styled.div`
  display: inline-block;
  @media only screen and (max-width: 720px) {
    display: none;
  }
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid #9a8a78;
  border-right: 2px solid #9a8a78;
  border-bottom: 2px solid #9a8a78;
  border-left: 4px solid black;
  background: transparent;
  width: ${(props) => (props.size === "small" ? "24px" : "48px")};
  height: ${(props) => (props.size === "small" ? "24px" : "48px")};
  border-radius: 50%;
`;
