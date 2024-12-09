import Group1 from '../../../assets/icons/Group 1.svg'
const Navbar = () => {
    return (
        <div className="navbar bg-[#07332F] text-white pt-8">
            <div className="flex-1">
                <img src={Group1} alt="Doc House icon" />
                <a className="btn btn-ghost text-xl"><span className='text-[#F7A582]'>Doc</span> House</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">

                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Appointment</a></li>
                    <li><a>Login</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;