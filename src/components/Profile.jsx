import profilePic from '../assets/profile/profilepic.jpg';

const Profile = () => {
    return (
        <>
        <div className="relative flex min-h-screen items-end justify-center" id="profile">
          <img src={profilePic} alt="Edwardo Cervantes" className="absolute inset-0 z-10 h-full w-full object-cover" />
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent from-60% to-black lg:from-30%"></div>
                <div className="z-20 mx-4 max-w-3xl pb-20">
                <h1 className="text-5xl font-semibold uppercase tracking-wide md:text-7xl">
                    Edwardo Cervantes
                </h1>
                <p className="text-2xl pt-2 font-semibold">
                    I'm a full-stack developer and dabble in graphic design on the side.
                </p>
                </div>
            </div>
        </>
    )
}

export default Profile