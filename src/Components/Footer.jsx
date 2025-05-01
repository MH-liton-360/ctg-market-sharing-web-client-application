import logo from '../assets/ctg-logo.jpg'
import github from '../assets/github-logo-png-transparent-png.png'

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-[#0c0c0cc9] text-primary-content p-10">
            <aside className='p-1'>
                <img
                    width="50"
                    height="50"
                    src={logo}
                    alt="Logo"
                    className="inline-block rounded-2xl"
                />
                <p className="font-bold p-2">
                    Car-Cleaning LTD.
                    <br />
                    Providing reliable tech since 2025
                </p>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href='https://github.com/programming-hero-web-course1/b10-a9-authentication-MH-liton-360'>
                        <img
                            src={github}
                            alt="GitHub"
                            width="24"
                            height="24"
                            className='rounded-2xl'
                        />
                    </a>
                    <a href='https://www.youtube.com/'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                        </svg>
                    </a>
                    <a href='https://www.facebook.com/MH.liton.360'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                        </svg>
                    </a>
                </div>
            </nav>
        </footer >
    );
};

export default Footer;