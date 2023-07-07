import Header from './components/Header/Header';
import Sqaures from './components/Squares/Squares';

export default function Home() {
  return (
    <main className="flex w-full">
      <Header />
      <div className="w-1/2">
        <Sqaures />
        <div className="bg-brown py-10 px-20 clear-both">
          <h4>...a freelance front end developer with high React skills...</h4>
        </div>
      </div>
    </main>
  );
}
