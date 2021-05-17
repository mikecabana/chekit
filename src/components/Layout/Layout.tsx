import React from 'react';
import { Banner } from '../Banner';
import { Nav } from '../Nav';
import styles from './Layout.module.scss';
import { Footer } from '../Footer';

export function Layout({ children }) {
	return (
		<>
			<div className="dark:bg-gray-900 flex flex-col justify-start" style={{ minHeight: '100vh' }}>
				<Banner message={'Welcome to Chekit ✔'} />
				<Nav />
				<main className="flex-1 relative">
					<div className="max-w-7xl mx-auto p-4">
						<div className="">{children}</div>
					</div>
				</main>
				<Footer />
			</div>
		</>
	);
}
