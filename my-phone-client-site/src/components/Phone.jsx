import { useLoaderData } from "react-router-dom";

const Phone = () => {
    const phone = useLoaderData();

    console.log(phone);
    return (
        <div>
            <h1>This is the single form</h1>
            <h2>Name:{phone.name}</h2>
            <img src={phone.image} alt="" />
        </div>
    );
};

export default Phone;