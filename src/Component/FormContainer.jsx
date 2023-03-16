import React, { useState } from 'react'
import Form from './Form'
import './form.css'

const FormContainer = () => {

    const [active, setActive] = useState(false);
    const [userList, setUserList] = useState([])
    const [userInfo, setUserInfo] = useState({
        firstName: '',
        lastName: '',
        designation: '',
        number: ''
    })
    const [updateflag, setUpdateFlag] = useState(false)

    const deleteUser = (name) => {
        let list = userList.filter((user) => name !== user.firstName)
        setUserList(list)
    }

    const update = (user) => {
        setActive(true)
        setUserInfo(user)
        setUpdateFlag(true)
    }

    return (
        <div className='container'>
            <Form active={active} setActive={setActive} userList={userList} setUserList={setUserList} updateflag={updateflag} userInfo={userInfo} setUpdateFlag={setUpdateFlag} />
            <div className="heading">
                <h2>Employee Information</h2>
                <button onClick={() => setActive(true)}>Add</button>
            </div>

            <div className="list-container">
                <div className="list-heading">
                    <div>
                        <span>
                            FIRST NAME
                        </span>

                    </div>
                    <div>
                        <span>
                            LAST NAME
                        </span>
                    </div>
                    <div>
                        <span>
                            DESIGNATION
                        </span>
                    </div>
                    <div>
                        <span>
                            CONTACT NUMBER
                        </span>
                    </div>
                </div>
                {
                    userList ?
                        userList.map((user, idx) => (
                            <div className="list" key={idx} >
                                <div>
                                    <span>
                                        {user.firstName}
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        {user.lastName}
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        {user.designation}
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        {user.number}
                                    </span>
                                </div>
                                <div className="btns">
                                    <button onClick={() => update(user)}>EDIT</button>
                                    <button onClick={() => deleteUser(user.firstName)}>DELETE</button>
                                </div>
                            </div>
                        ))
                        : ""
                }

            </div>
        </div>
    )
}

export default FormContainer