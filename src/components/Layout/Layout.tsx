import React from 'react';
import { Banner } from '../Banner';
import { Nav } from '../Nav';
import styles from './Layout.module.scss';
import { Footer } from '../Footer';

export function Layout({ children }) {
	return (
		<>
			<div className={`dark:bg-gray-900 ${styles.container}`}>
				<Banner message={'Welcome to Chekit ✔'} />
				<Nav />
				<main className={styles.main}>{children}</main>
				<Footer />
			</div>
		</>
	);
}
