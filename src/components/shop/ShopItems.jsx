import { recipes } from "./data";
import Aos from "aos";
import SingleItem from "./SingleItem";

const ShopItems = () => {
  Aos.init();
  // console.log(isOpenDetail);
  const flexItems =
    "flex flex-col md:flex-row items-center justify-between gap-3";
  return (
    <div className={`p-5`}>
      <div className={flexItems}>
        <h2 className=" font-light"> Showing all 8 results</h2>
        <button className="px-5 py-2 font-semibold border-slate-300 border-[1px]  rounded">
          Default Sorting
        </button>
      </div>
      <div className="flex items-center justify-between gap-5 flex-wrap mt-5">
        {/* shop card start */}
        {recipes.map((recipe) => {
          return <SingleItem recipe={recipe}  key={recipe.id}/>;
        })}

        {/* shop card end  */}
      </div>
    </div>
  );
};

export default ShopItems;
