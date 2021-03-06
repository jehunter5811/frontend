import React from "react";
import styled from "styled-components";
import TransactionItem from "./TransactionItem";
import { useWeb3React } from "../hooks";
import { useUniswapTokensBought } from "../contexts/UniswapActions";
import { AWP_ADDRESS, AWP_EXCHANGE } from "../constants";
import ConnectWalletButton from "./ConnectWalletButton";

const GreyBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  font-family: var(--secondary-font);
  background-color: #f6f6f6;

  @media (max-width: 768px) {
  }
`;

const Title = styled.div`
  text-align: center;
  font-family: var(--primary-font);
  color: var(--almost-black);
  font-size: var(--text-big);
  font-weight: 700;
  margin: 5% 0;

  @media (max-width: 768px) {
    font-size: var(--text-ratherbig-mobile);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: var(--secondary-font);

  @media (max-width: 768px) {
    padding: 0 0 10% 0;
  }
`;

const TransactionsTable = props => {

  const { account } = useWeb3React();

  const tokensBought = useUniswapTokensBought(account, AWP_ADDRESS, AWP_EXCHANGE);

  // console.log(tokensBought);

  return (
    <>
    {tokensBought ? (
    <GreyBox>
      <section className="content">
      <Title>Transaction List</Title>
      <Container>
        
          {tokensBought ? Object.keys(tokensBought).reverse().map((index, key) => {
            const transaction = tokensBought[index];
            
            return(
              <TransactionItem
                key={key}
                link="#"
                bg="#2db400"
                color="var(--white)"
                TransactionHash={transaction.transactionHash}
                TransactionDate="1/13/2020 at 13.45"
                TransactionName="Bought AWP Token"
                TokenAmount={transaction.amount}
                DAIAmount={transaction.inputAmount}
                TransactionState="Confirmed"
                TransactionETHValue="0.00002"
              />
            )
          }
            
          ) : 
            <>
              To view transactions please connect your wallet.
              <ConnectWalletButton></ConnectWalletButton>
            </>
          }
          
        </Container>
      </section>
    </GreyBox>)
    : null}
    </>
  );
};

export default TransactionsTable;
