import React from 'react';

const ServiceDetailPage = ({params}) => {
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
      
    const id = params?.id;
    const singleData = data.find((d)=>d._id==id);
    if(singleData){
      return (
        <div>
            <h2>Services Page</h2>
            <p>ID: {id}</p>
            <p>{singleData.title}</p>
            <img src={singleData.image} alt="" />
        </div>
    );
    }else{
      return <><h2 className='text-center mt-6'>Not Found Data</h2></>
    }
    
};

export default ServiceDetailPage;