import Banner from './Banner/pages';
import TrendingCategories from './TrendingCategories/Pages';

const MainHome = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="my-10">
        <TrendingCategories></TrendingCategories>
      </div>
    </div>
  );
};

export default MainHome;
