import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardActions, Button, Typography, Grid, Box, Stack } from '@mui/material';

function PaymentPlanDetails() {
    const [selectedPlan, setSelectedPlan] = useState(null);
    const navigate = useNavigate();

    const handlePlanAction = (planId) => {
        console.log(`Proceeding with plan ID: ${planId}`);
        navigate(`/monthly`);
    };
    
    const plans = [
        {
            id: 1,
            type: "Monthly Installments",
            description: "Spread your tuition or fees over several months for easier budgeting.",
            features: [
                "Pay monthly installments over 6 or 12 months.",
                "No interest fees.",
                "Flexible payment dates."
            ],
            eligibility: "All students are eligible. No credit check required.",
            fees: "Enrollment fee: $50"
        },
        {
            id: 2,
            type: "Quarterly Payments",
            description: "Align your payments with the academic calendar, paying at the start of each quarter.",
            features: [
                "Pay at the beginning of each academic quarter.",
                "No interest charges.",
                "Plan duration matches the academic year."
            ],
            eligibility: "Available to students enrolled in a full academic year.",
            fees: "No enrollment fee, but late payments will incur a $25 fee."
        },
        {
            id: 3,
            type: "Lump-Sum Payment",
            description: "Pay your entire balance upfront and receive a discount on your total tuition.",
            features: [
                "Full balance due at the beginning of the term.",
                "Receive a 5% discount on your total tuition fees."
            ],
            eligibility: "All students eligible. No credit check required.",
            fees: "No additional fees."
        },
        {
            id: 4,
            type: "Customizable Plans",
            description: "Choose the amount you want to pay monthly and the length of your payment plan.",
            features: [
                "Select payment amounts and durations.",
                "Flexible interest-free payments.",
                "Adjust the plan at any time."
            ],
            eligibility: "Requires a financial assessment and approval.",
            fees: "Enrollment fee: $50. Adjustment fee: $25 per adjustment."
        }
    ];

    const handleSelectPlan = (planId) => {
        setSelectedPlan(plans.find(plan => plan.id === planId));
    };

    return (
        <Box p={5}>
            <Typography variant="h4" component="h2" color="primary" gutterBottom>
                Choose Your Payment Plan
            </Typography>
            
            <Grid container spacing={3}>
                {plans.map(plan => (
                    <Grid item xs={12} md={4} key={plan.id}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {plan.type}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" paragraph>
                                    {plan.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant="contained" onClick={() => handleSelectPlan(plan.id)}>
                                    View Details
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {selectedPlan && (
                <Box mt={5}>
                    <Typography variant="h5" component="h3" color="primary">
                        {selectedPlan.type} Details
                    </Typography>
                    <Typography variant="body1" paragraph>
                        {selectedPlan.description}
                    </Typography>

                    <Typography variant="h6">Features:</Typography>
                    <Stack spacing={1}>
                        {selectedPlan.features.map((feature, index) => (
                            <Typography variant="body2" key={index}>
                                - {feature}
                            </Typography>
                        ))}
                    </Stack>

                    <Typography variant="h6">Eligibility:</Typography>
                    <Typography variant="body1" paragraph>
                        {selectedPlan.eligibility}
                    </Typography>

                    <Typography variant="h6">Fees:</Typography>
                    <Typography variant="body1" paragraph>
                        {selectedPlan.fees}
                    </Typography>

                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={() => handlePlanAction(selectedPlan.id)} 
                        sx={{ mt: 2 }}
                    >
                        Proceed with {selectedPlan.type}
                    </Button>
                </Box>
            )}
        </Box>
    );
}

export default PaymentPlanDetails;
