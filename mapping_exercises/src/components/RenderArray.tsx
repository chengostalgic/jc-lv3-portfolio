
export const RenderArray = () =>{
    const foods = ["burger", "fries", "chicken"];
    return (<div>
        {foods.map((food)=>{
            return(<h3>{food}</h3>);})}
    </div>);
}