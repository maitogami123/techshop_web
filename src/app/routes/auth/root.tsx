import AuthLayout from '@/components/layouts/auth-layout';
import { FunctionComponent, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { TbLoader } from 'react-icons/tb';
import { Outlet } from 'react-router-dom';

interface AuthRootProps {}

const AuthRoot: FunctionComponent<AuthRootProps> = () => {
    return (
        <AuthLayout>
            <Suspense
                fallback={
                    <div className="flex size-full items-center justify-center">
                        <TbLoader className="animate-spin" size={25} />
                    </div>
                }
            >
                <ErrorBoundary
                    key={location.pathname}
                    fallback={<div>Something went wrong!</div>}
                >
                    <Outlet />
                </ErrorBoundary>
            </Suspense>
        </AuthLayout>
    );
};

export default AuthRoot;
