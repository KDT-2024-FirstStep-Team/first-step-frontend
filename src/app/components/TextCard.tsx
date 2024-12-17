'use client';

import styled from 'styled-components';

interface TextCardProps {
  category: string;
  description: string;
}

const TextCard = ({ category, description }: TextCardProps) => {
  return (
    <CardContainer>
      <CategoryText>{category}</CategoryText>
      <DescriptionText>{description}</DescriptionText>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const CategoryText = styled.h1`
  font-size: 16px;
  font-weight: 600;
  color: var(--gr30);
`;
const DescriptionText = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: var(--gr40);
`;

export default TextCard;
