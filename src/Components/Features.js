import React from "react";
import styled from "styled-components";
import SmallText from "./SmallText";

const Contenitore = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;

  @media (max-width: 768px) {
    margin: 5% 0;
    padding: 0;
  }
`;

const LR = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;


  @media (max-width: 768px) {
    flex-direction: column;

  }
`;

const RL = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row-reverse;


  @media (max-width: 768px) {
    flex-direction: column;

  }
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  width: 80%;
  padding: 12% 10%;
  max-height: 400;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  /* background-color: #f6f6f6; */

  @media (max-width: 768px) {
    width: 100%;
    padding: 12% 0;
    margin-bottom: 10%;
    overflow: hidden;
  }
`;

const Title = styled.div`
  text-align: center;
  font-family: var(--primary-font);
  color: var(--almost-black);
  font-size: var(--text-big);
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: var(--text-ratherbig-mobile);
  }
`;

const Text = styled.div`
  text-align: left;
  font-family: var(--primary-font);
  color: var(--almost-black);
  font-size: var(--text-prettysmall);
  font-weight: 300;
  margin-top: 30px;

  @media (max-width: 768px) {
    font-size: var(--text-medium-mobile);
  }
`;

const CryptoPortfolio = styled.div`
  width: 100%;
  height: 400px;
  padding: 0;
  margin: 0;
  background-image: url("../img/cryptofolio.jpg");
  -webkit-background-size: 100%;
  -moz-background-size: 100%;
  -o-background-size: 100%;
  background-size: 100%;
  background-position: left top;
  background-repeat: no-repeat;

  @media (max-width: 900px) {
    background-image: url("../img/cryptofolio-mobile.jpg");
    width: 100%;
    height: 400px;
    background-position: center;

  }

  @media (max-width: 768px) {
    background-image: url("../img/cryptofolio-mobile.jpg");
    width: 100%;
    height: 70vw;
    background-position: center;

  }
`;

const AWPCrypto = styled.div`
  width: 100%;
  height: 400px;
  padding: 0;
  margin: 0;
  background-image: url("../img/awpcrypto.jpg");
  -webkit-background-size: 100%;
  -moz-background-size: 100%;
  -o-background-size: 100%;
  background-size: 100%;
  background-position: right bottom;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    background-image: url("../img/awpcrypto-mobile.jpg");
    width: 100%;
    height: 70vw;
    background-position: center;
  }
`;

const Features = props => {
  return (
    <Contenitore>
      <section className="content">
      <LR>
        <Box>
          <AWPCrypto />
        </Box>
        <Box>
          <Content>
            <Title>AWP++</Title>
            <Text>
              Inspired by the world renowned All Weather Portfolio by Ray Dalio, our analysts put together the AWP++ allowing a balanced exposure to Stocks, Bonds, Commodities and Cryptos, for everyone to enjoy the peace of mind of a mid-risk investment Portfolio with no minumum.
            </Text>
          </Content>
        </Box>
      </LR>
      </section>
    </Contenitore>
  );
};

export default Features;
