import BackHeader from '@/components/BackHeader';
import BuyCard from '@/components/BuyCard';

const Buy = () => {
  return (
    <>
      <BackHeader title="하트 구매" />
      {heartPriceData.map(({ heart, amount }) => (
        <BuyCard key={heart} heart={heart} amount={amount} />
      ))}
    </>
  );
};

interface HeartPriceData {
  heart: number;
  amount: number;
}

const heartPriceData: HeartPriceData[] = [
  { heart: 5, amount: 5000 },
  { heart: 15, amount: 15000 },
  { heart: 30, amount: 30000 },
  { heart: 50, amount: 50000 }
];

export default Buy;
