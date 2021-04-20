import React, { useCallback, useEffect } from 'react'
import { Categories, PizzaBlock, SortPopUp, PizzaLoadingBlock } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPizzas } from '../redux/actions/pizzas';

import { setCategory } from '../redux/actions/filters';

const categoryNames = [
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые'
]
const sortItems = [
{ name: 'популярности', type: 'popular'}, 
{ name: 'цене', type: 'price' },
{ name:  'алфавит', type: 'alphabet' }]

function Home() {

  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);

  useEffect(() => {


      dispatch(fetchPizzas());
  }, [])

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

    return (
        <div className="container">
          <div className="content__top">
            <Categories onClickItem={onSelectCategory} items={categoryNames} />
            <SortPopUp items={sortItems} />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              isLoaded ? items.map(obj => <PizzaBlock key={obj.id} isLoading={true} {...obj} />)
              : Array(12).fill(<PizzaLoadingBlock />)
            }
            
          </div>
        </div>
    )
}

export default Home
