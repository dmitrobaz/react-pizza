import React from 'react';

import { Categories, PizzaBlock, Sort, Loaded, Button, BurgerButton, Cart } from '../componets';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';


const categories = [
    { name: 'Мясные', active: false },
    { name: 'Вегетарианская', active: true },
    { name: 'Гриль', active: false },
    { name: 'Острые', active: false },
    { name: 'Закрытые', active: false }]
const sortItem = [{ name: 'популярности', type: 'popular' }, { name: 'цене', type: 'price' }, { name: 'алфавиту', type: 'name' }]


const Main = () => {

    const items = useSelector(({ pizzas }) => pizzas.items)
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
    const { category, sortBy } = useSelector(({ filters }) => filters)
    const addedCartItems = useSelector(({ cart }) => cart.items)
    const [sideBar, setSideBar] = React.useState(false)

    React.useEffect(() => {
        dispatch(fetchPizzas(category, sortBy))
    }, [category, sortBy]);



    const dispatch = useDispatch()
    const onSelectItem = (index) => {
        dispatch(setCategory(index))
    }
    const onSelectSort = (type) => {
        dispatch(setSortBy(type))
    }
    const handleAddPizzaCart = (item) => {
        dispatch(addPizzaToCart(item))
    }
    const handleClickState = () => {
        console.log(sideBar)
        setSideBar(!sideBar)
    }

    return (
        <main className="content">
            <BurgerButton onClick={handleClickState} />
            <div id="mySidenav" className={sideBar ? "sidenav active" : "sidenav"}>
                <BurgerButton onClick={handleClickState} className='is-open' />
                <Categories activeCategory={category} onClickCategory={onSelectItem} items={categories} />
                <Sort activeSortType={sortBy} items={sortItem} onClickSortType={onSelectSort} className='side-bar' />

            </div>
            <div className="container sortcat">
                <Categories activeCategory={category} onClickCategory={onSelectItem} items={categories} />
                <Sort activeSortType={sortBy} items={sortItem} onClickSortType={onSelectSort} />
            </div>
            <div className="container">
                <div className="container__title">
                    <h2>Все пиццы</h2>
                </div>
            </div>
            <div className="container">
                <div className="content__items">
                    {isLoaded
                        ? items.map((obj) =>
                        (<PizzaBlock
                            key={obj.id}
                            onClickAddPizza={(obj) => handleAddPizzaCart(obj)}
                            addedCount={addedCartItems[obj.id] && addedCartItems[obj.id].items.length}
                            {...obj}
                        />))
                        : Array(12).fill(0).map((_, index) => <Loaded key={index} />)}
                </div>
            </div>
        </main>
    );
}




export default Main;
