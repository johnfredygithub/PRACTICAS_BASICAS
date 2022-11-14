import { toast } from 'react-toastify';
import { addProduct, updateProduct } from '@services/api/products';
import { useFormik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

export default function FormProduct({ setOpen, product, setReloadProduct }) {
  const formik = useFormik({
    initialValues: initialValues(product),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      product ? updateProducts(formData) : createProduct(formData);
    },
  });

  async function createProduct(formData) {
    //setLoading(true);
    const response = await addProduct(formData);
    if (!response) {
      toast.warning('ERROR AL CREAR PRODUCTO');
    } else {
      setOpen(false);
      toast.success('SE AGREGO EL PRODUCTO CORRECTAMENTE');
      formik.resetForm();
    }
    setReloadProduct(true);
    //setLoading(false);
  }

  async function updateProducts(formData) {
    //setLoading(true);
    const response = await updateProduct(product.id, formData);
    if (!response) {
      toast.warning('ERROR AL ACTUALIZAR PRODUCTO');
    } else {
      //setOpen(false);
      console.log('correcto');
      toast.success('SE ACTUALIZO EL PRODUCTO CORRECTAMENTE');
      formik.resetForm();
    }
    //setLoading(false);
  }

  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-1 md:gap-6">
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form method="POST" onSubmit={formik.handleSubmit}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                      title
                    </label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      error={formik.errors.title}
                      defaultValue={product?.title}
                      onChange={formik.handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="precio" className="block text-sm font-medium text-gray-700">
                      precio
                    </label>
                    <input
                      defaultValue={product?.price}
                      onChange={formik.handleChange}
                      type="number"
                      name="price"
                      id="price"
                      autoComplete="family-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">
                      descripcion
                    </label>
                    <input
                      defaultValue={product?.description}
                      onChange={formik.handleChange}
                      error={formik.errors.description}
                      type="text"
                      name="description"
                      id="description"
                      autoComplete="family-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="categoryId" className="block text-sm font-medium text-gray-700">
                      categoria
                    </label>
                    <select
                      defaultValue={product?.categoryId}
                      onChange={formik.handleChange}
                      error={formik.errors.categoryId}
                      type="number"
                      id="categoryId"
                      name="categoryId"
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    >
                      <option value={1}>clothes</option>
                      <option value={2}>Electronics</option>
                      <option value={3}>Furniture</option>
                      <option value={4}>Shoes</option>
                      <option value={5}>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Cover photo</label>
                  <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                    <div className="space-y-1 text-center">
                      <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>

                          <input defaultValue={product?.price} onChange={formik.handleChange} name="images[0]" id="file-upload" type="file" className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    {product ? 'ACTUALIZAR' : 'GUARDAR'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

async function initialValues(product) {
  return {
    title: product?.title || '',
    price: product?.price || 0,
    description: product?.description || '',
    categoryId: product?.categoryId || '',
    images: product?.images || [''],
  };
}

function validationSchema() {
  return {
    title: Yup.string(),
    price: Yup.number(),
    description: Yup.string(),
    categoryId: Yup.number(),
    //images:Yup.array().of(Yup.string())
  };
}
