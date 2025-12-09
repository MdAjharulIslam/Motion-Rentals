import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CarCard from '../components/CarCard';
import { useAppContext } from '../context/AppContext';

const Cetagory = () => {
  const { car } = useParams();
  const { cars } = useAppContext();

  const filteredCars = cars.filter((item) =>
    item.category.toLowerCase().includes(car.toLowerCase())
  );
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const length = filteredCars.length
  return (
    length>0 ? <div className=''>
        <h1 className='sm:ml-10 md:ml-20 m-10'> {filteredCars.length} {car} Car Abailable</h1>
         <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-10">
      
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCars.map((car, index) => (
          <CarCard key={index} car={car} />
        ))}
      </div>

    </div>
    
    </div> :
    <h1 className="flex items-center justify-center h-screen/2 mt-20 text-3xl font-semibold text-gray-700">
  No {car} car available
</h1>

    
   
  );
}

export default Cetagory;
