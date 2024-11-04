import BackHeader from '@/components/BackHeader';
import BuyCard from '@/components/BuyCard';

const Buy = () => {
  return (
    <>
      <BackHeader title="하트 구매" />
      <BuyCard heart={5} amount={5000} />
    </>
  );
};

export default Buy;
