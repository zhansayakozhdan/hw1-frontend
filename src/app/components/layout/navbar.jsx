import Link from "next/link";

const Navbar = () => {

    return (
        <nav className="bg-white sticky top-0">
            <div className="flex justify-between flex-wrap items-center mx-auto p-4">
                <a href="#" className="flex items-center">
                    <img className="h-12 w-auto" src="https://png.pngtree.com/png-clipart/20230324/original/pngtree-fire-vector-logo-icon-png-image_9001901.png" alt="logo" />
                    <span className="text-2xl font-semibold">My App</span>
                </a>

                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                
                <ul className="hidden md:flex justify-between space-x-1 font-medium">
                    <li>
                    <Link href="/" className="text-gray-900 p-3 hover:bg-orange-600 rounded-xl m-2 duration-200 hover:text-white">
                        Main
                    </Link>
                    </li>
                    <li>
                    <Link href="/about" className="text-gray-900 p-3 hover:bg-orange-600 rounded-xl m-2 duration-200 hover:text-white">
                        About us
                    </Link>
                    </li>
                    <li>
                    <Link href="/posts" className="text-gray-900 p-3 hover:bg-orange-600 rounded-xl m-2 duration-200 hover:text-white">
                        Mentors&apos; Posts
                    </Link>
                    </li>
                </ul>

            </div>
        </nav>
    )
};

export default Navbar;