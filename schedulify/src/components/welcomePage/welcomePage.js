"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

function WelcomePage(){
    return (
        <div>
            <div className="header flex flex-row h-20 justify-between items-center text-white font-semibold" style={{background: "#2BA2A0"}}>
                <div className="pl-10">
                    <FontAwesomeIcon icon="fa-regular fa-calendar" />  AI Scheduler
                </div>

                <div className="options flex flex-row gap-7 pr-10 ">
                    <button>Products</button>
                    <button>Features</button>
                    <button>About</button>
                    <button>Contact us</button>
                    <button>Login</button>
                </div>
            </div>

            <div className="flex flex-row justify-between h-screen">
                <div className="flex flex-col pl-20 pt-32" style={{color: "#084147"}}>
                    <div className="flex flex-col">   
                        <h1 className="text-7xl font-bold">Boost</h1>
                        <h3 className="text-3xl font-bold">Your</h3>
                        <h2 className="text-3xl font-bold">Productivity</h2>
                        <div className="border-b-4 max-w-80 pt-2"></div>
                    </div>

                    <div className="description flex max-w-xl pt-4 pb-5">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                    
                    <button className="flex text-white justify-center items-center max-w-80 max-h-40 rounded-lg" style={{background: "#2BA2A0"}}>
                        <div className="py-1">Sign up now!</div>
                    </button>
                </div>

                <div className="flex">
                    <img src="/image.png" alt="Welcome" style={{ width: '761px', height: '641px' }} />
                </div>
            </div>

            <div className='footer flex flex-col justify-center items-center h-40' style={{background: "#2BA2A0"}}>
                <div className='link flex flex-row justify-between gap-10'>
                    <button>
                        <FontAwesomeIcon icon="fa-brands fa-instagram" />
                    </button>

                    <button>
                        <FontAwesomeIcon icon="fa-brands fa-twitter" /> 
                    </button>

                    <button>
                        <FontAwesomeIcon icon="fa-brands fa-youtube" />
                    </button>

                    <button>
                        <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                    </button>
                </div>

                <div className='flex flex-row justify-between gap-20'>
                    <a>Home</a>
                    <a>About</a>
                    <a>Contact Us</a>
                    <a>Our Team</a>
                </div>
            </div>
        </div>
    )
}

export default WelcomePage;
