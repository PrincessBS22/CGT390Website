import Form from "../components/form";
import Wrapper from "../components/wrapper";
import {Link} from "react-router-dom";

const FormPage = () => {
    return(
    <>
        <Wrapper>
            <h1>Submit a Website</h1>
        </Wrapper>
        <Wrapper>
            <Form/>
            <button className="home-home">
                <Link to="/">Back to home</Link>
            </button>
        </Wrapper>
    </>
    )
}

export default FormPage;