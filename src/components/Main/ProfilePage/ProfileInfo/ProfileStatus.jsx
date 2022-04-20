import { React, useState, useEffect } from 'react'

const ProfileStatus = (props) => {
    const [editMode, setEditmode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const handleStatus = () => {
        setEditmode((editMode) => editMode = true)
    }
    const handleStatusInput = () => {
        setEditmode((editMode) => editMode = false);
        props.updateStatusProfile(status)
    }
    const changeText = (e) => {
        const value = e.currentTarget.value;
        setStatus(value)
    }
    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

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
                {props.status}
                <div>
                    <button onClick={handleStatus}>Edit</button>
                </div>

            </div>
        </div>
    )
}

export default ProfileStatus;