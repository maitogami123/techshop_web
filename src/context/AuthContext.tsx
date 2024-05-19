import { createContext } from 'react';
export interface Auth {
    aud: string | null;
    mail: string | null;
    sub: string | null;
    iat: string | number | null;
    exp: string | number | null;
    isAuthenticated: boolean;
}
export interface LoginInfo {
    username: string;
    password: string;
}

export type AuthContextType = {
    auth: Auth;
    login: (loginInfo: LoginInfo) => void;
    checkSession: (callback?: () => void) => void;
    logout: () => void;
};
export const AuthContext = createContext<AuthContextType | null>(null);
