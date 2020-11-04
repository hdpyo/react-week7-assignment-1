import React from 'react';

import { render } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  const handleChange = jest.fn();

  context('with type', () => {
    it('label과 input control을 생성합니다.', () => {
      const { container, queryByLabelText } = render(<TextField type="number" label="평점" name="score" onChange={handleChange} />);

      expect(queryByLabelText('평점')).not.toBeNull();
      expect(container).toContainHTML('type="number"');
    });
  });

  context('without type', () => {
    it('기본값으로 type이 text가 됩니다.', () => {
      const { container, queryByLabelText } = render(<TextField label="평점" name="score" onChange={handleChange} />);

      expect(queryByLabelText('평점')).not.toBeNull();
      expect(container).toContainHTML('type="text"');
    });
  });

  // it('score change 이벤트가 발생하면 handleChange가 호출된다.', () => {
  //   const { getByLabelText } = render(<TextField onChange={handleChange} />);

  //   fireEvent.change(getByLabelText('평점'), {
  //     target: { value: '5' },
  //   });

  //   expect(handleChange).toBeCalled();
  // });

  // it('description change 이벤트가 발생하면 dispatch가 호출된다.', () => {
  //   const { getByLabelText } = render(<TextField onChange={handleChange} />);

  //   fireEvent.change(getByLabelText('리뷰 내용'), {
  //     target: { value: '정말 최고 :)' },
  //   });

  //   expect(handleChange).toBeCalled();
  // });
});
