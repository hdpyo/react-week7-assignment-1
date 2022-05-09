export default function TextField({
  label, type = 'text', name, value, onChange,
}) {
  const id = `input-${name}`;

  function handleChange(event) {
    const { target } = event;
    onChange({ name, value: target.value });
  }

  return (
    <div>
      <label htmlFor={id}>
        {label}
      </label>
      <input
        type={type || 'text'}
        name={name}
        value={value}
        id={id}
        placeholder={`${label}을 입력해주세요.`}
        onChange={handleChange}
      />
    </div>
  );
}
