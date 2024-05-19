import { useProfile } from '@/hooks/use-profiles';

const UserProfile = () => {
    const { data, isLoading, error } = useProfile();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Welcome, {data?.name}!</h1>
            <p>Your email is {data?.email}.</p>
        </div>
    );
};

export default UserProfile;
