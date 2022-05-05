import TextField from './TextField';

export default function ReviewForm({ onChange }) {
  return (
    <>
      <TextField
        label="평점"
        type="number"
        name="score"
        onChange={onChange}
      />
      <TextField
        label="리뷰 내용"
        name="description"
        onChange={onChange}
      />
      <button type="button">Send</button>
    </>
  );
}
