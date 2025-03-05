import "../styles/sites.css";
import PropTypes from 'prop-types';


const Sites = ({ image_url, company, dates, article, descriptions, linky }) => {
    return (
        <div className="card">
            <div className="card-img">
                {image_url ? <img src={image_url} alt={company} /> : <></>}
            </div>
            <div className="card-body">
                <h2>{company}</h2>
                <p>{dates}</p>
                <h3><a href={linky}>{article}</a></h3>
                <p>{descriptions}</p>
            </div>
        </div>
    );
};
Sites.propTypes = {
    image_url: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    article: PropTypes.string.isRequired,
    descriptions: PropTypes.string,
    linky: PropTypes.string.isRequired,
}

export default Sites;