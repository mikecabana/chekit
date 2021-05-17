import Head from 'next/head';
import React from 'react';
import { Layout } from '../components/Layout';

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>Docs</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				<h2>Docs</h2>
			</div>
		</Layout>
	);
}
