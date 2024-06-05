const About = () => {
    return (
        <div className="bg-white">
            <div className="sm:flex items-center max-w-screen-2xl">
                <div className="sm:w-1/2 p-10">
                    <div className="image object-center text-center">
                        <img src="https://img.pikbest.com/png-images/20211011/team-leader-and-teamwork-concept_6140386.png!sw800" alt="teamImage"/>
                    </div>
                </div>
                <div className="sm:w-1/2 p-5">
                    <div className="text">
                        <span className="text-gray-500 border-b-2 border-orange-600 uppercase">About us</span>
                        <h2 className="my-4 font-bold text-3xl  sm:text-5xl ">Команда лучших и самых заботливых <span className="text-orange-600"> наставников </span>
                        </h2>
                        <p className="text-gray-700 font-medium">
                        nFactorial однозначно лучший старт для карьеры в IT
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;

