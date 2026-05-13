interface ReviewCardProps {
  rating: number;
  text: string;
  name: string;
  sourceLabel: string;
}

export function ReviewCard({ rating, text, name, sourceLabel }: ReviewCardProps) {
  const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);
  const hasText = text.trim().length > 0;
  const showSource = hasText && sourceLabel.trim().length > 0;

  return (
    <article className={`review-card${hasText ? '' : ' review-card--compact'}`}>
      <p className="review-card__stars" aria-label={`${rating} av 5 stjerner`}>
        {stars}
      </p>
      {hasText ? <p className="review-card__text">"{text}"</p> : null}
      <div className="review-card__meta">
        <p className="review-card__name">{name}</p>
        {showSource ? <p className="review-card__source">{sourceLabel}</p> : null}
      </div>
    </article>
  );
}
