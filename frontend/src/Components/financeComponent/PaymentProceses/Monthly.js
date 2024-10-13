import React, { useState } from "react";
import { Card, CardContent, Button, Typography, Grid, TextField, FormControl, InputLabel, MenuItem, Select, Checkbox, FormControlLabel, CardActions, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';

function Monthly() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: 'John Doe',
        email: 'johndoe@example.com',
        phone: '123-456-7890',
        studentId: 'S123456',
        dob: '1990-01-01',
        courseName: 'Software Engineering',
        startDate: '2024-01-10',
        duration: '4 years',
        totalAmountDue: '5000',
        paymentFrequency: 'monthly',
        numberOfInstallments: '12',
        paymentMethod: 'credit-card',
        billingAddress: '1234 Elm St, Springfield',
        emergencyContact: 'Jane Doe - 987-654-3210',
        scholarshipInfo: 'No scholarships',
        agreeTerms: false,
        agreePrivacy: false,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData({
            ...formData,
            [name]: checked,
        });
    };

    const handleSubmit = () => {
        console.log(formData);
        navigate('/paymentplans');
    };

    return (
        <Card variant="outlined" sx={{ padding: 3 }}>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    Setup Monthly Payment Plan
                </Typography>

                <Typography variant="h6" sx={{ padding: '18px 0' }}>
                    Payment Plan Preferences
                </Typography>


                {/* payment plan option */}
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            label="Total Amount Due"
                            name="totalAmountDue"
                            value={formData.totalAmountDue}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                            <InputLabel>Preferred Payment Frequency</InputLabel>
                            <Select
                                name="paymentFrequency"
                                value={formData.paymentFrequency}
                                onChange={handleInputChange}
                            >
                                <MenuItem value="monthly">Monthly</MenuItem>
                                <MenuItem value="bi-monthly">Bi-monthly</MenuItem>
                                <MenuItem value="quarterly">Quarterly</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            label="Number of Installments"
                            name="numberOfInstallments"
                            value={formData.numberOfInstallments}
                            onChange={handleInputChange}
                        />
                    </Grid>
                </Grid>


                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h6">Student Identification</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="Student ID Number"
                                    name="studentId"
                                    value={formData.studentId}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="Date of Birth"
                                    name="dob"
                                    type="date"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={formData.dob}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h6">Personal Information</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="Full Name"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="Email Address"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="Phone Number"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h6">Course Information</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="Program/Course Name"
                                    name="courseName"
                                    value={formData.courseName}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="Start Date"
                                    name="startDate"
                                    type="date"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={formData.startDate}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="Course Duration"
                                    name="duration"
                                    value={formData.duration}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </CardContent>

            <CardActions>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Submit Payment Plan
                </Button>
            </CardActions>
        </Card>
    );
}

export default Monthly;
