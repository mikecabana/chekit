import Head from 'next/head';
import styles from '../styles/Home.module.scss';

import Image from 'next/image';
import React from 'react';
import { Layout } from '../components/Layout';
import H1 from '../components/Headers/H1';
import H3 from '../components/Headers/H3';
import H4 from '../components/Headers/H4';
import { Link } from 'react-bootstrap-icons';

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<H1>
				<div className="text-center">
					Welcome to{' '}
					<a href="https://nextjs.org" target="_blank">
						Next.js!
					</a>
				</div>
			</H1>

			{/* <div className={styles.hero}>
				<div className={styles.heroImage}>
					<Image
						src="https://picsum.photos/1080/200"
						alt="Hero"
						height={200}
						width={1080}
						layout="fixed"
						objectFit="cover"
					/>
				</div>
			</div> */}

			<H4>
				<div className="text-center">
					Get started by editing <code className={styles.code}>pages/index.tsx</code>
				</div>
			</H4>

			<div className="grid med:grid-cols-1 lg:grid-cols-2 gap-6">
				<a
					href="https://nextjs.org/docs"
					className="rounded-lg shadow-sm bg-white p-6 border border-gray-200 text-black hover:text-indigo-600 hover:no-underline hover:shadow-md">
					<H3>Documentation &rarr;</H3>
					<p>Find in-depth information about Next.js features and API.</p>
				</a>

				<a
					href="https://nextjs.org/learn"
					className="rounded-lg shadow-sm bg-white p-6 border border-gray-200 text-black hover:text-indigo-600 hover:no-underline hover:shadow-md">
					<H3>Learn &rarr;</H3>
					<p>Learn about Next.js in an interactive course with quizzes!</p>
				</a>

				<a
					href="https://github.com/vercel/next.js/tree/master/examples"
					className="rounded-lg shadow-sm bg-white p-6 border border-gray-200 text-black hover:text-indigo-600 hover:no-underline hover:shadow-md">
					<H3>Examples &rarr;</H3>
					<p>Discover and deploy boilerplate example Next.js projects.</p>
				</a>

				<a
					href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					className="rounded-lg shadow-sm bg-white p-6 border border-gray-200 text-black hover:text-indigo-600 hover:no-underline hover:shadow-md">
					<H3>Deploy &rarr;</H3>
					<p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
				</a>
			</div>
		</Layout>
	);
}
