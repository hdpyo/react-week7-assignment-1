import { render } from '@testing-library/react';

import LogoutForm from './LogoutForm';

describe('LogoutForm', () => {
  it('render <LogoutForm /> ', () => {
    const { container } = render(<LogoutForm />);

    expect(container).toHaveTextContent('Log out');
  });
});
