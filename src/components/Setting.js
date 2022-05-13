const Setting = ({icon, name, hasNav, nav}) => {



    return (
        <div className="flex flex-row h-14 w-full justify-between items-center">
            <div className="flex flex-row items-center">
                <svg className="w-5 fill-[#2F80ED] mr-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d={icon}/>
                </svg>
                <div className="text-base text-[#4F5E7B]">
                    {name}
                </div>
            </div>
            { 
                hasNav ? 
                    <a className="cursor-pointer items-center">
                        <svg className="w-2 fill-[#4F5E7B] mr-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                            <path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/>
                        </svg>
                    </a> 
                : 
                    ''
            }
            
        </div>
    );
};

export default Setting;