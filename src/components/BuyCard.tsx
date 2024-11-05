import styled from 'styled-components';

interface BuyCardProps {
  heart: number;
  amount: number;
}

const BuyCard = ({ heart, amount }: BuyCardProps) => {
  return (
    <CardContainer>
      <LeftContainer>
        <HeartContainer>
          <HeartIcon src="/icons/heart.svg" alt="Heart"></HeartIcon>
          <Heart>하트 {heart}개</Heart>
        </HeartContainer>
        <Amount>{amount.toLocaleString()}원</Amount>
      </LeftContainer>
      <ChevronIcon src="/icons/chevron-right.svg" alt="Right"></ChevronIcon>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  height: 80px;
  width: 90%;
  margin: 12px auto 0px auto;
  padding: 15px;
  background-color: var(--gr100);
  border: 0.75px solid var(--gr70);
  border-radius: 8px;
  display: flex;
  align-items: center;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const HeartContainer = styled.div`
  background-color: var(--pr40);
  border-radius: 4px;
  width: fit-content;
  height: 19px;
  padding: 4px 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
`;

const HeartIcon = styled.img`
  width: 9px;
  height: auto;
`;

const ChevronIcon = styled.img`
  width: 20px;
  height: auto;

  margin-left: auto;
`;

const Heart = styled.p`
  color: var(--pr10);
  font-weight: 500;
  font-size: 11px;
`;

const Amount = styled.span`
  color: var(--gr30);
  font-weight: 500;
  font-size: 20px;
`;

export default BuyCard;
