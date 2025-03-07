import "../styles/sites.css";
import PropTypes from 'prop-types';


const Sites = ({ image_url, company, dates, article, descriptions, linky }) => {
    return (
        <div className="card">
            <div className="card-img">
                {image_url ? <img src={image_url} alt={company} /> : <></>}
            </div>
            <div className="card-body">
                <a href={linky}><h2>{article}</h2>
                <h3>&emsp;&emsp;{company} {dates}</h3></a>
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