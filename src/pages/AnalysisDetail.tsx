import BackHeader from '@/components/BackHeader';
import Graph from '@/components/Graph';

const AnalysisDetail = () => {
  return (
    <>
      <BackHeader title="성향분석 결과" />
      <main className="content">
        <Graph />
      </main>
    </>
  );
};

export default AnalysisDetail;
