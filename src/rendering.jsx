        /* Rendering List Elements */ 

// function Render() {
//     const animals = ["Lion", "Cow", "Snake", "Lizard"];
//     const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>)
  
//     return (
//       <div>
//         <h1>Animals: </h1>
//         <ul>
//             {animalsList}
//         </ul>
//       </div>
//     );
//   }
  
//   export default Render;



        /* Rendering List Components */

// function ListItem(props) {
//     return <li>{props.animal}</li>
//   }

//   function List(props) {
//     return (
//       <ul>
//         {props.animals.map((animal) => {
//           return <ListItem key={animal} animal={animal} />;
//         })}
//       </ul>
//     );
//   }


// function Render() {
//     const animals = ["Lion", "Cow", "Snake", "Lizard"];

//     return (
//         <div>
//           <h1>Animals: </h1>
//           <List animals={animals} />
//         </div>
//       );
//     }
    


// export default Render;


      /* Conditional rendering using ternary operator */
// function List(props) {
//   return (
//     <ul>
//       {props.animals.map((animal) => {
//         return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;
//       })}
//     </ul>
//   );
// }

// function Render() {
//   const animals = ["Lion", "Cow", "Snake", "Lizard"];

//   return (
//     <div>
//       <h1>Animals: </h1>
//       <List animals={animals} />
//     </div>
//   );
// }
// export default Render;


      /* Conditional rendering using && operator */
function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return animal.startsWith("L") && <li key={animal}>{animal}</li>;
      })}
    </ul>
  );
}

function Render() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
}
export default Render;