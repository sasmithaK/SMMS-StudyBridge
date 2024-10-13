import React, { useState, useEffect } from "react";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function PaymentPlans() {
    const [payments, setPayments] = useState([
        { month: "First month", amount: 40000, paid: true },
        { month: "Second month", amount: 40000, paid: false },
        { month: "Third month", amount: 40000, paid: false },
        { month: "Fourth month", amount: 40000, paid: false }
    ]);

    const [paidPercentage, setPaidPercentage] = useState(25);

    useEffect(() => {
        const totalAmount = payments.reduce((sum, payment) => sum + payment.amount, 0);
        const paidAmount = payments.reduce((sum, payment) => payment.paid ? sum + payment.amount : sum, 0);
        const newPaidPercentage = Math.round((paidAmount / totalAmount) * 100);
        setPaidPercentage(newPaidPercentage);
    }, [payments]);

    const handleCheckboxChange = (index) => {
        const newPayments = [...payments];
        newPayments[index].paid = !newPayments[index].paid;
        setPayments(newPayments);
    };

    const gaugeChartData = {
        datasets: [{
            data: [paidPercentage, 100 - paidPercentage],
            backgroundColor: [
                'rgba(0, 83, 255, 1)',
                'rgba(232, 232, 232, 1)',
            ],
            borderWidth: 0,
        }]
    };

    const gaugeChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false }
        }
    };

    return (
        <div className="container py-5" style={{backgroundColor: '#e6f3ff', maxWidth: '100%'}}>
            <h1 className="text-primary text-center mb-5">Payment Plans</h1>
            
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <h2 className="text-primary mb-4">Current enrolled plan</h2>
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <h3 className="text-primary">Winter Semester Registration</h3>
                                    <p className="fw-bold">Total payment : Rs. 200,000.00</p>
                                    <ul className="list-unstyled">
                                        {payments.map((payment, index) => (
                                            <li key={index} className="mb-2 p-2 rounded d-flex align-items-center" 
                                                style={{backgroundColor: payment.paid ? '#90EE90' : '#F0F0F0'}}>
                                                <input 
                                                    type="checkbox" 
                                                    checked={payment.paid}
                                                    onChange={() => handleCheckboxChange(index)}
                                                    className="me-3"
                                                />
                                                <span style={{color: payment.paid ? '#0053FF' : '#000'}}>
                                                    {payment.month} : Rs. {payment.amount.toFixed(2)}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="col-md-6 d-flex justify-content-center align-items-center">
                                    <div style={{ width: '200px', height: '200px', position: 'relative' }}>
                                        <Doughnut data={gaugeChartData} options={gaugeChartOptions} />
                                        <div style={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            fontSize: '2rem',
                                            fontWeight: 'bold',
                                            color: '#0053FF'
                                        }}>
                                            {paidPercentage}%
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentPlans;
