import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Link from 'next/link';

export default function Home() {
	return (
		<div className='container'>
			<Head>
				<title>Kirk Koster</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<Header title='Welcome to my Website!' />
				<p className='description'>
					Oops! You've stumbled on my website as I am working on it! Come back
					soon to see all the changes!
				</p>
				<p>
					<Link href='/privacypolicy'>
						<a>For App Privacy Policy, click here</a>
					</Link>
				</p>
			</main>

			<Footer />
		</div>
	);
}
