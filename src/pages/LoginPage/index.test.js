import { render, waitFor, screen } from 'test-utils';
import LoginPage from './index';

jest.mock('login', () => ({
    username: 'admin',
    password: 'admin',
}));

describe('Login', () => {
    it('renders', async () => {
        render(LoginPage);
        await waitFor(() => {
            expect(screen.getById('auth-container')).toBeVisible();
        });
    });
});
