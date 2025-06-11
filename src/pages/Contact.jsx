import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';
import DevInfiniteScroll from '../components/InfiniteScroll/DevInfiniteScroll';
import PageWithPreload from "../components/PageWithPreload";
import { personalInfo, projects } from '../data';

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });
    const textareaRef = useRef(null);

    const adjustTextareaHeight = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = `${textarea.scrollHeight || '72'}px`;
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
            <motion.div>
                <div className="flex gap-10 flex-col">
                    <div className="relative h-[400px] w-[100%] bg-cover bg-no-repeat" style={{
                        backgroundImage: `url(https://studiofifty.premiumthemes.in/wp-content/uploads/2024/11/home1-welcome.webp)`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }}>
                        <div className="absolute left-0 top-0 w-full h-full z-10">
                            <div className="container-wide relative h-full">
                                <div className="absolute top-10 right-0 text-white font-bold flex gap-7 text-[16px] font-unbounded">
                                    <a href={personalInfo.link.facebook} target="_blank" rel="noopener noreferrer">
                                        fb.
                                    </a>
                                    <a href={personalInfo.link.linkedin} target="_blank" rel="noopener noreferrer">
                                        in.
                                    </a>
                                    <a href={personalInfo.link.github} target="_blank" rel="noopener noreferrer">
                                        gh.
                                    </a>
                                </div>
                                <div className="absolute bottom-10 left-0">
                                    <p className="text-white font-bold text-[3vw] font-unbounded leading-tight mb-3.5">
                                        Reach Out
                                        <br />
                                        to Collaborate
                                    </p>
                                    <p className="text-[#ccc] font-medium text-[13px] font-unbounded">
                                        <span className="text-[16px] leading-none">©</span> Built by Thanh Nhan
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
                    </div>
                    <section id="contact" className="bg-darkBg flex-1">
                        <div className="container pt-[20px] pb-[120px]">
                            <div className="flex flex-wrap gap-14">
                                <div className="lg:w-[55%] w-full">
                                    <div className="flex items-center gap-3 mb-8 hidden">
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
                                                className={`cursor-pointer focus:outline-0 block bg-darkBg2 font-semibold px-4 py-3 w-full text-[1rem]  ${formik.touched.message && formik.errors.message ? 'border-red-500' : ''}`}
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
                                    <div className="flex items-center gap-3 mb-8 hidden">
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
            <div className="py-10 bordert border-b border-gray-900 bg-darkBg">
                <DevInfiniteScroll list={[
                    "Ready to start?",
                    "Let's talk",
                    "Ready to start?",
                    "Let's talk",
                ]} innerClassName={'!text-[1.25rem]'} innerClassNameSplit={'!text-[1rem]'} />
            </div>
            <div className="container-fluid py-10 bg-darkBg">
                <div className="grid grid-cols-3 gap-[20px]">
                    <div className="grid grid-cols-2 gap-[20px]">
                        <img className="rounded-[20px]" src="./images/contact-2.webp" alt="about-1" />
                        <img className="rounded-[20px]" src="./images/contact-1.webp" alt="about-1" />
                    </div>
                    <div className="relative w-full h-full bg-[#F6F3FF] rounded-[20px]">
                        <div className="absolute top-10 right-10 text-black font-bold flex gap-7 text-[16px] font-unbounded">
                            <a href={personalInfo.link.facebook} target="_blank" rel="noopener noreferrer">
                                fb.
                            </a>
                            <a href={personalInfo.link.linkedin} target="_blank" rel="noopener noreferrer">
                                in.
                            </a>
                            <a href={personalInfo.link.github} target="_blank" rel="noopener noreferrer">
                                gh.
                            </a>
                        </div>
                        <div className="absolute bottom-10 left-10 ">
                            <p className="text-black font-bold text-[25px] font-unbounded leading-8 mb-3.5">
                                Join on My
                                <br />
                                Social Circle
                            </p>
                            <p className="text-black/70 font-medium text-[13px] font-unbounded">
                                <span className="text-[16px] leading-none">©</span> Built by Thanh Nhan
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-[20px]">
                        <img className="rounded-[20px]" src="./images/contact-4.webp" alt="about-1" />
                        <img className="rounded-[20px]" src="./images/contact-3.webp" alt="about-1" />
                    </div>
                </div>
            </div>
        </PageWithPreload>
    )
}