import { Card } from './Card'

interface Article {
	title: string
	description: string
	author: string
	date: string
}

export interface ArticleWithSlug extends Article {
	slug: string
}

function formatDate(dateString: string) {
	return new Date(`${dateString}T00:00:00Z`).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		timeZone: 'UTC'
	})
}

function Article({ article }: { article: ArticleWithSlug }) {
	return (
		<Card as="article">
			<Card.Title href={`/articles/${article.slug}`}>{article.title}</Card.Title>
			<Card.Eyebrow as="time" dateTime={article.date} decorate>
				{formatDate(article.date)}
			</Card.Eyebrow>
			<Card.Description>{article.description}</Card.Description>
			<Card.Cta>Read article</Card.Cta>
		</Card>
	)
}
