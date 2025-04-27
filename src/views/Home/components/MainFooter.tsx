import { FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

interface LinkItem {
    text: string
    path: string
}

const links: LinkItem[] = [
    { text: 'Privacy Policy', path: '/privacy-policy' },
    { text: 'Terms of Service', path: '/terms-of-service' },
    { text: 'Pricing Policy', path: '/pricing-policy' },
    { text: 'Editor Policy', path: '/editor-policy' },
]

const MainFooter: React.FC = () => {
    return (
        <footer className="bg-gradient-to-tr from-blue-50 via-blue-100 to-blue-200 text-slate-700 pt-12 pb-6 px-4 md:px-16">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
            >
                {/* Left Side - Logo + Small Text */}
                <div className="flex flex-col items-start space-y-4">
                    <Link to="/" className="text-2xl font-extrabold text-indigo-800 tracking-wide">
                        gogetwell<span className="text-indigo-500">.ai</span>
                    </Link>
                    <p className="text-sm text-gray-600 max-w-xs">
                        Building a healthier tomorrow with innovation and care.
                    </p>
                    <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} GoGetWell.ai. All rights reserved.</p>
                </div>

                {/* Middle - Quick Links */}
                <div className="flex flex-col space-y-3">
                    <h3 className="text-md font-semibold text-indigo-700">Quick Links</h3>
                    <ul className="flex flex-col space-y-2">
                        {links.map((item, index) => (
                            <motion.li
                                key={index}
                                whileHover={{ scale: 1.05, x: 5 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                className="text-sm text-slate-600 hover:text-indigo-600"
                            >
                                <Link to={item.path}>{item.text}</Link>
                            </motion.li>
                        ))}
                    </ul>
                </div>

                {/* Right Side - Social Media */}
                <div className="flex flex-col space-y-4">
                    <h3 className="text-md font-semibold text-indigo-700">Connect with Us</h3>
                    <div className="flex space-x-6">
                        <motion.a
                            href="https://x.com/gogetwellai"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2 }}
                        >
                            <FaTwitter size={24} className="text-indigo-600" />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/company/gogetwellai/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2 }}
                        >
                            <FaLinkedinIn size={24} className="text-indigo-600" />
                        </motion.a>
                    </div>
                </div>
            </motion.div>

            {/* Bottom Line for Mobile */}
            <div className="text-center text-xs mt-8 text-gray-400 md:hidden">
                &copy; {new Date().getFullYear()} GoGetWell.ai. All rights reserved.
            </div>
        </footer>
    )
}

export default MainFooter
