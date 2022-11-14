import axios from 'axios';
import endPoints from '@services/api';
/////funcion agregar producto
const addProduct = async (body) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  try {
    const response = await axios.post(endPoints.products.addProduct, body, config);
    return response.data;
  } catch (err) {
    return console.error(err);
  }
};

/////funcion editar producto
const updateProduct = async (id, body) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  try {
    const response = await axios.put(endPoints.products.updateProducts(id), body, config);
    return response.data;
  } catch (err) {
    return console.error(err);
  }
};

/////funcion eliminar producto
const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(endPoints.products.deleteProducts(id));
    return response.data;
  } catch (err) {
    return error(err);
  }
};

export { addProduct, deleteProduct, updateProduct };
