import logo from './logo.svg';
import './App.css';

{/* 🦄🦄 */}

function App() {
  return (
    <div className="App">
     
 {/*<Food fav="kimchi"/>
    <Food fav="ramen"/>
    <Food fav="rice"/>
    <Food fav="bread"/> */}

{/* 🦄🦄 #2 2 .map(~), props */}

{/* 
1. { }
2. .map(~)
3. .map( ( a ) => <컴포넌트이름/> )  */}
  
{
  foodILike.map((a)=>
      <Food name={a.name} picture={a.image}/>
  )
}
    </div>
  );
}


{/* #2 2 */}
function Food({ name, picture }) {
  return (
      <div>
        <h2>I like {name}</h2>
        <img src={picture} />
      </div>
    );
  }	
  
{/* #2 2 */}
  const foodILike = [
    {
      name: "Kimchi",
      image:
        "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
    },
    {
      name: "Samgyeopsal",
      image:
        "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
    },
    {
      name: "Bibimbap",
      image:
        "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
    },
    
  ];
  

export default App;
