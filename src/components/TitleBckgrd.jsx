
import '../assets/scss/TitleBckgrd.scss';

function TitleBckgrd({ img, children }) {
    return (
        <div className="bckgrd">

            <img className='bckgrd__img' src={img} alt="" />


            <h1 className="bckgrd__img--title">{children}</h1>
        </div>
    );
}

export default TitleBckgrd;