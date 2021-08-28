import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useApollo } from '../lib/client';
import { ApolloProvider } from '@apollo/client';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  /*
    initialApolloState es la informacion traida de una consulta por apollo en el servidor con getStaticProps
    Aqui lo que hace es guardar el resultado de la consulta en cache
    Para que cuando se use useQuery con esa consulta los datos los traiga del cache por lo que no se hace la peticion (SSR)
  */
  const apolloClient = useApollo(pageProps.initialApolloState)
  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
export default MyApp
