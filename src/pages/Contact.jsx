import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import PageWithPreload from "../components/PageWithPreload";


export default function ContactPage() {
    return (
        <PageWithPreload texts={["Welcome", "Let's Explore"]}>
            <Contact />
        </PageWithPreload>
    )
}

function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Name is required')
                .min(2, 'Name must be at least 2 characters'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            message: Yup.string()
                .required('Message is required')
        }),
        onSubmit: async (values, { resetForm }) => {
            setIsSubmitting(true);
            try {
                const templateParams = {
                    name: values.name,
                    from_email: values.email,
                    message: values.message,
                    to_email: process.env.REACT_APP_EMAILJS_TO_EMAIL
                };

                await emailjs.send(
                    process.env.REACT_APP_EMAILJS_SERVICE_ID,
                    process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                    templateParams,
                    process.env.REACT_APP_EMAILJS_PUBLIC_KEY
                );

                setSubmitStatus({
                    success: true,
                    message: 'Message sent successfully!'
                });
                resetForm();
            } catch (error) {
                console.error('Error sending email:', error);
                setSubmitStatus({
                    success: false,
                    message: 'Failed to send message. Please try again.'
                });
            } finally {
                setIsSubmitting(false);
            }
        }
    });

    return (
        <section id="contact" className="bg-darkBg">
            <div className="container py-[120px]">


                <div className="block h-full w-full">
                    <div className="flex flex-wrap mx-[-30px]">
                        <div className="lg:w-[60%] w-full px-[30px]">
                            <h3 className="font-bold mb-8 text-[22px] tracking-[2px] pl-[20px] block relative border-l-[2px]">
                                Get in Touch with Me !
                            </h3>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="mb-8">
                                    <label htmlFor="name" className="block mb-3 font-bold">Your name *</label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Type your name"
                                        className={`cursor-pointer focus:outline-0 block bg-black font-semibold px-3 py-2 w-full ${formik.touched.name && formik.errors.name ? 'border-red-500' : ''
                                            }`}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.name}
                                    />
                                    {formik.touched.name && formik.errors.name && (
                                        <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
                                    )}
                                </div>
                                <div className="mb-8">
                                    <label htmlFor="email" className="block mb-3 font-bold">Your E-mail *</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Type your Email Address"
                                        className={`cursor-pointer focus:outline-0 block bg-black font-semibold px-3 py-2 w-full ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''
                                            }`}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                    />
                                    {formik.touched.email && formik.errors.email && (
                                        <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                                    )}
                                </div>
                                <div className="mb-8">
                                    <label htmlFor="message" className="block mb-3 font-bold">What's up</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Tell me about you and the world"
                                        className={`cursor-pointer focus:outline-0 block bg-black font-semibold px-3 py-2 w-full ${formik.touched.message && formik.errors.message ? 'border-red-500' : ''
                                            }`}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.message}
                                        rows="5"
                                    />
                                    {formik.touched.message && formik.errors.message && (
                                        <div className="text-red-500 text-sm mt-1">{formik.errors.message}</div>
                                    )}
                                </div>
                                {submitStatus.message && (
                                    <div className={`mb-4 text-sm ${submitStatus.success ? 'text-green-500' : 'text-red-500'
                                        }`}>
                                        {submitStatus.message}
                                    </div>
                                )}
                                <div className="group relative w-[max-content] float-right mr-[8px]">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`group-hover:translate-x-[8px] group-hover:translate-y-[8px] transition-transform ease duration-[300ms] z-[2] opacity-100 relative uppercase tracking-[2px] font-semibold text-[13px] p-4 bg-black ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                                            }`}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send message'}
                                    </button>
                                    <div className="group-hover:translate-x-[-8px] group-hover:translate-y-[-8px] transition-transform ease duration-[300ms] z-[1] top-[8px] left-[8px] opacity-50 border-[1px] w-full h-full absolute"></div>
                                </div>
                            </form>
                        </div>
                        <div className="lg:w-[40%] w-full px-[30px]">
                            <h3 className="font-bold mb-8 text-[22px] tracking-[2px] pl-[20px] block relative border-l-[2px]">
                                Contact Info
                            </h3>
                            <div className="max-w-[300px] w-[max-content]">
                                <h5 className="font-[700] text-[20px] text-primary mt-[20px] mb-[10px]">Address</h5>
                                <p className="font-[500] text-sm text-gray-300 leading-6">80/4/3A Tan Hoa Dong Street, Disctrict 6, Ho Chi Minh City</p>
                                <h5 className="font-[700] text-[20px] text-primary mt-[20px] mb-[10px]">Email</h5>
                                <p className="font-[500] text-sm text-gray-300 leading-6">School Email: 19130159@st.hcmuaf.edu.vn</p>
                                <p className="font-[500] text-sm text-gray-300 leading-6">Personal Email: tthanhnhan1512@gmail.com</p>
                                <h5 className="font-[700] text-[20px] text-primary mt-[20px] mb-[10px]">Phone</h5>
                                <p className="font-[500] text-sm text-gray-300 leading-6">(+84) 946 286 951</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

