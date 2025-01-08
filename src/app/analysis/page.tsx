import Header from '../components/Header';
import NavBar from '../components/NavBar';

export default function Analysis() {
  return (
    <div>
      <Header
        title="성향 분석"
        showSearchIcon={true}
        showNotificationIcon={true}
      />
      <main>
        <h1 className="text-2xl font-bold">성향 분석</h1>
      </main>
      <NavBar />
    </div>
  );
}
