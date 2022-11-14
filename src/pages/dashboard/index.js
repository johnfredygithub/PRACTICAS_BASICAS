import endPoints from '@services/api';
import useFetch from '@hooks/useFetch';
import { Chart } from '@common/Chart';

///////PAGINACION
const PRODUCT_LIMIT = 10;
const PRODUCT_OFFSET = 1;

export default function Dashboard() {
  const products = useFetch(endPoints.products.getProducts(PRODUCT_LIMIT, PRODUCT_OFFSET));
  const categoryName = products?.map((product) => product.category);
  const categoryCount = categoryName?.map((category) => category.name);

  const countOcurrences = (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});

  console.log(categoryName);
  console.log(categoryCount);

  const data = {
    datasets: [
      {
        label: 'categories',
        data: countOcurrences(categoryCount),
        borderWidth: 2,
        backgroundColor: ['#ffbb11', 'black', 'red', 'green', 'yellow'],
      },
    ],
  };
  return (
    <>
      <Chart className="mb-8 mt-2" chartData={data}></Chart>
    </>
  );
}
