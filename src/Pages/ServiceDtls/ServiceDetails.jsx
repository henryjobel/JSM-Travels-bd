import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const bandsData = useLoaderData();
    const { id } = useParams();

    const selectedBand = bandsData.find(band => band.id === parseInt(id));

    if (!selectedBand) {
        return <div>Band not found</div>;
    }



    return (
        <div className='container mx-auto'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={selectedBand.image_url} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{selectedBand.title}</h2>
                    <p className='w-[400px]'>{selectedBand.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;