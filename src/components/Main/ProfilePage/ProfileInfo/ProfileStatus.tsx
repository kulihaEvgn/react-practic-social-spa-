import React, { useState, useEffect, FormEvent } from 'react';

type PropsType = {
    userStatus: string,
    updateStatusProfile: (status: string) => void,
    isOwner: boolean
}

const ProfileStatus = ({ userStatus, updateStatusProfile, isOwner }: PropsType) => {
    const [editMode, setEditmode] = useState(false);
    const [status, setStatus] = useState(userStatus);

    useEffect(() => setStatus(userStatus), [userStatus]);

    const handleStatus = () => setEditmode((editMode) => editMode = true);

    const handleStatusInput = () => {
        setEditmode((editMode) => editMode = false);
        updateStatusProfile(status)
    }
    const changeText = (e: FormEvent<HTMLInputElement>) => {
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
                    {isOwner && <button onClick={handleStatus}>Edit</button>}
                </div>
            </div>
        </div>
    )
}

export default ProfileStatus;