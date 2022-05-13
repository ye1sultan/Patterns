import Title from "../components/Titile";
import Footer from "../components/Footer";

const Home = () => {

    const LatestUsers = {
        //There must be arr/obj that contains information about latest chat
    }

    let employeeList = [];
    Array.from([1, 2, 3]).forEach((element, index) => {
        employeeList.push(
            <div className="flex flex-row h-16 w-full items-center mb-3 relative">
                <img className="rounded-full w-12 h-12 mr-4" src="https://random.imagecdn.app/300/300" alt="Avatar"/>
                <div className="self-start mt-2.5">
                    <div className="text-sm text-[#1B1A57] font-medium">
                        Dinara Ismagambetova
                    </div>
                    <div className="text-xs text-[#4F5E7B] mt-1.5 flex flex-row items-center">
                        <svg class="mr-2" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.596008 5.16132L3.75801 7.57465L8.83534 1.77199L7.83134 0.894653L3.57534 5.75865L1.40401 4.10132L0.596008 5.16132ZM13.502 1.77199L12.498 0.894653L8.25201 5.74732L7.75001 5.34599L6.91668 6.38732L8.41467 7.58599L13.502 1.77199Z" fill="#4F5E7B"></path>
                        </svg>
                        
                        I wanna eat, take me mc chicken pls
                    </div>
                </div>
                <div className="absolute text-xs text-[#333333] right-2.5 top-3.5 font-medium">
                    11:11
                </div>
            </div>
        );
    });

    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-80 mt-14">
                <Title title={"Recent Chats"} />
                <div className="flex flex-col w-full">
                    {employeeList}
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Home;