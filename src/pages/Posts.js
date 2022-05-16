import Post from "../components/Post";
import Title from "../components/Title";

const Posts = () => {
    const allPosts = {
        numberOfPosts: 4,
        posts: {
            post1: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus sagittis orci, in faucibus felis rutrum in. Ut eget faucibus diam. Curabitur lobortis sapien vitae urna fringilla scelerisque. In at nulla et enim ultrices semper non in purus. Nullam sit amet vulputate libero, sed consectetur erat.',
                time: '12:34'
            },
            post2: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus sagittis orci, in faucibus felis rutrum in. Ut eget faucibus diam. Curabitur lobortis sapien vitae urna fringilla scelerisque. In at nulla et enim ultrices semper non in purus. Nullam sit amet vulputate libero, sed consectetur erat.',
                time: '12:35'
            },
            post3: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus sagittis orci, in faucibus felis rutrum in. Ut eget faucibus diam. Curabitur lobortis sapien vitae urna fringilla scelerisque. In at nulla et enim ultrices semper non in purus. Nullam sit amet vulputate libero, sed consectetur erat.',
                time: '12:36'
            },
            post4: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus sagittis orci, in faucibus felis rutrum in. Ut eget faucibus diam. Curabitur lobortis sapien vitae urna fringilla scelerisque. In at nulla et enim ultrices semper non in purus. Nullam sit amet vulputate libero, sed consectetur erat.',
                time: '12:37'
            }
        }
    }

    return (
        <>
            <Title title={"Posts"} />
            <div className="flex flex-col pt-2">
                <Post text={allPosts.posts.post1.text} time={allPosts.posts.post1.time}/>
            </div>
        </>
    );
};

export default Posts;