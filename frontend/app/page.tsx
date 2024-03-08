import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      <nav className='w-full px-5 py-4 relative z-10 shadow-[0_10px_50px_-20px_rgba(0,0,0,0.1)]'>
        <div className='flex justify-between items-center flex-wrap'>
            <div className="w-full md:w-1/3 justify-center md:justify-start flex" >
              <Logo role="merchant" />
            </div>
            <div className="flex gap-4 w-10/12 md:w-1/3 justify-center">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                    Home
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                    Features
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                    Pricing
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                    Contact
                </a>
            </div>
            <div className='flex gap-5 w-2/12 md:w-1/3 justify-end'>
            <Link href="/merchant/login">
                <Button className="bg-gray-100 text-purple-500 hover:bg-gray-300">
                    Sign in
                </Button>
                </Link>
                
            </div>
        </div>
    </nav>
      <div className="flex overflow-hidden justify-center relative items-center px-16 py-16 w-full bg-purple-600 max-md:px-5 max-md:max-w-full">
      <div className='absolute w-[250px] h-[250px] transform rounded-xl rotate-[14deg] -bottom-[5rem] -left-32 bg-purple-500'></div>
                    <div className='absolute w-[250px] h-[250px] transform rounded-xl rotate-[14deg] -top-[5rem] -right-20 bg-purple-500'></div>
        <div className="px-px mb-8 w-full max-md:max-w-full">
          <div className="flex gap-5 max-lg:flex-col max-md:gap-0">
            <div className="flex flex-col w-5/12 max-lg:ml-0 max-lg:w-full">
              <div className="flex flex-col mt-28 text-white max-md:mt-10 max-md:max-w-full">
                <div className="text-5xl font-bold max-md:max-w-full">
                  Optimize business
                  <br />
                  payments
                </div>
                <div className="mt-10 text-base max-md:mt-10 max-md:max-w-full">
                  Payment processing platform that facilitates transactions 
                  between businesses and their customers.
                </div>
                <Link href="/merchant/login">
                  <Button className="bg-white hover:bg-slate-200 text-black my-4">
                    Open Account
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col ml-auto p-10 w-6/12 max-lg:ml-0 max-lg:w-full relative">
              <img
                loading="lazy"
                srcSet="/mainImage.png"
                className="w-full aspect-[1.3] max-md:mt-10 max-md:max-w-full"
              />
              <img
                loading="lazy"
                src="/mainSider.png"
                className="absolute -bottom-10 z-10 -left-20 w-5/12 max-md:w-1/3 max-md:top-1/3 max-md:right-1/3"
              />
            </div>
          </div>
        </div>
      </div>
      {/* next section */}
      <div className="flex justify-center relative items-center px-16 py-16 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-lg:flex-col max-md:gap-0  w-full">
            <div className="flex flex-col mr-auto p-10 w-6/12 max-lg:mr-0 max-lg:w-full relative">
            <img
                loading="lazy"
                srcSet="/image2.png"
                className="w-full aspect-[1.3] max-md:mt-10"
              />
            </div>
            <div className="flex flex-col w-5/12 max-lg:ml-0 max-lg:w-full space-y-3 justify-center">
              <span className="text-gray-700 text-lg">You Can</span>
              <h1 className="text-4xl font-bold"><span className="text-red-400">Monitor</span> payments</h1>
              <p className="text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quasi tempora odio dicta sint eum iure quae veniam error fugit.</p>
              <Link href="/" className="flex gap-2 text-red-400">Learn more <span><ArrowRight /></span> </Link>
            </div>
        </div>
      </div>
      {/* next */}
      
      <div className="flex justify-center relative items-center px-16 py-16 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-lg:flex-col max-md:gap-0  w-full">
        <div className="flex flex-col w-5/12 max-lg:ml-0 max-lg:w-full space-y-3 justify-center">
              <span className="text-gray-700 text-lg">You Can</span>
              <h1 className="text-4xl font-bold"><span className="text-purple-600">Manage</span> payments</h1>
              <p className="text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quasi tempora odio dicta sint eum iure quae veniam error fugit.</p>
              <Link href="/" className="flex gap-2 text-purple-400">Learn more <span><ArrowRight /></span> </Link>
            </div>
            <div className="flex flex-col ml-auto p-10 w-6/12 max-lg:mr-0 max-lg:w-full relative">
            <img
                loading="lazy"
                srcSet="/image3.png"
                className="w-full aspect-[1.3] max-md:mt-10"
              />
            </div>
            
        </div>
      </div>
      {/* next */}
      <div className="flex justify-center relative items-center px-16 py-16 w-full max-md:px-5 max-md:max-w-full">
        <div className="bg-gray-100 relative overflow-hidden p-16 text-center rounded-xl">
        <div className='absolute lg:block w-[200px] md:w-[250px] h-[200px] md:h-[250px] transform rounded-xl rotate-[14deg] -bottom-[5rem] -left-32 bg-red-400'></div>
                    <div className='absolute lg:block w-[180px] md:w-[250px] h-[180px] md:h-[250px] transform rounded-xl rotate-[14deg] -top-[5rem] -right-20 bg-red-400'></div>
        <div className="space-y-8 w-9/12 mx-auto">
          <h4 className="text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas velit vero provident doloremque suscipit corporis ducimus, expedita earum dicta quo ut quod quas excepturi ad sint dolore porro quibusdam officiis.</h4>
          <Link href="/merchant/login">
          <Button className="bg-red-400">
              Open Account
          </Button>
          </Link>
        </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="mb-4 sm:mb-0">
                    <h3 className="text-lg font-bold mb-2">Company</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Our Services</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className="mb-4 sm:mb-0">
                    <h3 className="text-lg font-bold mb-2">Resources</h3>
                    <ul>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>
                <div className="mb-4 sm:mb-0">
                    <h3 className="text-lg font-bold mb-2">Legal</h3>
                    <ul>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="mb-4 sm:mb-0">
                    <h3 className="text-lg font-bold mb-2">Connect</h3>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
      
    </div>
  );
}
