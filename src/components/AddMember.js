 import React, { Fragment, useState, useContext } from 'react';
 import { GlobalContext } from '../context/GlobalState';
 import { useNavigate, Link } from 'react-router-dom';
 import '../App.css'; 

 export const AddMember = () => {
     const [name, setName] = useState('');
     const [designation, setDesignation] = useState('');
     const { addMember, members } = useContext(GlobalContext);
     const navigate = useNavigate();

     const onSubmit = e => {
         e.preventDefault();
         const newMember = {
             id: members.length + 1,
             name,
             designation
         }
         addMember(newMember);
         navigate("/"); 
     }
  return (
    <Fragment>
    <div className="form-container">
        <form onSubmit={onSubmit}>
            <div className="form-field">
                <label htmlFor="name">Name of member</label>
                <input
                    className="input"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    type="text"
                    placeholder="Enter name"
                />
            </div>
            <div className="form-field">
                <label htmlFor="designation">Designation</label>
                <input
                    className="input"
                    value={designation}
                    onChange={e => setDesignation(e.target.value)}
                    type="text"
                    placeholder="Enter designation"
                />
            </div>
            <div className="button-container">
                <button className="add-button" type="submit">Add Employee</button>
            </div>
            <div className="text-center cancel-link">
                <Link to="/">Cancel</Link>
            </div>
        </form>
    </div>
</Fragment>
);
};

export default AddMember;
