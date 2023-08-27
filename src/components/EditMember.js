import React, { Fragment, useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css'; 
import { useParams } from 'react-router-dom';

export const EditMember = () => {
    const navigate = useNavigate();
    const { members, editMember } = useContext(GlobalContext);
    const [selectedUser, setSelectedUser] = useState({
      id: null,
      name: '',
      designation: '',
    });
    
    const { id } = useParams(); // Use the useParams hook to get the id parameter
  
    useEffect(() => {
      const userId = parseInt(id);
      const selectedUser = members.find(user => user.id === userId);
      setSelectedUser(selectedUser);
      // eslint-disable-next-line
    }, [id]);
  
    const onSubmit = e => {
      e.preventDefault();
      editMember(selectedUser);
      navigate('/');
    };
  
    const handleOnChange = (userKey, value) =>
      setSelectedUser({ ...selectedUser, [userKey]: value });
  
    if (!selectedUser || !selectedUser.id) {
      return <div>No user found</div>;
    }
  
    return (
      <Fragment>
        <div className="form-container">
          <form onSubmit={onSubmit}>
            <div className="form-field">
              <label htmlFor="name">Name of member</label>
              <input
                className="input"
                value={selectedUser.name}
                onChange={e => handleOnChange('name', e.target.value)}
                type="text"
                placeholder="Enter name"
              />
            </div>
            <div className="form-field">
              <label htmlFor="designation">Designation</label>
              <input
                className="input"
                value={selectedUser.designation}
                onChange={e => handleOnChange('designation', e.target.value)}
                type="text"
                placeholder="Enter designation"
              />
            </div>
            <div className="button-container">
              <button className="edit-button" type="submit">
                Edit Employee
              </button>
            </div>
            <div className="text-center cancel-link">
              <Link to="/">Cancel</Link>
            </div>
          </form>
        </div>
      </Fragment>
    );
  };
  
  export default EditMember;