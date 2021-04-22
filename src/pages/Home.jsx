import React, { useCallback, useEffect } from 'react'
import { Categories, PizzaBlock, SortPopUp, PizzaLoadingBlock } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPizzas } from '../redux/actions/pizzas';

import { setCategory, setSortBy } from '../redux/actions/filters';

const categoryNames = [
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые'
]
const sortItems = [
{ name: 'популярности', type: 'popular', order: 'desc'}, 
{ name: 'цене', type: 'price', order: 'desc' },
{ name:  'алфавит', type: 'name', order: 'asc' }]

function Home() {

  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);


  useEffect(() => {
      dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy])

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

    return (
        <div className="container">
          <div className="content__top">
            <Categories activeCategory={category} 
                        onClickCategory={onSelectCategory} 
                        items={categoryNames}
                         />
            <SortPopUp activeSortType={sortBy.type} 
                       items={sortItems}
                       onClickSortType={onSelectSortType} />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              isLoaded ? items.map(obj => <PizzaBlock key={obj.id} isLoading={true} {...obj} />)
              : Array(12)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)
            }
            
          </div>
        </div>
    )
}

export default Home
