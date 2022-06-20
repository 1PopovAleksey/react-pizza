import React, {useEffect, useState, useContext} from 'react';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";

import {setCategoryId} from "../redux/slices/filterSlice";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination";

import {SearchContext} from "../App";

const Home = () => {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sort.sortProperty);

  const {searchValue} = useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  }

  useEffect(() => {
    setIsLoading(true);

    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = sortType.replace('-', '');
    const order = sortType.includes('-') ? 'asc' : 'desc';
    const search = searchValue ? `&search=${searchValue}` : '';

    axios.get(
      `https://62a2ee0621232ff9b2136737.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    ).then((res) => {
      setItems(res.data);
      setIsLoading(false)
    })
    window.scrollTo(0, 0);

  }, [categoryId, sortType, searchValue, currentPage]);

  const pizzas = items.filter(obj => {
    if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
      return true;
    }

    return false;
  }).map((obj) => (<PizzaBlock key={obj.id} {...obj}/>));
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index}/>);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={onClickCategory}/>
        <Sort/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading ? skeletons
          : pizzas}
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)}/>
    </div>
  )
}

export default Home;
