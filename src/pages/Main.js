import { useState } from 'react';
import RecentChats from "./RecentChats";
import Settings from "./Settings";
import Posts from "./Posts";

const Main = () => {
    const [state, setState] = useState(<RecentChats />);

    const handleClick = (e) => {
        e.preventDefault();
        let element = e.target.parentNode.parentNode;
        let classes = element.className.split(" ");
        if (classes.length < 3) {
            removeClasses(document.getElementsByClassName('svgs'));
            element.childNodes[0].classList.add('fill-[#2F80ED]');
            setState(render(classes[1]));
        }
    };

    const removeClasses = (elements) => {
        for(let i = 0; i < elements.length; i++) {
            elements[i].classList.remove('fill-[#2F80ED]');
        }
    };

    const render = (element) => {
        if(element === 'messages') {
            return <RecentChats />;
        }

        if(element === 'posts') {
            return <Posts />;
        }

        if(element === 'settings') {
            return <Settings />;
        }
    };

    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-80 mt-14">
                {state}
                <div className="fixed h-20 w-80 bottom-0 border-t">
                    <div className="h-full flex flex-row justify-between items-center px-4">
                        <a className="cursor-pointer messages" onClick={handleClick} href="/">
                            <svg className="w-5 fill-[#4F5E7B] fill-[#2F80ED] svgs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M256 32C114.6 32 .0272 125.1 .0272 240c0 49.63 21.35 94.98 56.97 130.7c-12.5 50.37-54.27 95.27-54.77 95.77c-2.25 2.25-2.875 5.734-1.5 8.734C1.979 478.2 4.75 480 8 480c66.25 0 115.1-31.76 140.6-51.39C181.2 440.9 217.6 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32z"/>
                            </svg>
                        </a>
                        <a className="cursor-pointer posts" onClick={handleClick} href="/">
                            <svg className="w-5 fill-[#4F5E7B] svgs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M0 224C0 188.7 28.65 160 64 160H128V288C128 341 170.1 384 224 384H352V448C352 483.3 323.3 512 288 512H64C28.65 512 0 483.3 0 448V224zM224 352C188.7 352 160 323.3 160 288V64C160 28.65 188.7 0 224 0H448C483.3 0 512 28.65 512 64V288C512 323.3 483.3 352 448 352H224z"/>
                            </svg>
                        </a>
                        <a className="cursor-pointer calls" onClick={handleClick} href="/">
                            <svg className="w-5 fill-[#4F5E7B] svgs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"/>
                            </svg>
                        </a>
                        <a className="cursor-pointer settings" onClick={handleClick} href="/">
                            <svg className="w-5 fill-[#4F5E7B] svgs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;