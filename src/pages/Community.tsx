import CommunityCard from '@/components/CommunityCard';
import CommunityTab from '@/components/CommunityTab';
import Header from '@/components/Header';
import { useState, useEffect, useRef } from 'react';

const Community = () => {
  const [activeTab, setActiveTab] = useState<number>(() => {
    const savedTab = window.sessionStorage.getItem('activeTab');
    return savedTab ? parseInt(savedTab) : 0;
  });

  const mainRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // window 전역 객체 사용이 안되어서 React 엘리먼트에 이벤트를 걸기 위한 Ref 사용
    const mainElement = mainRef.current;

    // 스크롤 위치 복원, 세션스토리지에 저장한 스크롤 위치를 꺼내서 렌더링 시 해당 위치로 이동 시키는 기능
    const restoreScrollPosition = () => {
      if (mainElement) {
        const savedScrollTop = window.sessionStorage.getItem('scrollTop');
        if (savedScrollTop) {
          mainElement.scrollTo(0, parseInt(savedScrollTop));
        }
      }
    };

    // 컴포넌트 마운트 시 스크롤 위치 복원
    restoreScrollPosition();

    // 스크롤이 발생하면 현재 스크롤 위치를 세션 스토리지에 저장하는 함수
    const handleScroll = (event: Event) => {
      const target = event.target as HTMLElement;
      const scrollTop = target.scrollTop;
      window.sessionStorage.setItem('scrollTop', scrollTop.toString());
    };

    // html 요소가 렌더링이 되면 해당 요소에 스크롤 이벤트를 추가, 스크롤이 발생하는 것을 감지
    if (mainElement) {
      mainElement.addEventListener('scroll', handleScroll);
    }

    // 렌더링이 될 때마다 이벤트가 등록되므로 컴포넌트가 언마운트 되면 스크롤 이벤트를 제거하는 CleanUp 부분
    return () => {
      if (mainElement) {
        mainElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  // activeTab이 변경될 때마다 sessionStorage에 저장
  useEffect(() => {
    window.sessionStorage.setItem('activeTab', activeTab.toString());
  }, [activeTab]);

  return (
    <>
      <Header title="커뮤니티" showDropdownIcon={false} />

      {/* scroll 위치 계산을 위해 main  태그에 mainRef 걸어주기 */}
      <main className="content pt-10" ref={mainRef}>
        <CommunityTab activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 0 &&
          lifeData.map(
            ({
              postId,
              title,
              content,
              username,
              date,
              likes,
              comments,
              src
            }) => (
              <CommunityCard
                key={postId}
                postId={postId}
                title={title}
                content={content}
                username={username}
                date={date}
                likes={likes}
                comments={comments}
                src={src}
              />
            )
          )}
        {activeTab === 1 &&
          tipData.map(
            ({
              postId,
              title,
              content,
              username,
              date,
              likes,
              comments,
              src
            }) => (
              <CommunityCard
                key={postId}
                postId={postId}
                title={title}
                content={content}
                username={username}
                date={date}
                likes={likes}
                comments={comments}
                src={src}
              />
            )
          )}
      </main>
    </>
  );
};

interface CommunityData {
  postId: number;
  title: string;
  content: string;
  username: string;
  date: Date;
  likes: number;
  comments: number;
  src?: string;
}

const lifeData: CommunityData[] = [
  {
    postId: 0,
    title: '파혼할까 고민 중입니다',
    content:
      '안녕하세요. 이런 글을 올리게 될 줄은 몰랐는데, 요즘 정말 고민이 많아져서 여러분의 조언을 듣고 싶습니다. 결혼 준비를 하면서 생각하지도 못했던 문제들이 하나둘씩 쌓이기 시작했어요. 어떡하면 좋을까요?',
    username: '행복한 신부',
    date: new Date('2024-11-06'),
    likes: 30,
    comments: 10
  },
  {
    postId: 1,
    title: '다들 청첩장 어디서 하셨나요?',
    content:
      '저희 결혼 준비가 한창인데요, 청첩장 제작을 어디서 해야 할지 고민이 많아서요. 예산도 적당히 맞추면서도 예쁘고 고급스러운 청첩장을 만들고 싶은데, 추천해주실 만한 업체나 온라인 사이트 있을까요?',
    username: '웨딩피치 신부',
    date: new Date('2024-10-31'),
    likes: 2,
    comments: 13,
    src: '/images/card-banner-bg.png'
  },
  {
    postId: 2,
    title: '결혼 준비 스트레스',
    content: '결혼 준비가 생각보다 힘드네요.',
    username: '힘든 예비신랑',
    date: new Date('2024-10-15'),
    likes: 21,
    comments: 0
  },
  {
    postId: 3,
    title: '결혼식 축가 추천 부탁드립니다. 제목이 긴 예시입니다.',
    content:
      '결혼식에서 부를 축가를 아직 못 정했어요. 감동적이면서도 분위기를 살릴 수 있는 곡 추천해주시면 감사하겠습니다!',
    username: '음악 좋아하는 신랑',
    date: new Date('2024-10-14'),
    likes: 0,
    comments: 2
  },
  {
    postId: 4,
    title: '드디어 결혼까지 20일이 남았네요',
    content:
      '안녕하세요. 드디어 결혼식이 20일 앞으로 다가왔어요! 정말 꿈만 같은 기분이에요. 준비하면서 힘든 일도 많았지만, 이제 곧 평생 함께할 사람과 새로운 시작을 한다고 생각하니 설레고 기대되네요!',
    username: '드디어 장가간다',
    date: new Date('2024-08-28'),
    likes: 12,
    comments: 0,
    src: '/images/card-banner-bg.png'
  }
];

const tipData: CommunityData[] = [
  {
    postId: 0,
    title: '매일 밤, 잠 못드시나요?',
    content:
      '하루의 시작을 알리는 안부처럼 건네는 한마디죠. 그만큼 수면의 질은 우리의 삶에 중요한 요소랍니다. 반면 한국인의 평균 수면은 6.9시간으로 꽤 짧은 시간이라네요.',
    username: '홍길동 상담사',
    date: new Date('2024-11-05'),
    likes: 18,
    comments: 5,
    src: '/images/card-banner-bg.png'
  },
  {
    postId: 1,
    title: '스트레스를 줄이는 간단한 방법!',
    content: '깊게 숨을 들이마시고 천천히 내쉬는 호흡법을 시도해보세요.',
    username: '홍길순 상담사',
    date: new Date('2024-10-25'),
    likes: 12,
    comments: 3,
    src: '/images/card-banner-bg.png'
  },
  {
    postId: 2,
    title: '집중하기 힘든 나, 혹시 성인 ADHD인가요?',
    content: '매일 아침 물 한 잔으로 뇌를 깨워보세요.',
    username: '박영희 상담사',
    date: new Date('2024-10-20'),
    likes: 25,
    comments: 8
  },
  {
    postId: 3,
    title: '불면증에 좋은 차 추천',
    content: '카모마일 차를 마시면 편안한 수면에 도움이 됩니다.',
    username: '김철수 상담사',
    date: new Date('2024-10-18'),
    likes: 25,
    comments: 8
  },
  {
    postId: 4,
    title: '효율적인 시간 관리 방법, 이렇게 해보세요!',
    content:
      '시간 관리는 현대인에게 필수적인 스킬입니다. 우선 하루를 시작하기 전에 그 날 해야 할 일을 목록으로 정리해보세요.',
    username: '박영희 상담사',
    date: new Date('2024-10-20'),
    likes: 25,
    comments: 8,
    src: '/images/card-banner-bg.png'
  }
];

export default Community;
