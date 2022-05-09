import { render } from '@testing-library/react';

import Reviews from './Reviews';

describe('Reviews', () => {
  it('renders names and descriptions of reviews', () => {
    const reviews = [
      {
        id: 1, name: '테스터', score: '1', description: '맛있어요',
      },
    ];

    const { container } = render(<Reviews reviews={reviews} />);

    expect(container).toHaveTextContent('테스터');
    expect(container).toHaveTextContent('맛있어요');
  });
});
