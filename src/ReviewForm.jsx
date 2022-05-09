import TextField from './TextField';

export default function ReviewForm({ fields, onChange, onSubmit }) {
  const { score, description } = fields;
  return (
    <>
      <TextField
        label="평점"
        type="number"
        name="score"
        value={score}
        onChange={onChange}
      />
      <TextField
        label="리뷰 내용"
        name="description"
        value={description}
        onChange={onChange}
      />
      <button
        type="button"
        onClick={onSubmit}
      >
        Send
      </button>
    </>
  );
}
