const theMeal_BaseUrl = "www.themealdb.com/api/json/v1/1";
const Search_By_Name = `${theMeal_BaseUrl}/search.php?s=Arrabiata`;
const Search_By_FirstLetter = `${theMeal_BaseUrl}/search.php?f=a`;
const By_Id = `${theMeal_BaseUrl}/lookup.php?i=52772`;
const random_Single_Meal = `${theMeal_BaseUrl}/random.php`;
const all_Catogories = `${theMeal_BaseUrl}/categories.php;
`;
const by_Locations = `${theMeal_BaseUrl}/filter.php?a=Canadian`;

const Categories = `${theMeal_BaseUrl}/list.php?c=list`;
const Area = `${theMeal_BaseUrl}/list.php?a=list`;
const Ingredients = `${theMeal_BaseUrl}/list.php?i=list`;

export {
  theMeal_BaseUrl,
  Search_By_Name,
  Search_By_FirstLetter,
  By_Id,
  random_Single_Meal,
  all_Catogories,
};
