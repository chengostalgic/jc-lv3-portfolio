
export const RenderCards = () =>{
    const users = [{"name": "Bob", "email": "bbob@gmail.com"},
        {"name": "Wendy", "email": "wowendy@gmail.com"}
    ];
    return (<ul className="flex items-center justify-center">
        {users.map((user)=>{
            return(
                <article className="w-[400px] h-[200px] border-2 border-dashed">
                    <h1 key={user.name}>{user.name}</h1>
                    <h3 key={user.email}>{user.email}</h3>
                </article>
            
            );})}
    </ul>);
}