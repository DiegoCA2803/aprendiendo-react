import { useState } from "react";

export function TwitterFollowCard({ userName = '', name, InitialIsFollowing }) {

    const [isFollowing, setIsFollowing] = useState(InitialIsFollowing);
    const text = isFollowing ? 'Siguiendo' : 'Seguir';



    const buttonClassName = isFollowing
        ? 'ml-4 border-1 w-72 h-auto  border-red-500 rounded-full px-2  border-red-600 font-bold bg-transparent text-black flex text-center justify-center transition cursor-pointer hover:bg-red-600 '
        : 'ml-4 border-1 w-72 h-auto  border-red-500 rounded-full px-2  font-bold bg-white text-black flex text-center justify-center cursor-pointer hover:bg-cyan-500 transition';

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    return (
        <article className="flex items-center = text-white text-lg  justify-between ">
            <header className="flex items-center gap-1">
                <img className="w-12 h-12 rounded-full border-1 " src={`https://unavatar.io/${userName}`} alt="Avatar" />
                <div className="flex flex-col">
                    <strong>{name}</strong>
                    <span className="opacity-60">@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <div className={isFollowing ? "hover:hidden block" : " block "}>
                        <span >
                            {text}
                        </span>
                    </div>
                    <div className={isFollowing ? "hover:block hidden " : " hidden "}>
                        <span  >
                            Dejar de seguir
                        </span>
                    </div>


                </button>
            </aside>
        </article>
    );
}