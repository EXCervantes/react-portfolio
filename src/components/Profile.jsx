import profilePic from '../assets/profile/profilepic.jpg';

const Profile = () => {
    return (
        <>
        <div className="relative flex min-h-screen items-end justify-center" id="profile">
          <img src={profilePic} alt="Edwardo Cervantes" className="absolute inset-0 z-10 h-full w-full object-cover" />
                <div className="absolute inset-0 z-10 bg-gradient-to-b dark:bg-gradient-to-b dark:from-transparent from-60% to-cyan-50 from-transparent dark:to-black lg:from-75% dark:lg:from-30%"></div>
                <div className="z-20 mx-4 max-w-3xl pb-20">
                <h1 className="text-slate-200 text-5xl font-semibold uppercase tracking-wide md:text-7xl" id="hero-name">
                    Edwardo Cervantes
                </h1>
                <p className="text-slate-200 text-2xl pt-2 font-semibold" id="hero-text">
                    I'm a full-stack developer and dabble in graphic design on the side.
                </p>
                </div>
            </div>
        </>
    )
}

export default Profile