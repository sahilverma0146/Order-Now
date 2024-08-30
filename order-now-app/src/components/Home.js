import { CartState } from "../Context/Context";
import Filter from "./Filter";
function Home() {
  const { state :{initial}} = CartState();
  console.log(initial);

  return (
    <>
    <Filter></Filter>
    <div>
      {
        initial.map((prod)=>{
          return <span>{prod.name}</span>
        })

      }
    </div>
      
      
    </>
  );
}

export default Home;
