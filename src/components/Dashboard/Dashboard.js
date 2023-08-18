import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PetCard from '../PetCard';

import * as PetService from '../../services/PetService';

const Dashboard = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        PetService.getAll()
            .then(result => { 
                console.log(result);
                setPets(result);
            });
    }, []);

    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>
            <ul className="other-pets-list">
                {pets.map((x) => (
                    <PetCard key={x._id} pet={x}/>
                ))}
            </ul>
            <p className="no-pets">No pets in the database!</p>
        </section>
    );
}

export default Dashboard;
