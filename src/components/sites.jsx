import Wrapper from "./components/wrapper";
import "../styles/sites.css";
import PropTypes from 'prop-types';


const Sites = ({image_url, company, date, article, desc, linky}) => {
    return(
        <div className="card">
            <div className="card-img">
                <img src={image_url} alt={company}/>
            </div>
            <div className="card-body">
                <h2>{company}</h2>
                <p>{date}</p>
                <h3><a href={linky}>{article}</a></h3>
                <p>{desc}</p>
            </div>
        </div>
    );
};
Sites.propTypes = {
    image_url: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    article: PropTypes.string.isRequired,
    desc: PropTypes.string,
    linky: PropTypes.string.isRequired,
}

export default Sites;