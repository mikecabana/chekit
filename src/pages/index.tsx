import Head from 'next/head';

import data from '../../public/data.json';
import styles from '../styles/Home.module.scss';

import React from 'react';
import { Checklist, Layout } from '../components';

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>Chekit ✔</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Checklist items={data.checklist} tags={data.tags} />
		</Layout>
	);
}

export async function getServerSideProps(context) {
	return {
		props: {},
	};
}
