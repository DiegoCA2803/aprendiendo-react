import { useState } from "react";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {   
    const users =[
        {
            InitialIsFollowing : true,
            userName:'midudev',
            name:"Miguel Angel Duran"
        },
        {
            InitialIsFollowing : false,
            userName:'TlexxsC',
            name:"Diego Castillo"
        },
        {
            InitialIsFollowing : true,
            userName:'pheralb',
            name:"Pablo Hernandez"
        }
    ]
    const yo = {userName:"TlexxsC",name: 'TlexxsC'}    
    return (
        <section className="flex flex-col gap-2">
            {
                users.map(user => {
                    const { userName,name,InitialIsFollowing} = user
                    return (
                        <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        InitialIsFollowing={InitialIsFollowing}
                        name={name}
                        ></TwitterFollowCard>
                    )
                })
            }
        </section>

    )

}
