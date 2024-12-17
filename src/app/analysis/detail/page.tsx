import BackHeader from '../../components/BackHeader';
import PolarAreaChart from '../../components/PolarAreaChart';
import TextCard from '../../components/TextCard';

export default function Analysis() {
  return (
    <>
      <BackHeader title="성향분석 결과" />
      <main className="content px-5 py-2">
        <h1 className="text-[22px] font-medium text-[#343232] mb-[6px]">
          홍길동님의
          <br />
          성향 분석 결과예요
        </h1>
        <div className="flex gap-[10px] mb-5">
          <p className="text-[12px] font-medium text-[#4e4b4b]">분석일자</p>
          <p className="text-[12px] font-normal text-[#8f8a8a]">2024.11.07</p>
        </div>
        <PolarAreaChart />
        <h1 className="text-[18px] font-semibold text-[#343232] mb-5">
          결혼 준비를 정말 잘하고 계시네요!
        </h1>
        <TextCard
          category="재정 계획"
          description="잘하고 있는 부분은 계속해서 유지하고, 조금 부족한 부분은 서로 노력하면서 채워나가면 더욱 행복한 결혼 생활을 만들어 나갈 수 있을 거예요."
        />
        <TextCard
          category="의사소통"
          description="잘하고 있는 부분은 계속해서 유지하고, 조금 부족한 부분은 서로 노력하면서 채워나가면 더욱 행복한 결혼 생활을 만들어 나갈 수 있을 거예요."
        />
        <TextCard
          category="취미공유"
          description="잘하고 있는 부분은 계속해서 유지하고, 조금 부족한 부분은 서로 노력하면서 채워나가면 더욱 행복한 결혼 생활을 만들어 나갈 수 있을 거예요."
        />
        <TextCard
          category="가사 역할"
          description="잘하고 있는 부분은 계속해서 유지하고, 조금 부족한 부분은 서로 노력하면서 채워나가면 더욱 행복한 결혼 생활을 만들어 나갈 수 있을 거예요."
        />
        <TextCard
          category="가족 관계"
          description="잘하고 있는 부분은 계속해서 유지하고, 조금 부족한 부분은 서로 노력하면서 채워나가면 더욱 행복한 결혼 생활을 만들어 나갈 수 있을 거예요."
        />
      </main>
    </>
  );
}
