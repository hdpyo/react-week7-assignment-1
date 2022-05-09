export default function Reviews({ reviews }) {
  if (!reviews || !reviews.length) {
    return null;
  }

  return (
    <>
      {reviews.map((review) => (
        <div key={review.id}>
          {review.name}
          |
          {review.description}
        </div>
      ))}
    </>
  );
}
