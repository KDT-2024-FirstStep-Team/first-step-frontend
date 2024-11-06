import styled from 'styled-components';

interface HeartTabProps {
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}

const HeartTab = ({ activeTab, setActiveTab }: HeartTabProps) => {
  return (
    <TabContainer>
      <Tab $isActive={activeTab === 0} onClick={() => setActiveTab(0)}>
        <span>전체</span>
        <div></div>
      </Tab>
      <Tab $isActive={activeTab === 1} onClick={() => setActiveTab(1)}>
        <span>구매</span>
        <div></div>
      </Tab>
      <Tab $isActive={activeTab === 2} onClick={() => setActiveTab(2)}>
        <span>사용</span>
        <div></div>
      </Tab>
    </TabContainer>
  );
};

const TabContainer = styled.div`
  position: fixed;
  z-index: 1000;
  top: 110px;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  border-bottom: 0.5px solid var(--gr80);
  display: flex;
  background-color: var(--gr100);
`;

interface TabProps {
  $isActive: boolean;
}

const Tab = styled.div<TabProps>`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 18px;

  span {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.2px;
    color: ${({ $isActive }) => ($isActive ? 'var(--gr30)' : 'var(--gr60)')};
  }

  div {
    width: 100%;
    height: 2px;
    background-color: ${({ $isActive }) =>
      $isActive ? 'var(--gr20)' : 'var(--gr100)'};
  }
`;

export default HeartTab;
