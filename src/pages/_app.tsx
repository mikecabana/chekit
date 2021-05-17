import type { AppProps, NextWebVitalsMetric /*, AppContext */ } from 'next/app';

import { ThemeProvider } from 'next-themes';
import { Provider } from 'next-auth/client';

import '../styles/globals.scss';

export function reportWebVitals(metric: NextWebVitalsMetric) {
	if (process.env.NODE_ENV !== 'production') {
		console.log(metric);
	}
}

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider attribute="class">
			<Provider session={pageProps.session}>
				<Component {...pageProps} />
			</Provider>
		</ThemeProvider>
	);
}

export default MyApp;
