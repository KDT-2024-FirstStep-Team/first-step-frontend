import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi
} from './ui/carousel';
import { useState, useEffect } from 'react';

const BestContentBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi | null>(null);

  // 캐러셀 API가 설정되면 슬라이드 선택 시마다 인덱스를 업데이트
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap()); // 현재 선택된 슬라이드의 인덱스를 가져옴
    };

    api.on('select', onSelect); // 슬라이드가 선택될 때마다 이벤트 발생
    return () => {
      api.off('select', onSelect); // 컴포넌트 언마운트 시 이벤트 리스너 제거
    };
  }, [api]);

  return (
    <div className="relative">
      <Carousel setApi={setApi}>
        <CarouselContent className="m-0">
          {contentItems.map((item) => (
            <StyledCarouselItem
              $backgroundImage="/images/best-content-bg.png"
              key={item.title}
            >
              <p>{item.title}</p>
              <StyledLink to={item.path}>지금 컨텐츠 보러가기 &gt;</StyledLink>
            </StyledCarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <StyledP>
        {currentIndex + 1} / {contentItems.length}
      </StyledP>
    </div>
  );
};

interface ContentItem {
  title: string;
  path: string;
}

const contentItems: ContentItem[] = [
  {
    title: '말 한마디에 천 냥 빚도 갚는다? 부부 갈등 해결의 비법!',
    path: '/community' // 게시글 아이디 있어야 할 듯
  },
  {
    title: '신혼집 정리의 기술, 공간은 좁아도 사랑은 넓어진다.',
    path: '/community' // 게시글 아이디 있어야 할 듯
  },
  {
    title: '서로의 사랑의 언어를 찾아라! 행복한 결혼의 시작',
    path: '/community' // 게시글 아이디 있어야 할 듯
  }
];

const StyledCarouselItem = styled(CarouselItem)<{ $backgroundImage: string }>`
  background-image: url(${(props) => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 200px;
  width: 100%;
  position: relative;

  p {
    font-size: 22px;
    font-weight: bold;
    color: #343232;
  }
`;

const StyledLink = styled(Link)`
  color: #8f8a8a;
  position: absolute;
  top: 46%;
`;

const StyledP = styled.p`
  background-color: rgba(53, 49, 53, 0.6);
  padding: 0.25rem 0.625rem;
  color: #ffffff;
  font-size: 11px;
  border-radius: 12px;
  position: absolute;
  right: 20px;
  bottom: 16px;
  width: 43px;
  text-align: center;
`;

export default BestContentBanner;
