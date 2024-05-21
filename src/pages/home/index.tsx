import Button from '../../ui/components/Button/Index';

const Home = () => {
    return (
        <Button
            type="button"
            buttonVariant="outlined"
            buttonStyled={{ color: 'primary', rounded: 'lg', size: 'xxl' }}
            title="Custom button"
        >
            I'm super
        </Button>
    );
};
export default Home;
