import Button from '../ui/Button/Index';

export const MainErrorFallBack = () => {
    return (
        <div
            className="flex h-screen w-screen flex-col items-center justify-center text-red-500"
            role="alert"
        >
            <h2 className="text-lg font-semibold">
                Ooops, something went wrong :(
            </h2>
            <Button
                className="mt-4"
                onClick={() => window.location.assign(window.location.origin)}
            ></Button>
        </div>
    );
};