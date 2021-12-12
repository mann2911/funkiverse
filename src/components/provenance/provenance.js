import React from "react";
import {
  Container,
  Title,
  RecordHeader,
  Caption,
  RecordInfo,
  RecordInfoTitle,
  RecordInfoContent,
  RelevantInfo,
  InfoItem,
  DividerDiv,
  InfoLableDiv,
  FormulaDiv,
  ReInfoLabel,
  ReInfoValue,
  Pipe,
  TextArea,
  RecordInfoHeader,
  ProvTable,
  TableWrapper,
} from "./style";

import {
  finalHash,
  finalKey,
  contractAddress,
  hashRecords,
  hashString,
} from "./constants";
const Provenance = () => {
  return (
    <Container>
      <RecordHeader>
        <Title>FUNKI FOXES PROVENANCE RECORD</Title>
        <Caption>
          This page shows the provenance information concerning each Funki Fox
          which will ever exist. <br />
          <br />
          In essence, each Funki Fox image is hashed using SHA-256 algorithm. An
          integrated string is gotten through concatenating SHA-256 of each
          Funki Fox image in the specific order as enumerated below. The
          concluding proof is gotten through SHA-256 hashing of this combined
          string. <br />
          <br />
          This is the ultimate provenance record which is stored on the smart
          contract.
        </Caption>
      </RecordHeader>
      <DividerDiv />
      <RecordInfo>
        <RecordInfoTitle>VITAL DETAILS</RecordInfoTitle>
        <RecordInfoContent>
          <InfoLableDiv>
            Each Funki Fox token ID is allocated to an image depicting a
            specific Funki Fox from the initial sequence through the use of this
            formula:
          </InfoLableDiv>
          <FormulaDiv>
            (tokenId + startingIndex) % 12000 → Initial Sequence Index
          </FormulaDiv>
          <InfoLableDiv>Here's the info</InfoLableDiv>

          <RelevantInfo>
            <InfoItem>
              <ReInfoLabel>FINALIZED STARTING INDEX</ReInfoLabel>
              <Pipe>|</Pipe>
              <ReInfoValue>12000</ReInfoValue>
            </InfoItem>
            <InfoItem>
              <ReInfoLabel>FUNKI FOXES CONTRACT ADDRESS</ReInfoLabel>
              <Pipe>|</Pipe>
              <ReInfoValue>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={
                    "https://rinkeby.etherscan.io/address/" +
                    contractAddress +
                    "#code"
                  }
                >
                  {contractAddress}
                </a>
              </ReInfoValue>
            </InfoItem>
            <InfoItem>
              <ReInfoLabel>FINAL PROOF HASH</ReInfoLabel>
              <Pipe>|</Pipe>
              <ReInfoValue>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://ipfs.funkifoxes.com/ipfs/${finalKey}`}
                >
                  {finalHash}
                </a>
              </ReInfoValue>
            </InfoItem>
          </RelevantInfo>
        </RecordInfoContent>
      </RecordInfo>
      <DividerDiv />
      <RecordInfo>
        <RecordInfoTitle>CONCATENATED HASH STRING</RecordInfoTitle>

        <RecordInfoContent>
          <TextArea value={hashString} onChange={() => {}} />
        </RecordInfoContent>
      </RecordInfo>
      <DividerDiv />
      <RecordInfo>
        <RecordInfoTitle>PROVENANCE RECORD</RecordInfoTitle>

        <RecordInfoContent>
          <div>
            The table below lists the original index, assigned FUNKI FOX Token
            ID, SHA256 Hash output and IPFS link of each Funki Fox image.
          </div>
          <RecordInfoHeader>
            IINITIAL SEQUENCE INDEX | ASSIGNED FUNKI FOX TOKEN ID | SHA-256 HASH
            | IPFS HASH
          </RecordInfoHeader>
          <TableWrapper>
            <ProvTable>
              {hashRecords.map((r, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>&nbsp;&nbsp;|&nbsp;&nbsp;</td>
                  <td>{r.id}</td>
                  <td>&nbsp;&nbsp;|&nbsp;&nbsp;</td>
                  <td>{r.imageHash}</td>
                  <td>&nbsp;&nbsp;|&nbsp;&nbsp;</td>
                  <td>
                    <a
                      href={`https://ipfs.io/ipfs/${r.image}`}
                      style={{
                        color: "#bfc500",
                        textDecoration: "underline",
                      }}
                    >
                      {r.image}
                    </a>
                  </td>
                </tr>
              ))}
            </ProvTable>
          </TableWrapper>
        </RecordInfoContent>
      </RecordInfo>
    </Container>
  );
};

export default Provenance;
