import { QueryClientProvider, QueryClient } from 'react-query';
import { SessionProvider } from 'next-auth/react';
import { Global } from '@emotion/react';
import { globalStyles } from '../styles/globals';

const client = new QueryClient();

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Global styles={globalStyles} />
			<SessionProvider session={pageProps.session}>
				<QueryClientProvider client={client}>
					<Component {...pageProps} />
				</QueryClientProvider>
			</SessionProvider>
		</>
	);
}

export default MyApp;
