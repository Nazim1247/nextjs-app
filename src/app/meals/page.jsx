"use client";
import React, { useEffect, useState } from 'react';

const MealsPage = () => {
    const [meals,setMeals]=useState([]);
    const [search,setSearch]=useState('');

    const fetchMeals = async ()=>{
        try{
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            const data = await res.json();
            setMeals(data?.meals) || [];
            return data.meals;
        }catch(error){
            console.log(error);
            return [];
        }
    }
    useEffect(()=>{
        fetchMeals();
    },[search])

    return (
        <div>
            <div className='text-center py-4 text-black'>
                <input value={search} onChange={(e)=> setSearch(e.target.value)} type="text" placeholder='find your meals' className='p-2 rounded-md'/>
            </div>
            <div className='grid grid-cols-4 gap-4 mt-8'>
            {/* meals {JSON.stringify(meals)} */}
            {
                meals.map((singleMeal)=> {
                    return (
                        <div className='border rounded-md p-4'>
                            <h3>{singleMeal?.strMeal}</h3>
                            <p>{singleMeal?.strInstructions}</p>
                        </div>
                    )
                } )
            }
        </div>
        </div>
    );
};

export default MealsPage;