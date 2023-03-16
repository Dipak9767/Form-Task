import React, { useRef, useState } from 'react'

const Form = ({ active, setActive, userList, setUserList , userInfo , updateflag , setUpdateFlag}) => {

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        designation: '',
        number: ''
    })

    const [error, setError] = useState('')

    const first = useRef(null)
    const last = useRef(null)
    const designation = useRef(null)
    const number = useRef(null)

    const submitHandler = (e) => {
        if (error === 'no') {
            e.preventDefault();

            if(updateflag){
                let list = userList.map((user)=>{
                    if(user.firstName === userInfo.firstName){
                        return data
                    }else{
                        return user
                    }
                })
                setUserList(list)
                setUpdateFlag(false)
                
            }else{
                setUserList([...userList, data]) 
            }
            setActive(false)
            first.current.value = ''
            last.current.value = ''
            designation.current.value = ''
            number.current.value = ''
        }
    }

    return (
        <div className={active ? 'form-container ' : 'deactive'}>
            <div className="form">
                <div className="form-heading">
                    <h2>Add Employee</h2>
                    <span onClick={()=>{
                        setActive(false)
                        setUpdateFlag(false)
                    }}>X</span>
                </div>
                <form action='submit' onSubmit={submitHandler}>
                    <div>
                        <h6>First Name</h6>
                        <input type="text" ref={first} onChange={(e) => {
                            if (e.target.value.length <= 0) {
                                setError('first')
                            } else {
                                setError('no')
                                setData({ ...data, firstName: e.target.value })
                            }
                        }} />
                        <span className={error === 'first' ? 'error' : 'no-error'}>this is required</span>
                    </div>
                    <div>
                        <h6>Last Name</h6>
                        <input type="text"ref={last} onChange={(e) => {
                            if (e.target.value.length <= 0) {
                                setError('last')
                            } else {
                                setError('no')
                                setData({ ...data, lastName: e.target.value })
                            }
                        }} />
                        <span className={error === 'last' ? 'error' : 'no-error'}>this is required</span>
                    </div>
                    <div>
                        <h6>Designation</h6>
                        <input type="text" ref={designation} onChange={(e) => {
                            if (e.target.value.length <= 0) {
                                setError('des')
                            } else {
                                setError('no')
                                setData({ ...data, designation: e.target.value })
                            }
                        }} />
                        <span className={error === 'des' ? 'error' : 'no-error'}>this is required</span>
                    </div>
                    <div>
                        <h6>Contact number</h6>
                        <input type="number" ref={number} onChange={(e) => {
                            if (e.target.value.length !== 10) {
                                setError('number')
                            } else {
                                setError('no')
                                setData({ ...data, number: e.target.value })
                            }
                        }} />
                        <span className={error === 'number' ? 'error' : 'no-error'}>number should be 10 digit</span>
                    </div>
                    <div className='form-btns'>
                        <button type='submit'> {updateflag?"Update":'ADD'} </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form