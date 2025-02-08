// import { redirect } from 'next/navigation';
import dbConnect from '@/lib/dbConnect';
import React from 'react';
export const dynamic = "force-dynamic";

const ProductPage = async () => {
    const {NEXT_PUBLIC_SERVER_ADDRESS} = process.env;
    const res = await fetch(`${NEXT_PUBLIC_SERVER_ADDRESS}/api/items`)
    const data = await res.json();

    // const data = await dbConnect('menu').find().toArray();

    // if(data.length >4){
    //     redirect('/')
    // }
    return (
        <div>
            
            <div className='grid grid-cols-4 gap-4 mt-8'>
                {data?.map(singleData => <div key={singleData._id}>
                    <img src={singleData?.image} alt="" />
                    <h2>{singleData?.name}</h2>
                    <p>{singleData?.recipe}</p>
                    <p>{singleData?.category}</p>
                    <p>{singleData?.price}</p>
                    <p>{singleData?.productName}</p>
                </div>)}
            </div>
            {/* <p>{JSON.stringify(data)}</p> */}
        </div>
    );
};

export default ProductPage;