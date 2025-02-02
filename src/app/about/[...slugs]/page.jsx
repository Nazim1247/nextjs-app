import React from 'react';

const AboutSlugPage = async ({params}) => {
    const p = await params;
    console.log(p)
    return (
        <div>
            AboutSlugPage
        </div>
    );
};

export default AboutSlugPage;