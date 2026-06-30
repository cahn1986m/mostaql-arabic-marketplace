interface StarRatingProps {
  rating: number;
  interactive?: boolean;
}

export function StarRating({ rating, interactive = false }: StarRatingProps) {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div className="flex items-center gap-1 text-sm">
      {stars.map((star) => (
        <span key={star} className={star <= Math.round(rating / 20) ? 'text-gold' : 'text-border'}>
          ★
        </span>
      ))}
      <span className="text-muted">{rating.toFixed(1)}</span>
      {interactive && <span className="text-primary">(اختيار)</span>}
    </div>
  );
}
