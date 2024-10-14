import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddAccount() {
    const navigate = useNavigate();
    const [accountData, setAccountData] = useState({
        name: '',
        accountNumber: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setAccountData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Account data submitted:", accountData);
        // Here you would typically send the data to your backend
        // After successful addition, navigate back to the MakePayment page
        navigate('/mkpayment');
    };

    return (
        <div className="container py-5" style={{maxWidth: '600px', margin: 'auto'}}>
            <h1 className="text-center mb-5">Add Account</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="form-label text-primary">Account Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={accountData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="accountNumber" className="form-label text-primary">Account Number</label>
                    <input
                        type="text"
                        className="form-control"
                        id="accountNumber"
                        value={accountData.accountNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary btn-lg">Add Account</button>
                    <button type="button" className="btn btn-secondary btn-lg" onClick={() => navigate('/make-payment')}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default AddAccount;