import React, { Fragment, useState, useEffect } from 'react';
import Modal from '@common/Modal';
import { Menu, Transition } from '@headlessui/react';
import FormProduct from '@components/FormProduct';
import axios from 'axios';
import endPoints from '@services/api';
import { deleteProduct } from '@services/api/products';
import { toast } from 'react-toastify';
import { TiDelete, TiEdit } from 'react-icons/ti';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from 'react-data-table-component';
import Link from 'next/link';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
////COMPONENTE
const Products = () => {
  ///const router = useRouter();
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [reloadProduct, setReloadProduct] = useState(false);

  /////llenar product
  useEffect(() => {
    async function getProducts() {
      const response = await axios.get(endPoints.products.allProducts);
      setProducts(response.data);
    }
    getProducts();
    setReloadProduct(false);
  }, [reloadProduct]);

  /////delete product id
  const handleDelete = (id) => {
    deleteProduct(id)
      .then((value) => {
        console.log(value);
        toast.success('SE ELIMINO EL PRODUCTO CORRECTAMENTE');
      })
      .catch(() => {
        toast.error('NO SE PUDO ELIMINAR EL PRODUCTO CORRECTAMENTE');
      });
    setReloadProduct(true);
  };

  const columnas = [
    {
      name: 'id',
      cell: (row) => (
        <div className="flex-shrink-0 h-10 w-10">
          <img className="h-10 w-10 rounded-full" src={row.images[0]} alt="img" />
        </div>
      ),
      grow: 0,
    },
    {
      name: 'title',
      selector: 'title',
      sortable: true,
      grow: 0.5,
    },
    {
      name: 'price',
      selector: 'price',
      sortable: true,
      grow: 0,
    },
    {
      name: 'category',
      selector: 'category.name',
      sortable: true,
      grow: 0,
    },
    {
      name: 'action',
      cell: (row) => (
        <>
          <Link href={`edit/${row.id}`} className="btn btn-text-indigo-600 hover:text-indigo-900">
            <TiEdit style={{ width: '3em', height: '3em', cursor: 'pointer', color: 'green' }}></TiEdit>
          </Link>
          <TiDelete style={{ width: '3em', height: '3em', cursor: 'pointer', color: 'red' }} onClick={() => handleDelete(row.id)}></TiDelete>
        </>
      ),
      grow: 1,
    },
  ];

  const paginationOptions = {
    rowsPerPageText: 'filas por pagina',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
  };

  return (
    <>
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">LISTA PRODUCT</h2>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          <span className="sm:ml-3">
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => {
                setOpen(true);
              }}
            >
              ADD
            </button>
          </span>
        </div>
      </div>

      <Modal open={open} setOpen={setOpen}>
        {' '}
        <FormProduct setOpen={setOpen} setReloadProduct={setReloadProduct} />
      </Modal>
      {/* TABLA */}
      <div className="table-responsive">
        <DataTable columns={columnas} data={products} title="tabla" pagination paginationComponentOptions={paginationOptions} />
      </div>
    </>
  );
};

export default Products;
