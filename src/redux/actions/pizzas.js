import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchPizzas = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false));
  console.log('localdb');

  axios
    .get(
      `https://my-json-server.typicode.com/dmitrobaz/pizzadb/pizzas?${
        category !== null ? `category=${category}` : ''
      }&_sort=${sortBy}&_order=asc`,
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
  // axios.get(`http://localhost:3003/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy}&_order=asc`).then(({ data }) => {

  //     dispatch(setPizzas(data));
  // });
  // if (window.location.href === 'http://localhost:3001/') {
  //     axios.get(`http://localhost:3003/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy}&_order=asc`).then(({ data }) => {
  //         console.log('localdb');
  //         dispatch(setPizzas(data));
  //     });
  // } else {
  //     axios.get(`https://my-json-server.typicode.com/dmitrobaz/pizzadb/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy}&_order=asc`).then(({ data }) => {
  //         dispatch(setPizzas(data));
  //     });
  // }
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});
