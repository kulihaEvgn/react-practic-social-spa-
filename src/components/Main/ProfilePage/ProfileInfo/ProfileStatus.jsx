import { React, useState, useEffect } from 'react'

const ProfileStatus = ({ userStatus, updateStatusProfile }) => {
    const [editMode, setEditmode] = useState(false);
    const [status, setStatus] = useState(userStatus);

    useEffect(() => setStatus(userStatus), [userStatus]);

    const handleStatus = () => setEditmode((editMode) => editMode = true);

    const handleStatusInput = () => {
        setEditmode((editMode) => editMode = false);
        updateStatusProfile(status)
    }
    const changeText = (e) => {
        const value = e.currentTarget.value;
        setStatus(value)
    }


    if (editMode) return <div>
        <input
            onChange={changeText}
            type="text"
            value={status}
            onBlur={handleStatusInput}
            autoFocus />
    </div>
    return (
        <div>
            <div>
                {userStatus}
                <div>
                    <button onClick={handleStatus}>Edit</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileStatus;