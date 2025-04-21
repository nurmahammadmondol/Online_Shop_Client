import Banner from './Banner/pages';
import PantsSection from './PantsSection/Pages';
import PunjabiSection from './PunjabiSection/Pages';
import SportsItemsSection from './SportsItems/Pages';
import T_shirtSection from './T-shirtSection/Pages';
import TrendingCategories from './TrendingCategories/Pages';

const MainHome = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="my-10 ">
        <TrendingCategories></TrendingCategories>
      </div>

      <div className="my-20">
        <h2 className="text-center text-2xl md:text-3xl font-bold ">
          Boy's Fashion
        </h2>

        <div className="mb-10 ">
          <PunjabiSection></PunjabiSection>
        </div>
        <div className="my-10 ">
          <T_shirtSection></T_shirtSection>
        </div>
        <div className="my-10 ">
          <PantsSection></PantsSection>
        </div>

        <div className="my-10 ">
          <SportsItemsSection></SportsItemsSection>
        </div>
      </div>
    </div>
  );
};

export default MainHome;
