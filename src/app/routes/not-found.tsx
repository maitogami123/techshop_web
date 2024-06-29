import { Link } from '@/components/ui/link';

export const NotFoundRoute = () => {
    return (
        <div className="flex flex-col items-center justify-center font-semibold">
            <h1>404 - Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link to="/" replace>
                Go to Home
            </Link>
        </div>
    );
};
