import React from 'react';
import { Banner } from '../Banner';
import DarkMode from '../DarkMode/DarkMode';
import { Nav } from '../Nav';
import styles from './Layout.module.scss';

export function Layout({ children }) {
	return (
		<>
			<DarkMode />
			<Banner message={'Hello world'} />
			<Nav />
			<div className={styles.container}>
				<main className={styles.main}>{children}</main>
			</div>
			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer">
					Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
				</a>
			</footer>
		</>
	);
}
