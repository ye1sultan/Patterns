import { useNavigate } from "react-router-dom";

const Chat = (props) => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Submitted!');
    };

    const handleClick = () => {
        navigate(-1);
    };

    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-80 mt-14">
                <div className="flex flex-row items-center border-b py-4 ">
                    <button className="mr-5" onClick={handleClick}>
                        <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 7.00003H4.414L9.707 1.70703L8.293 0.29303L0.585999 8.00003L8.293 15.707L9.707 14.293L4.414 9.00003H19V7.00003Z" fill="#4F5E7B"/>
                        </svg>
                    </button>
                    <div className="flex flex-row items-center">
                        <img className="rounded-full w-12 h-12 mr-2.5" src="https://random.imagecdn.app/300/300" alt="Avatar"/>
                        <div className="flex flex-col">
                            <div className="text-lg font-semibold text-[#1B1A57]">
                                Dinara Ismagambetova
                            </div>
                            <div className="text-xs text-[#4F5E7B]">
                                Online
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fixed h-20 w-80 bottom-0">
                    <form className="flex flex-row px-2 w-full justify-between" onSubmit={handleSubmit}>
                        <div className="flex flex-row items-center">
                            <div className="mr-4 cursor-pointer">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.5">
                                        <path d="M12 1.99999C6.486 1.99999 2 6.48599 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.48599 17.514 1.99999 12 1.99999ZM12 20C7.589 20 4 16.411 4 12C4 7.58899 7.589 3.99999 12 3.99999C16.411 3.99999 20 7.58899 20 12C20 16.411 16.411 20 12 20Z" fill="#1B1A57"/>
                                        <path d="M14.829 14.828C14.4635 15.1923 14.0317 15.4835 13.557 15.686C12.7023 16.0468 11.7488 16.0995 10.8595 15.835C9.97028 15.5705 9.20055 15.0053 8.68199 14.236L7.02399 15.355C7.45642 15.9931 8.00658 16.543 8.64499 16.975C9.29464 17.4143 10.0246 17.7212 10.793 17.878C11.5898 18.0405 12.4112 18.0405 13.208 17.878C13.9763 17.7209 14.7062 17.4141 15.356 16.975C15.669 16.763 15.968 16.517 16.242 16.244C16.514 15.973 16.762 15.673 16.976 15.355L15.318 14.236C15.1743 14.4485 15.0105 14.6467 14.829 14.828Z" fill="#1B1A57"/>
                                        <path d="M15.493 11.986C16.3176 11.986 16.986 11.3176 16.986 10.493C16.986 9.66844 16.3176 9 15.493 9C14.6684 9 14 9.66844 14 10.493C14 11.3176 14.6684 11.986 15.493 11.986Z" fill="#1B1A57"/>
                                        <path d="M8.5 12C9.32843 12 10 11.3284 10 10.5C10 9.67157 9.32843 9 8.5 9C7.67157 9 7 9.67157 7 10.5C7 11.3284 7.67157 12 8.5 12Z" fill="#1B1A57"/>
                                    </g>
                                </svg>
                            </div>
                            <input className="outline-none text-sm" type={'text'} placeholder="Write a message..."/>
                        </div>
                        <button className="rounded-full w-10 h-10 bg-[#2F80ED] flex justify-center items-center pl-1" type="submit">
                            <svg className="fill-[#ffffff]" width="16" height="14" viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.59168 1.71245L2.38083 6.25004H7.25001C7.66422 6.25004 8.00001 6.58582 8.00001 7.00004C8.00001 7.41425 7.66422 7.75004 7.25001 7.75004H2.38083L1.59168 12.2876L13.9294 7.00004L1.59168 1.71245ZM0.988747 7.00004L0.0636748 1.68087C-0.0111098 1.25086 0.128032 0.811352 0.436661 0.502722C0.824446 0.114942 1.40926 0.00231168 1.91333 0.218342L15.3157 5.9622C15.7308 6.14013 16 6.54835 16 7.00004C16 7.45172 15.7308 7.85995 15.3157 8.03788L1.91333 13.7817C1.40926 13.9978 0.824446 13.8851 0.436661 13.4974C0.128032 13.1887 -0.01111 12.7492 0.0636748 12.3192L0.988747 7.00004Z"/>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Chat;