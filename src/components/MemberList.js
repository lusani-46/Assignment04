import React, { Fragment, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import '../App.css'; 

export const MemberList = () => {
    const { members, removeMember, editMember } = useContext(GlobalContext);

    return (
        <Fragment>
        {members.length > 0 ? (
            <Fragment>
                {members.map(member => (
                    <div className="member-card" key={member.id}>
                        <div className="member-details">
                            <p className="member-name">{member.name}</p>
                            <p className="member-designation">{member.designation}</p>
                            <span className="member-location">{member.location}</span>
                        </div>
                        <div className="member-actions">
                            <Link to={`/edit/${member.id}`}>
                                <button
                                    onClick={() => editMember(member.id)}
                                    className="edit-button"
                                >
                                     <FiEdit />
                                </button>
                            </Link>
                            <button
                                onClick={() => removeMember(member.id)}
                                className="delete-button"
                            >
                                 <FiTrash2 />
                            </button>
                        </div>
                    </div>
                ))}
            </Fragment>
        ) : (
            <p className="no-data-message">No Members Is The Database</p>
        )}
    </Fragment>
);
};

