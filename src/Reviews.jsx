export default function Reviews({ reviews }) {
  if (!reviews || !reviews.length) {
    return null;
  }

  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          <div>
            작성자 :
            {' '}
            {review.name}
          </div>
          <div>
            점수 :
            {' '}
            {review.score}
            점
          </div>
          <div>
            내용 :
            {' '}
            {review.description}
          </div>
        </li>
      ))}
    </ul>
  );
}
