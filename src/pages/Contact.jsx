import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';
import { useState, useRef, useEffect } from 'react';
import * as Yup from 'yup';
import PageWithPreload from "../components/PageWithPreload";
import { blurAnimation } from '../utils/animations';
import { motion } from 'framer-motion';
import { personalInfo, projects } from '../data';
import DevInfiniteScroll from '../components/InfiniteScroll/DevInfiniteScroll';

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });
    const textareaRef = useRef(null);

    const adjustTextareaHeight = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    };

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

    useEffect(() => {
        adjustTextareaHeight();
    }, [formik.values.message]);

    return (
        <PageWithPreload texts={["Start a Conversation", "I'm Listening"]}>
            <motion.div {...blurAnimation}>
                <div className="flex gap-10 flex-col">
                    <div className="relative h-[450px] w-[100%] bg-cover bg-fixed bg-no-repeat" style={{ 
                        backgroundImage: `url(${projects[0].card.image})`,
                        backgroundPosition: '50% 100%',
                        backgroundSize: 'cover'
                    }}>
                        <svg className="absolute bottom-0 left-0 h-[120px]" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#000" width="100%" viewBox="0 0 4.66666 0.333331" preserveAspectRatio="none">
                            <path className="fil0" d="M-7.87402e-006 0.0148858l0.00234646 0c0.052689,0.0154094 0.554437,0.154539 1.51807,0.166524l0.267925 0c0.0227165,-0.00026378 0.0456102,-0.000582677 0.0687992,-0.001 1.1559,-0.0208465 2.34191,-0.147224 2.79148,-0.165524l0.0180591 0 0 0.166661 -7.87402e-006 0 0 0.151783 -4.66666 0 0 -0.151783 -7.87402e-006 0 0 -0.166661z"></path>
                        </svg>
                        <div className="absolute top-0 left-0 w-full h-full bg-black/40">

                        </div>
                    </div>
                    <section id="contact" className="bg-darkBg flex-1">
                        <div className="container pt-[20px] pb-[120px]">
                            <div className="flex flex-wrap gap-14">
                                <div className="lg:w-[55%] w-full">
                                    <div className="flex items-center gap-3 mb-8">
                                        <p className='w-[6px] h-[24px] bg-primary rounded-full'></p>
                                        <h3 className="font-bold text-2xl font-unbounded">
                                            Get in Touch with Me
                                        </h3>
                                    </div>
                                    <form onSubmit={formik.handleSubmit} className='text-[1.1rem]'>
                                        <div className="mb-8">
                                            <label htmlFor="name" className="block mb-3.5 font-bold">Your name</label>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                placeholder="Type your name"
                                                className={`cursor-pointer focus:outline-0 block bg-darkBg2 font-semibold px-4 py-3 w-full text-[1rem] ${formik.touched.name && formik.errors.name ? 'border-red-500' : ''}`}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.name}
                                            />
                                            {formik.touched.name && formik.errors.name && (
                                                <div className="text-red-500 text-[1rem] mt-3 font-semibold">{formik.errors.name}</div>
                                            )}
                                        </div>
                                        <div className="mb-8">
                                            <label htmlFor="email" className="block mb-3.5 font-bold">Your E-mail</label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="Type your Email Address"
                                                className={`cursor-pointer focus:outline-0 block bg-darkBg2 font-semibold px-4 py-3 w-full text-[1rem] ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.email}
                                            />
                                            {formik.touched.email && formik.errors.email && (
                                                <div className="text-red-500 text-[1rem] mt-3 font-semibold">{formik.errors.email}</div>
                                            )}
                                        </div>
                                        <div className="mb-8">
                                            <label htmlFor="message" className="block mb-3.5 font-bold">What's up</label>
                                            <textarea
                                                ref={textareaRef}
                                                id="message"
                                                name="message"
                                                placeholder="Tell me about you and the world"
                                                className={`cursor-pointer focus:outline-0 block bg-darkBg2 font-semibold px-4 py-3 w-full text-[1rem] resize-none ${formik.touched.message && formik.errors.message ? 'border-red-500' : ''}`}
                                                onChange={(e) => {
                                                    formik.handleChange(e);
                                                    adjustTextareaHeight();
                                                }}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.message}
                                            />
                                            {formik.touched.message && formik.errors.message && (
                                                <div className="text-red-500 text-[1rem] mt-3 font-semibold">{formik.errors.message}</div>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-10">
                                            <div className="group relative w-[max-content] float-right mr-[8px]">
                                                <button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className={`group-hover:translate-x-[8px] group-hover:translate-y-[8px] transition-transform ease duration-[300ms] z-[2] opacity-100 relative capitalize tracking-wide font-bold text-[0.95rem] p-4 bg-white text-lightText ${isSubmitting ? 'cursor-not-allowed' : ''}`}
                                                >
                                                    {isSubmitting ? 'Sending...' : 'Send message'}
                                                </button>
                                                <div className="group-hover:translate-x-[-8px] group-hover:translate-y-[-8px] transition-transform ease duration-[300ms] z-[1] top-[8px] left-[8px] opacity-50 border-[1px] w-full h-full absolute"></div>
                                            </div>
                                            {submitStatus.message && (
                                                <div className={`text-[1rem] font-semibold ${submitStatus.success ? 'text-green-500' : 'text-red-500'}`}>
                                                    {submitStatus.message}
                                                </div>
                                            )}
                                        </div>
                                    </form>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-8">
                                        <p className='w-[6px] h-[24px] bg-primary rounded-full'></p>
                                        <h3 className="font-bold text-2xl font-unbounded">
                                            Contact Info
                                        </h3>
                                    </div>
                                    <div className="w-full grid grid-cols-2 gap-5">
                                        <div className="">
                                            <h5 className="font-bold text-[1.1rem] mb-2.5 text-primary">Address</h5>
                                            <p className="font-[500] text-base text-gray-300 mb-7">{personalInfo.contact.location}</p>
                                            <h5 className="font-bold text-[1.1rem] mb-2.5 text-primary">Email</h5>
                                            <p className="font-[500] text-base text-gray-300 mb-7">{personalInfo.contact.email}</p>
                                            <h5 className="font-bold text-[1.1rem] mb-2.5 text-primary">Phone</h5>
                                            <p className="font-[500] text-base text-gray-300 mb-7">{personalInfo.contact.phone}</p>
                                        </div>
                                        <div className="">
                                            <h5 className="font-bold text-[1.1rem] mb-2.5 text-primary">Facebook</h5>
                                            <a href={personalInfo.link.facebook} target="_blank" rel="noopener noreferrer" className="block font-[500] text-base text-gray-300 mb-7">
                                                {personalInfo.social.facebook}
                                            </a>
                                            <h5 className="font-bold text-[1.1rem] mb-2.5 text-primary">Github</h5>
                                            <a href={personalInfo.link.github} target="_blank" rel="noopener noreferrer" className="block font-[500] text-base text-gray-300 mb-7">
                                                {personalInfo.social.github}
                                            </a>
                                            <h5 className="font-bold text-[1.1rem] mb-2.5 text-primary">LinkedIn</h5>
                                            <a href={personalInfo.link.linkedin} target="_blank" rel="noopener noreferrer" className="block font-[500] text-base text-gray-300 mb-7">
                                                {personalInfo.social.linkedin}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </motion.div>
            <div className="py-10 border-t border-gray-900">
                <DevInfiniteScroll list={[
                    "Ready to start?",
                    "Let's talk",
                    "Ready to start?",
                    "Let's talk",
                ]} innerClassName={'!text-[1.25rem]'} innerClassNameSplit={'!text-[1rem]'} />
            </div>
        </PageWithPreload>
    )
}