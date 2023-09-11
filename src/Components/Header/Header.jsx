import profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <div className='flex justify-between items-center w-11/12 p-4 mx-auto border-b-2'>
            <h1 className='text-5xl font-bold p-2'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;