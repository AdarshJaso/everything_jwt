import { AuthState } from '../types/store';

export const getCurrentUserRole = (auth: AuthState): string => {
  if (auth.isAdmin) return 'Admin';
  if (auth.isUser) return 'User';
  return 'Guest';
};
