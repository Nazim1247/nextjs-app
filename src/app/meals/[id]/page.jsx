import React from 'react';

const fetchSingleMeal = async (id)=>{
    try{
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        const data = await res.json();
        // setMeals(data?.meals) || [];
        return data.meals;
    }catch(error){
        console.log(error);
        return [];
    }
}

const SingleMealPage = async ({params}) => {
    const p = await params;
    // console.log(p.id)
    const [singleMeal] = await fetchSingleMeal(p?.id)
    // console.log(singleMeal)
    return (
        <div>
            {/* singleMeal: {JSON.stringify(singleMeal)} */}
            
            <img src={singleMeal?.strMealThumb} alt="" />
            <h3 className='text-2xl font-bold'>{singleMeal?.strMeal}</h3>
            <p>{singleMeal?.strInstructions}</p>
        </div>
    );
};

export default SingleMealPage;