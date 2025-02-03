"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ['400'],
  subsets: ['latin']
})

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
        <div className={roboto.className}>
            <div className='text-center py-4 text-black'>
                <input value={search} onChange={(e)=> setSearch(e.target.value)} type="text" placeholder='find your meals' className='p-2 rounded-md'/>
            </div>
            <div className='grid grid-cols-4 gap-4 mt-8'>
            {/* meals {JSON.stringify(meals)} */}
            {
                meals.map((singleMeal)=> {
                    return (
                        <div key={singleMeal.idMeal} className='border rounded-md p-4'>
                            {/* <img src={singleMeal?.strMealThumb} alt="" /> */}
                            <Image src={singleMeal?.strMealThumb} width={641} height={641} alt={singleMeal?.strMeal}></Image>
                            <h3 className='text-2xl font-bold'>{singleMeal?.strMeal}</h3>
                            <p>{singleMeal?.strInstructions}</p>
                            <Link href={`/meals/${singleMeal?.idMeal}`}><button className='btn bg-green-600 px-3 rounded-xl'>Details</button></Link>
                        </div>
                    )
                } )
            }
        </div>
        </div>
    );
};

export default MealsPage;