import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

ChartJS.register(ArcElement, Tooltip, Legend);

function GetStarted() {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/paymentplandetails');
    };

    return (
        <div className="container py-5" style={{ backgroundColor: '#e6f3ff', maxWidth: '100%' }}>
            <div className="row justify-content-center mt-5">
                <div className="col-md-8 text-center">
                    <h2 className="text-primary mb-4">Want to enroll in a payment plan?</h2>
                    <p className="mb-4">
                        The tuition payment plan enables you to take your tuition bill and
                        split it into <span className="text-primary fw-bold">smaller</span> amounts, 
                        <span className="text-primary fw-bold"> payable</span> over a number of months. You
                        still owe the same amount, but you now have more time to pay and
                        <strong> your payments are smaller and more manageable</strong>.
                    </p>
                    <button className="btn btn-primary btn-lg" onClick={handleGetStarted}>
                        Get started
                    </button>
                </div>
            </div>

            {/* Cards Section */}
            <div className="row mt-5">
                {/* Card 1 */}
                <div className="col-md-4">
                    <div className="card shadow-sm">
                        <div className="card-body text-center">
                            <img src="plan1.png" alt="Plan 1" className="mb-3" style={{ width: '50px', height: 'auto' }} />
                            <h5 className="card-title">I Want to Find the Best Student Loan Repayment Strategy</h5>
                            <ul className="text-start">
                                <li>See how you can lower your student loan payment.</li>
                                <li>See how you can pay off your student loans faster.</li>
                                <li>Decide whether to consolidate your student loans.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="col-md-4">
                    <div className="card shadow-sm">
                        <div className="card-body text-center">
                            <img src="plan2.png" alt="Plan 2" className="mb-3" style={{ width: '50px', height: 'auto' }} />
                            <h5 className="card-title">I'm Struggling With My Student Loan Payments</h5>
                            <ul className="text-start">
                                <li>Consider a new repayment plan instead of suspending payments.</li>
                                <li>Find out about the impacts of suspending payments.</li>
                                <li>Learn how to avoid loan default.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="col-md-4">
                    <div className="card shadow-sm">
                        <div className="card-body text-center">
                            <img src="plan3.png" alt="Plan 3" className="mb-3" style={{ width: '50px', height: 'auto' }} />
                            <h5 className="card-title">I Want to Simulate Borrowing More</h5>
                            <ul className="text-start">
                                <li>Explore impacts when you borrow more student loans.</li>
                                <li>Find out about federal student loan limits.</li>
                                <li>See how your choice of school affects how much you may need to borrow.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetStarted;;
