import Header from '../components/Header';

export default function Analysis() {
  return (
    <div>
      <Header
        title="성향분석"
        showSearchIcon={true}
        showNotificationIcon={true}
      />
      <main>
        <h1 className="text-2xl font-bold">성향분석</h1>
      </main>
    </div>
  );
}
