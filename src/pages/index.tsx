import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx('hero--primary hero', styles.heroBanner)}>
			<div className="container">
				<Heading as="h1" className={styles.heroTitle}>
					{siteConfig.title}
				</Heading>
				<p className={styles.heroSubtitle}>
					Your media, unified. Movies, TV, live channels, and streaming — one app, one config, one container.
				</p>
				<div className={styles.buttons}>
					<Link
						className="button button--secondary button--lg"
						to="/docs/getting-started"
					>
						Get Started
					</Link>
					<Link
						className="button button--outline button--secondary button--lg"
						to="/deploy"
					>
						Deploy with Docker
					</Link>
				</div>
			</div>
		</header>
	);
}

function ProblemSection() {
	return (
		<section className={styles.section}>
			<div className={clsx('container', styles.narrow)}>
				<p className={styles.lead}>
					Managing media shouldn't require six apps, six configs, and six update cycles.
				</p>
			</div>
		</section>
	);
}

function FeaturesSection() {
	const features = [
		{
			title: 'One Database',
			description: 'Movies, series, subtitles, and configurations — all together.'
		},
		{
			title: 'One Interface',
			description: 'Browse, search, monitor, and manage everything from a single UI.'
		},
		{
			title: 'One Configuration',
			description: 'Set up indexers, download clients, and preferences once.'
		},
		{
			title: 'One Container',
			description: 'Deploy with Docker and start managing immediately.'
		}
	];

	return (
		<section className={styles.section}>
			<div className={clsx('container', styles.narrow)}>
				<Heading as="h2" className={styles.sectionTitle}>
					What You Get
				</Heading>
				<div className={styles.featureList}>
					{features.map((feature, idx) => (
						<div key={idx} className={styles.featureItem}>
							<Heading as="h3" className={styles.featureTitle}>
								{feature.title}
							</Heading>
							<p className={styles.featureDescription}>{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function StepsSection() {
	const steps = [
		{
			number: '01',
			title: 'Install with Docker',
			description: 'One command. One container. Done.'
		},
		{
			number: '02',
			title: 'Configure',
			description: 'Add your TMDB key and download clients.'
		},
		{
			number: '03',
			title: 'Add Media',
			description: 'Start building your library.'
		}
	];

	return (
		<section className={styles.section}>
			<div className={clsx('container', styles.narrow)}>
				<Heading as="h2" className={styles.sectionTitle}>
					How It Works
				</Heading>
				<div className={styles.stepsList}>
					{steps.map((step, idx) => (
						<div key={idx} className={styles.stepItem}>
							<span className={styles.stepNumber}>{step.number}</span>
							<div>
								<Heading as="h3" className={styles.stepTitle}>
									{step.title}
								</Heading>
								<p className={styles.stepDescription}>{step.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function TrustBar() {
	return (
		<section className={clsx(styles.section, styles.trustSection)}>
			<div className="container">
				<div className={styles.trustBar}>
					<span>Docker</span>
					<span className={styles.trustDivider}>·</span>
					<span>GitHub</span>
					<span className={styles.trustDivider}>·</span>
					<span>GPL-3.0</span>
					<span className={styles.trustDivider}>·</span>
					<span>Self-hosted</span>
				</div>
			</div>
		</section>
	);
}

function FooterCTA() {
	return (
		<section className={clsx(styles.section, styles.ctaSection)}>
			<div className={clsx('container', styles.narrow)}>
				<Heading as="h2" className={styles.ctaTitle}>
					Ready to unify your stack?
				</Heading>
				<div className={styles.buttons}>
					<Link
						className="button button--secondary button--lg"
						to="/docs/getting-started"
					>
						Get Started
					</Link>
				</div>
			</div>
		</section>
	);
}

export default function Home(): ReactNode {
	return (
		<Layout
			title="Documentation"
			description="Cinephage documentation — self-hosted media management that replaces Radarr, Sonarr, Prowlarr, Bazarr, Overseerr, and FlareSolverr in a single app."
		>
			<HomepageHeader />
			<main>
				<ProblemSection />
				<FeaturesSection />
				<StepsSection />
				<TrustBar />
				<FooterCTA />
			</main>
		</Layout>
	);
}
