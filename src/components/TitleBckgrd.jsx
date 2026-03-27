
import '../assets/scss/TitleBckgrd.scss';

function TitleBckgrd({ img, children }) {
    return (
        <div className="bckgrd">

            <img className='bckgrd__img' src={img} alt="" />


            {children}
        </div>
    );
}

export default TitleBckgrd;