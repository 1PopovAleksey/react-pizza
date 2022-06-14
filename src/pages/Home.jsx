import React, {useEffect, useState} from 'react';

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";

const Home = () => {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: 'популярности', sortProperty: 'rating'
  });

  useEffect(() => {
    setIsLoading(true);

    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';


    fetch(`https://62a2ee0621232ff9b2136737.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  return (<div className="container">
    <div className="content__top">
      <Categories value={categoryId} onClickCategory={(id) => setCategoryId(id)}/>
      <Sort value={sortType} onClickSort={(type) => setSortType(type)}/>
    </div>
    <h2 className="content__title">Все пиццы</h2>
    <div className="content__items">
      {isLoading ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>) : items.map((obj) => (
        <PizzaBlock key={obj.id} {...obj}/>))}
    </div>
  </div>)
}

export default Home;
