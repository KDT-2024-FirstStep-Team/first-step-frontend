import styled from 'styled-components';

interface CommunityTabProps {
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}

const CommunityTab = ({ activeTab, setActiveTab }: CommunityTabProps) => {
  return (
    <TabContainer>
      <Tab $isActive={activeTab === 0} onClick={() => setActiveTab(0)}>
        <span>쀼의 생활</span>
        <div></div>
      </Tab>
      <Tab $isActive={activeTab === 1} onClick={() => setActiveTab(1)}>
        <span>쀼의 꿀팁</span>
        <div></div>
      </Tab>
    </TabContainer>
  );
};

const TabContainer = styled.div`
  width: 100%;
  height: 28px;
  padding: 0 20px;
  border-bottom: 0.5px solid var(--gr80);
  display: flex;
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

export default CommunityTab;
