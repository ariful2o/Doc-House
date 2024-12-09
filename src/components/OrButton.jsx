import PropTypes from 'prop-types';
const OrButton = ({ text }) => {
    return (<>
        <button className="rounded-xl px-10 py-3 text-xl bg-[#F7A582] text-white  text-[20px] font-bold leading-normal">
            {text}
        </button>
    </>
    );
};

OrButton.propTypes = {
    text: PropTypes.string.isRequired,
};

export default OrButton;