import { fireEvent, render } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  function renderReviewForm() {
    return render((
      <ReviewForm
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    ));
  }

  beforeEach(() => {
    handleChange.mockClear();
    handleSubmit.mockClear();
  });

  it('renders review write fields ', () => {
    const { container, queryByLabelText } = renderReviewForm();

    expect(container).toHaveTextContent('평점');
    expect(container).toHaveTextContent('리뷰 내용');

    expect(queryByLabelText('평점')).not.toBeNull();
    expect(queryByLabelText('리뷰 내용')).not.toBeNull();
  });

  it('listens input change event', () => {
    const { getByLabelText } = renderReviewForm();

    const controls = [
      { label: '평점', name: 'score', value: '5' },
      { label: '리뷰 내용', name: 'description', value: '맛있어요' },
    ];

    controls.forEach(({ label, name, value }) => {
      fireEvent.change(getByLabelText(label), { target: { value } });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('renders "Send" button and button listens click event', () => {
    const { queryByText } = renderReviewForm();

    expect(queryByText('Send')).not.toBeNull();

    fireEvent.click(queryByText('Send'));
    expect(handleSubmit).toBeCalled();
  });
});
