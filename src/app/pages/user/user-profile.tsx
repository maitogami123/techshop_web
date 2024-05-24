import { useProfile } from '@/hooks';

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
            <h1>Welcome, {data?.username}!</h1>
            <p>Your email is {data?.accountDetail.email}.</p>
        </div>
    );
};

export default UserProfile;
