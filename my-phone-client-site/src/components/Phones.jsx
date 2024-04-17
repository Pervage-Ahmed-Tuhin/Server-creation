import { Link, useLoaderData } from "react-router-dom";


const Phones = () => {

    const phones = useLoaderData();
    console.log(phones);

    return (
        <div>
            <h1>All the Phones are here : {phones.length}</h1>
            {
                phones.map((phone, index) => <li key={index}><Link to={`/phone/${phone.id}`}>{phone.name}</Link></li>)
            }
        </div>
    );
};

export default Phones;