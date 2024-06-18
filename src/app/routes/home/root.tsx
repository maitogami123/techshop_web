import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { TbLoader } from 'react-icons/tb';
import { Outlet, useLocation } from 'react-router-dom';

export const AppRoot = () => {
    const location = useLocation();
    return (
        // <DashboardLayout>
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
        // </DashboardLayout>
    );
};
