import MainLayout from '@layout/mainLayout';
import { ProviderAuth } from '@hooks/useAuth';
import '@styles/tailwind.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ProviderAuth>
        <MainLayout>
          <Component {...pageProps} />
          <ToastContainer position="bottom-center" autoClose={5000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss={false} draggable pauseOnHover theme="dark"></ToastContainer>
        </MainLayout>
      </ProviderAuth>
    </>
  );
}

export default MyApp;
