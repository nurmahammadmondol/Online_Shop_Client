import Banner from './Banner/pages';
import PantsSection from './PantsSection/Pages';
import PunjabiSection from './PunjabiSection/Pages';
import TrendingCategories from './TrendingCategories/Pages';

const MainHome = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="my-10 ">
        <TrendingCategories></TrendingCategories>
      </div>
      <div className="my-10 ">
        <PunjabiSection></PunjabiSection>
      </div>
      <div className="my-10 ">
        <PantsSection></PantsSection>
      </div>
    </div>
  );
};

export default MainHome;
