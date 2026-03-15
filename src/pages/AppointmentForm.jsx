import React, { useState } from "react";
import "./AppointmentForm.css";
import { Images } from "../constants/images";
import { departmentsData } from "../constants/departments";
import { doctors } from "../constants/doctors";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SEO } from "../components/SEO";
import { BRAND } from "../constants/brand";
import { db, logEvent } from "../lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const AppointmentForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        department: "",
        doctor: "",
        appointmentDate: "",
        message: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
            // Reset doctor when department changes
            ...(name === "department" && {doctor: ""}),
        }));
    };

    // Filter doctors based on selected department
    const filteredDoctors = formData.department
        ? doctors.filter((doctor) => doctor.slug === formData.department)
        : [];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const doctorName = doctors.find((d) => d.param === formData.doctor)?.name || formData.doctor;
        const departmentName = departmentsData[formData.department]?.title || formData.department;

        try {
            await addDoc(collection(db, 'appointments'), {
                patientName: formData.name.trim(),
                email: formData.email.trim(),
                phone: formData.phone.trim(),
                doctor: doctorName,
                department: departmentName,
                appointmentDate: formData.appointmentDate,
                message: (formData.message || '').trim(),
                createdAt: serverTimestamp(),
            });

            logEvent('appointment_submitted', {
                department: departmentName,
                doctor: doctorName,
            });
            setFormData({
                name: "",
                phone: "",
                email: "",
                department: "",
                doctor: "",
                appointmentDate: "",
                message: "",
            });
            setSubmitted(true);
        } catch (error) {
            console.error(error);
            toast.error('Failed to submit. Please try again or call us.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="appointment-wrapper">
            <SEO
                title={`Book Appointment - ${BRAND.name} ${BRAND.location}`}
                description={`Book an appointment with expert doctors at ${BRAND.name}, ${BRAND.location}. Schedule consultations online or call ${BRAND.phoneDisplay}.`}
                keywords={`book appointment, doctor appointment ${BRAND.location}, hospital booking, consultation`}
                canonicalUrl={`${BRAND.siteUrl}/appointment`}
            />
            <div className="appointment-card">
                {/* LEFT */}
                <div className="appointment-left">
                    <div>
                        <h2>Request Appointment</h2>
                        <p>
                            Answer a few simple questions to help us connect you with the right
                            appointment coordinator.
                        </p>
                        <div className="contact-phones">
                            <p className="contact-label">Or call us directly:</p>
                            <div className="phone-numbers">
                                <a href={`tel:+91${BRAND.phone}`} className="phone-link">
                                    <span className="phone-icon-wrapper">
                                        <img src={Images.phone} alt="Phone" className="phone-icon"/>
                                    </span>
                                    <span>{BRAND.phoneDisplay}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <img
                        src={Images.bookAppointment}
                        alt="Doctors"
                        className="appointment-doctor-image"
                    />
                </div>

                {/* RIGHT */}
                <div className="appointment-right">
                    <form className="appointment-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            aria-label="Full Name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                        />

                        <div className="row">
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Mobile Number"
                                aria-label="Mobile Number"
                                required
                                pattern="[6-9]{1}[0-9]{9}"
                                title="Enter a valid 10-digit mobile number"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                aria-label="Email Address"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="row">
                            <div className="select-wrapper">
                                <select
                                    name="department"
                                    aria-label="Select Department"
                                    value={formData.department}
                                    onChange={handleChange}
                                >
                                    <option value="">Department</option>
                                    {Object.entries(departmentsData).map(([slug, dept]) => (
                                        <option key={slug} value={slug}>
                                            {dept.title}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {formData.department && (
                                <div className="select-wrapper">
                                    <select
                                        name="doctor"
                                        aria-label="Select Doctor"
                                        value={formData.doctor}
                                        onChange={handleChange}
                                    >
                                        <option value="">Doctor</option>
                                        {filteredDoctors.map((doctor) => (
                                            <option key={doctor.param} value={doctor.param}>
                                                {doctor.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            )}
                        </div>

                        <input
                            type="date"
                            name="appointmentDate"
                            aria-label="Preferred Date"
                            required
                            min={new Date().toISOString().split('T')[0]}
                            value={formData.appointmentDate}
                            onChange={handleChange}
                        />

                        <textarea
                            name="message"
                            placeholder="Message"
                            aria-label="Message"
                            rows="10"
                            required
                            value={formData.message}
                            onChange={handleChange}
                        />

                        {submitted ? (
                            <div className="success-card">
                                <div className="success-icon">✓</div>
                                <h3>Request Received</h3>
                                <p>
                                    Your appointment request is in safe hands.
                                    We’ll contact you shortly.
                                </p>
                            </div>
                        ) : (
                            <button type="submit" className="submit-btn" disabled={loading}>
                                {loading ? "Submitting..." : <>Book Appointment <span>↗</span></>}
                            </button>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AppointmentForm;
