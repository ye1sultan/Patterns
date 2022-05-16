const Post = (props) => {
    return (
        <div className="w-72 bg-[#F7F7F7] px-4 py-2 mb-4 relative">
            {props.text}
            <div className="absolute -right-8 bottom-1 flex flex-row-reverse">
                <img className="rounded-full w-7 h-7 ml-2 -mt-2" src="https://random.imagecdn.app/300/300" alt="Avatar"/>
                <div className="text-xs text-[#333333] font-medium mt-1">
                    {props.time}
                </div>
            </div>
        </div>
    );
};

export default Post;