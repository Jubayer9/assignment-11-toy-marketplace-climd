import { useEffect, useState } from 'react';

import 'react-tabs/style/react-tabs.css';
import TabCard from './TabCard';


const TabBar = () => {
  const [categories, SetCategories] = useState([]);
  useEffect(() => {
fetch('http://localhost:5000/category')
.then(res=>res.json())
.then(data=>SetCategories(data));
  }, [])
  return (
   <div>
   {
    categories.map(category =><TabCard
    key={category._id}
    category={category}
    ></TabCard>)
   }

   </div>
  );
};

export default TabBar;