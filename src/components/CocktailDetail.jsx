import PropTypes from 'prop-types';
import { useGetCocktailQuery } from '../api/cocktailsApi';

const CocktailDetail = ({ cocktailCode }) => {
  const { data: cocktail, error, isLoading } = useGetCocktailQuery(cocktailCode);
  
  if (isLoading) {
    return <div className="drinks">
      <h1>Loading...</h1>
    </div>;
  }

  if (error) {
    return <div className="drinks">
      <h1>Error</h1>
    </div>;
  }

  function getIngredientsAndMeasures (drink) {
    let i = 1;
    const ingredients = [];
    const measures = [];
    while (drink['strIngredient' + i] !== null) {
      measures.push({
        key: 'strMeasure' + i,
        value: drink['strMeasure' + i]
      })
      ingredients.push({
        key: 'strIngredient' + i,
        value: drink['strIngredient' + i]
      })
      i++;
    }
    return [...measures, ...ingredients];
  }

  return (
    <div className="drinks">
      {(cocktail?.drinks ?? []).map((drink) => (
        <div key={drink.idDrink} className="cocktail-detail">
          <img src={drink.strDrinkThumb} loading="lazy" width="300" height="300"/>
          <h2>{drink.strDrink}</h2>
          <ul>
            <li>{drink.strCategory}</li>
            <li>{drink.strAlcoholic}</li>
            <li>{drink.strGlass}</li>
          </ul>
          <h3>Instructions:</h3>
          <p>{drink.strInstructions}</p>
          <h3 style={{clear: 'right'}}>List of ingredients:</h3>
          <ul className="ingredients-and-measures">
            {getIngredientsAndMeasures(drink).map((ingredientOrMeasure) => <li key={ingredientOrMeasure.key}>{ingredientOrMeasure.value}</li>)}
          </ul>
        </div>
      ))}
    </div>
  )
};

CocktailDetail.propTypes = {
  cocktailCode: PropTypes.string
}

export default CocktailDetail;
