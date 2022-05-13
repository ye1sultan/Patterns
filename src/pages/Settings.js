import Title from "../components/Titile";
import Footer from "../components/Footer";
import Setting from "../components/Setting";

const Settings = () => {

    const settings = {
        account: {
            icon: 'M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z',
            name: 'Account',
            hasNav: true,
            nav: ''
        },
        notification: {
            icon: 'M256 32V51.2C329 66.03 384 130.6 384 208V226.8C384 273.9 401.3 319.2 432.5 354.4L439.9 362.7C448.3 372.2 450.4 385.6 445.2 397.1C440 408.6 428.6 416 416 416H32C19.4 416 7.971 408.6 2.809 397.1C-2.353 385.6-.2883 372.2 8.084 362.7L15.5 354.4C46.74 319.2 64 273.9 64 226.8V208C64 130.6 118.1 66.03 192 51.2V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32H256zM224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512z',
            name: 'Notification',
            hasNav: true,
            nav: ''
        },
        privacyAndSecurity: {
            icon: 'M256-.0078C260.7-.0081 265.2 1.008 269.4 2.913L457.7 82.79C479.7 92.12 496.2 113.8 496 139.1C495.5 239.2 454.7 420.7 282.4 503.2C265.7 511.1 246.3 511.1 229.6 503.2C57.25 420.7 16.49 239.2 15.1 139.1C15.87 113.8 32.32 92.12 54.3 82.79L242.7 2.913C246.8 1.008 251.4-.0081 256-.0078V-.0078zM256 444.8C393.1 378 431.1 230.1 432 141.4L256 66.77L256 444.8z',
            name: 'Privacy and security',
            hasNav: true,
            nav: ''
        },
        about: {
            icon: 'M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z',
            name: 'About',
            hasNav: false,
            nav: ''
        },

    };

    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-80 mt-14">
                <Title title={"Settings"} />
                <div className="flex flex-row">
                    <img className="rounded-full w-16 h-16 mr-6" src="https://random.imagecdn.app/300/300" alt="Avatar" />
                    <div className="flex flex-col">
                        <div className="text-lg text-[#1B1A57] mb-1 font-medium">
                            Dinara Ismagambetova
                        </div>
                        <div className="text-xs text-[#4F5E7B]">
                            Trust your feelings , be a good human beings
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full mt-6">
                    <Setting icon={settings.account.icon} name={settings.account.name} hasNav={settings.account.hasNav} nav={settings.account.nav} />
                    <Setting icon={settings.notification.icon} name={settings.notification.name} hasNav={settings.notification.hasNav} nav={settings.notification.nav} />
                    <Setting icon={settings.privacyAndSecurity.icon} name={settings.privacyAndSecurity.name} hasNav={settings.privacyAndSecurity.hasNav} nav={settings.privacyAndSecurity.nav} />
                    <Setting icon={settings.about.icon} name={settings.about.name} hasNav={settings.about.hasNav} nav={settings.about.nav} />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Settings;