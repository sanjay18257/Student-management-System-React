import React, { useState } from 'react';

const AddStudent = ({ showAlert, newStudent }) => {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        phone: '',
        address: '',
        email: '',
        age: ''
    });

    const { fname, lname, phone, address, email, age } = formData;

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!/^[a-zA-Z]+$/.test(fname)) {
            setFormData({ ...formData, fname: '' });
            showAlert('First name should be only alphabets', 'danger');
            return;
        }
        if(!/^[a-zA-Z]+$/.test(lname)) {
            setFormData({ ...formData, lname: '' });
            showAlert('Last name should be only alphabets', 'danger');
            return;
        }
        if(!/^[1-9][0-9]{9}$/.test(phone)) {
            setFormData({ ...formData, phone: '' });
            showAlert('Phone number should be only numbers and contain 10 digit', 'danger');
            return;
        }
        if(!/^[0-9]+$/.test(age)) {
            setFormData({ ...formData, age: '' });
            showAlert('Age should be only numbers', 'danger');
            return;
        }

        const student = { fname, lname, phone, address, email, age };
        newStudent(student);
        setFormData({
            fname: '',
            lname: '',
            phone: '',
            address: '',
            email: '',
            age: ''
        });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="container">
            <h1 className='text-center mb-5'>Add Student Details</h1>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-4">
                    <label htmlFor="validationDefault01" className="form-label">First name</label>
                    <input type="text" className="form-control" name="fname" value={fname} onChange={handleChange} id="validationDefault01" required/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationDefault02" className="form-label">Last name</label>
                    <input type="text" className="form-control" name="lname" value={lname} onChange={handleChange} id="validationDefault02" required/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationPhone" className="form-label">Phone No.</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text text-white" id="inputGroupPrepend3">+91</span>
                        <input type="text" className="form-control" name="phone" value={phone} onChange={handleChange} id="validationPhone" required/>
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" name="address" value={address} onChange={handleChange} id="validationAddress" required/>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" value={email} onChange={handleChange} id="validationEmail" required/>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationDefaultAge" className="form-label">Age</label>
                    <input type="text" className="form-control" name="age" value={age} onChange={handleChange} id="validationDefaultAge"  aria-describedby="inputGroupPrepend2" required/>
                </div>
                <div className="col-12">
                    <button className="btn btn-success" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddStudent;
