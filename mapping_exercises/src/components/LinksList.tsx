
export const LinksList = () =>{
    const links = [
        {"site": "Google", "link":"https://www.google.com"},
        {"site":"YouTube","link":"https://www.youtube.com/"},
        
    ];
    return (<ul className="flex items-center justify-center">
        {links.map((item)=>{
            return(
                <li className="w-[300px] h-[50px] border-2 border-dashed ">
                    <a href={item.link}>{item.site}</a>
                </li>
            
            );})}
    </ul>);
}