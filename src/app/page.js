import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white flex min-h-screen flex-col items-center md:p-24 py-10 px-4">
      <div className="text-center w-full mx-auto">
        <h1 className="text-6xl font-bold mb-2">Let's GO!</h1>
        <p className="text-xl">Воплоти свою идею в реальность вместе с nFactorial!</p>

        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex rounded-md shadow">
            <button type="button" className="py-4 px-6  bg-orange-600 hover:bg-orange-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
              Get started
            </button>
          </div>
        </div>
      </div>


      <div className="container flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-3 md:mt-20">
    <h2 className="mb-1 text-4xl font-extrabold leading-tight text-gray-900">Our advantages</h2>
    <p className="mb-12 text-lg text-gray-500">Наши выпускники успешно работают в Apple, Google, Facebook</p>
    <div className="w-full">
        <div className="flex flex-col w-full mb-10 sm:flex-row">
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className=" h-full ml-0 mr-0 sm:mr-10">
                    <span className=" left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                    <div className="h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                        <div className="flex items-center -mt-1">
                            <h3 className="my-2 ml-1 text-lg font-bold text-gray-800">Наша Команда</h3>
                        </div>
                        <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
                        <p className="mb-2 text-gray-600">A decentralized application (dapp) is an application built on a
                            decentralized network that combines a smart contract and a frontend user interface.</p>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-1/2">
                <div className=" h-full ml-0 md:mr-10">
                    <span className="left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                    <div className=" h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                        <div className="flex items-center -mt-1">
                            <h3 className="my-2 ml-1 text-lg font-bold text-gray-800">nFactorial Incubator</h3>
                        </div>
                        <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">------------</p>
                        <p className="mb-2 text-gray-600">Web 3.0 is the third generation of Internet services that will
                            focus on understanding and analyzing data to provide a semantic web.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col w-full mb-5 sm:flex-row">
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="h-full ml-0 mr-0 sm:mr-10">
                    <span className="left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                    <div className=" h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                        <div className="flex items-center -mt-1">
                            <h3 className="my-2 ml-1 text-lg font-bold text-gray-800">Лучшие менторы</h3>
                        </div>
                        <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">------------</p>
                        <p className="mb-2 text-gray-600">A Project Audit is a formal review of a project, which is intended
                            to assess the extent up to which project management standards are being upheld.</p>
                    </div>
                </div>
            </div>
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className=" h-full ml-0 mr-0 sm:mr-10">
                    <span className="left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                    <div className=" h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                        <div className="flex items-center -mt-1">
                            <h3 className="my-2 ml-1 text-lg font-bold text-gray-800">Курсы и программы</h3>
                        </div>
                        <p className="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">------------</p>
                        <p className="mb-2 text-gray-600">A security hacker is someone who explores methods for breaching
                            defenses and exploiting weaknesses in a computer system or network.</p>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-1/2">
                <div className=" h-full ml-0 md:mr-10">
                    <span className="left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                    <div className=" h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                        <div className="flex items-center -mt-1">
                            <h3 className="my-2 ml-1 text-lg font-bold text-gray-800">Бесплатные мастерклассы</h3>
                        </div>
                        <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">------------</p>
                        <p className="mb-2 text-gray-600">Bot development frameworks were created as advanced software tools
                            that eliminate a large amount of manual work and accelerate the development process.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </main>
  );
}
