import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

describe('RestaurantContainer', () => {
  const dispatch = jest.fn();

  function renderRestaurantContainer() {
    return render(<RestaurantContainer restaurantId="1" />);
  }

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurant: given.restaurant,
      reviewFields: {
        score: '',
        description: '',
      },
      accessToken: given.accessToken,
    }));
  });

  it('dispatches action', () => {
    renderRestaurantContainer();

    expect(dispatch).toBeCalled();
  });

  context('with logged-in', () => {
    given('accessToken', () => 'ACCESS_TOKEN');
    // TODO : accessToken 세팅

    context('with restaurant', () => {
      given('restaurant', () => ({
        id: 1,
        name: '마법사주방',
        address: '서울시 강남구',
        reviews: [
          {
            id: 1, name: '테스터', score: '1', description: '맛있어요',
          },
        ],
      }));

      it('renders name and address', () => {
        const { container } = renderRestaurantContainer();

        expect(container).toHaveTextContent('마법사주방');
        expect(container).toHaveTextContent('서울시');
      });

      it('renders reviews ', () => {
        const { container } = renderRestaurantContainer();

        expect(container).toHaveTextContent('맛있어요');
      });

      it('listens change events', () => {
        const { queryByLabelText, getByLabelText } = renderRestaurantContainer();

        expect(queryByLabelText('평점')).not.toBeNull();
        expect(queryByLabelText('리뷰 내용')).not.toBeNull();

        const controls = [
          { label: '평점', name: 'score', value: '5' },
          { label: '리뷰 내용', name: 'description', value: '맛있어요' },
        ];

        controls.forEach(({ label, name, value }) => {
          fireEvent.change(getByLabelText(label), { target: { value } });

          expect(dispatch).toBeCalledWith({
            type: 'updateReviewField',
            payload: { name, value },
          });
        });
      });

      it('renders "Send" button and listens event ', () => {
        const { getByText } = renderRestaurantContainer();

        fireEvent.click(getByText('Send'));

        // - 최초 RestaurantContainer 렌더링 시 useEffect 로 dispatch 가 한 번 실행된다.
        // - 따라서 "Send" 를 누르면 dispatch 가 총 2번 호출되는 것과 같다.
        expect(dispatch).toBeCalledTimes(2);
      });
    });

    context('without restaurant', () => {
      given('restaurant', () => null);

      it('renders loading', () => {
        const { container } = renderRestaurantContainer();

        expect(container).toHaveTextContent('Loading');
      });
    });
  });

  context('without logged-in', () => {
    it('renders no review write field', () => {
      const { queryByLabelText } = renderRestaurantContainer();

      expect(queryByLabelText('평점')).toBeNull();
      expect(queryByLabelText('리뷰 내용')).toBeNull();
    });
  });
});
