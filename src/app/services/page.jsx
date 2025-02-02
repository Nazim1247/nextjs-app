import Link from 'next/link';
import React from 'react';

const ServicesPage = () => {
    const data = [
        {
          "_id": "5023857-4502-6",
          "title": "Exploring the Future of AI in Healthcare",
          "image": "https://th.bing.com/th/id/OIP.nyLAzWYdvc-wb9ntq1cU7QHaHa?rs=1&pid=ImgDetMain"
        },
        {
          "_id": "904520-76001754762",
          "title": "Top 10 Travel Destinations for 2025",
          "image": "https://th.bing.com/th/id/OIP.xsfn6y54kGo1GmWECZicegHaEJ?w=626&h=351&rs=1&pid=ImgDetMain"
        },
        {
          "_id": "27547069185-175",
          "title": "The Rise of Electric Vehicles",
          "image": "https://th.bing.com/th/id/OIP.cawWgx4H0UmworQRWHl1FwHaEJ?w=626&h=351&rs=1&pid=ImgDetMain"
        },
      ]
    return (
        <div>
            <h2 className='font-bold text-3xl'>Services page</h2> 
            {data.map((d)=>{
                return (
                    <div className='space-y-4'>
                        <Link href={`/services/${d._id}`}>
                        <img src={d.image} alt="" />
                        </Link>
                    </div>
                )
            })}
        </div>
    );
};

export default ServicesPage;