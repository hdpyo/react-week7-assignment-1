import { fireEvent, render } from '@testing-library/react';

import LogoutForm from './LogoutForm';

describe('LogoutForm', () => {
  it('render "Log out" button and listens event ', () => {
    const handleClickLogout = jest.fn();

    const { getByText } = render(<LogoutForm onClick={handleClickLogout} />);

    fireEvent.click(getByText('Log out'));

    expect(handleClickLogout).toBeCalled();
  });
});
