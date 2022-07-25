import { render, waitFor, screen } from 'test-utils';

import App from './App';

describe('renders app', () => {
    it('renders', async () => {
        render(App);
        await waitFor(() => {
            expect(screen.getByTestId('app-container')).toBeVisible();
        });
    });
});
