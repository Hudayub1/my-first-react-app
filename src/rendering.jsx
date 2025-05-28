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
// function List(props) {
//   return (
//     <ul>
//       {props.animals.map((animal) => {
//         return animal.startsWith("L") && <li key={animal}>{animal}</li>;
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





        /* if else conditional */

// function List(props) {
//   if (!props.animals) {
//     return <div>Loading...</div>;
//   }

//   if (props.animals.length === 0) {
//     return <div>There are no animals in the list!</div>;
//   }

//   return (
//     <ul>
//       {props.animals.map((animal) => {
//         return <li key={animal}>{animal}</li>;
//       })}
//     </ul>
//   );
//   }

// function Render() {
//   const animals = ['Kitten'];

//   return (
//     <div>
//       <h1>Animals: </h1>
//       <List animals={animals} />
//     </div>
//   );
//   }
  
// export default Render;        




        /* 2nd ternary and && operator */

// function List(props) {
//   return (
//     <>
//       {!props.animals ? (
//         <div>Loading...</div>
//       ) : props.animals.length > 0 ? (
//         <ul>
//           {props.animals.map((animal) => {
//             return <li key={animal}>{animal}</li>;
//           })}
//         </ul>
//       ) : (
//         <div>There are no animals in the list!</div>
//       )}
//     </>
//   );
// }

// or
function List(props) {
  return (
    <>
      {!props.animals && <div>Loading...</div>}
      {props.animals && props.animals.length > 0 && (
        <ul>
          {props.animals.map((animal) => {
            return <li key={animal}>{animal}</li>;
          })}
        </ul>
      )}
      {props.animals && props.animals.length === 0 && <div>There are no animals in the list!</div>}
    </>
  );
}

function Render() {
  const animals = [];

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
} 

export default Render;


// Reddit comments say ternary operators are better than && operator for conditional rendering

