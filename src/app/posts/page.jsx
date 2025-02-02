import Link from 'next/link';
import React from 'react';
import style from './post.module.css';

const Posts = async () => {
    const getPosts = async ()=>{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json();
        return data;
    }
    const posts = await getPosts();
    return (
        <div className='grid grid-cols-4 gap-6 mt-8'>
            {
                posts.map((singlePost) =>{
                   
                    return (
                        <div key={singlePost.id} className='border rounded-md p-4 test-purpose-css'>
                        <p className={`text-2xl font-bold ${style['post-title']}`}>{singlePost.title}</p>
                        <p className=''>{singlePost.body}</p>
                        <Link href={`/posts/${singlePost.id}`}><button className='btn bg-green-600 px-3 rounded-xl'>Details</button></Link>
                    </div>
                    )
                    
                })
            }
        </div>
    );
};

export default Posts;