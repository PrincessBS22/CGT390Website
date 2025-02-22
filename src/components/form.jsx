import { useState } from 'react'

const Form = () => {
    const [data, setData] = useState({ company: "", date: "", article: "", description: "", linky: "", image: null });
    const [descLength, setDescLength] = useState(0);
    const [error, setError] = useState({ image: "", general: "" });
    const [submited, setSubmited] = useState(false);
    const [sucessM, setSucessM] = useState("");


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file.size > 2000000) {
            setError({ ...error, image: "Image must be less than 2MB" });
        }
        else {
            setError({ ...error, image: "" });
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmited(true);

        const formData = new FormData(e.target);
        const company = e.target.company.value;
        const date = e.target.date.value;
        const article = e.target.article.value;
        const linky = e.target.linky.value;
        const description = e.target.description.value;
        const image = e.target.image.files[0];
        formData.set("company", company.trim());
        formData.set("date", date.trim());
        formData.set("link", link.trim());
        formData.set("article", article.trim());
        formData.set("description", description.trim());
        // if (data.image) formData.set("image", image);
        //console.log(data.image+"test");
        try {
            const response = await fetch("https://web.ics.purdue.edu/~shaverb/personal-website/send-data.php", {
                method: "POST",
                body: formData,
            });
            const result = await response.json();
            if (result.sucess) {
                e.target.reset();
                setError({ image: "", general: "" });
                setTimeout(() => {
                    setSucessM("Data Submitted Sucessfully.");
                }, 2500);
            }
            else {
                setError({ image: "", general: result.message });
                setSucessM("");
            }
        }
        catch (error) {
            setError({ image: "", general: error });
        }
        finally {
            setSubmited(false);
        }
    }

    return (
        <form id="website-form" onSubmit={handleSubmit} className="profile-form">
            <input type="text" name="company" placeholder="Company" required />
            <input type="date" name="date" />
            <input type="text" name="article" placeholder="Article" required />
            <input type="url" name="linky" placeholder="Link" required />
            <textarea name="description" placeholder="Description" required maxLength="200" onChange={(e) => setDescLength(e.target.value.length)} /><p>{descLength}/200</p>
            <label htmlFor="image">Choose a profile picture:</label>
            <input type="file" id="image" name="image" accept="image/jpg, image/jpeg, image/png, image/gif" onChange={handleFileChange} />
            {error.image && <p>{error.image}</p>}
            {/* You might not believe this, but the web browser will auto disable a submit button IF a required element is not filled. :) */}
            <button type="submit">Submit</button>
            {error.general && <p>{error.general}</p>}
        </form>
    )
}

export default Form;