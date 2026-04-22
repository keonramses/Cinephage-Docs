import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

interface FeatureItem {
	title: string;
	description: string;
	icon: string;
}

const FeatureList: FeatureItem[] = [
	{
		title: 'Movies',
		description: 'Built-in library with TMDB integration and automatic metadata matching.',
		icon: '🎬'
	},
	{
		title: 'TV Shows',
		description: 'Episode tracking, season monitoring, and automated downloads.',
		icon: '📺'
	},
	{
		title: 'Indexers',
		description: 'YAML-based definitions with 15+ sources — torrent, usenet, and streaming.',
		icon: '🔍'
	},
	{
		title: 'Subtitles',
		description: '11 providers with native sync engine and multi-language support.',
		icon: '📝'
	},
	{
		title: 'Streaming',
		description: 'Direct streaming and NZB playback without downloading.',
		icon: '▶️'
	},
	{
		title: 'Live TV',
		description: 'IPTV management with EPG and channel lineups.',
		icon: '📡'
	}
];

function Feature({ title, description, icon }: FeatureItem) {
	return (
		<div className={clsx('col col--4', styles.feature)}>
			<div className={styles.featureCard}>
				<div className={styles.featureIcon}>{icon}</div>
				<Heading as="h3">{title}</Heading>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures(): ReactNode {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
