// import SearchBar from "../SearchBar/SearchBar";
// import style from "./CatalogSearch.module.css";
// import GlobalContext from "../../Context/GlobalContext";
// import { useContext } from "react";
// import { useParams } from "react-router-dom";

// function CatalogSearch() {
//   const { mediaList } = useContext(GlobalContext);

//   console.log(mediaList);
//   return (
//     <>
//       <SearchBar />
//       <div>
//         {mediaList.length > 1 &&
//           mediaList.map((media) => (
//             <div key={media.id}>
//               <h3>{media.title ? media.title : media.name}</h3>
//               <p>
//                 {media.original_title
//                   ? media.original_title
//                   : media.original_name}
//               </p>
//               {/* <p>{media.original_language}</p> */}
//               <img
//                 className=""
//                 src={`src/assets/${media.original_language}.png`}
//                 // onError={this.onerror=null this.src="src/assets/jp.png"}
//               ></img>

//               <p>{media.vote_average}</p>
//             </div>
//           ))}
//       </div>
//     </>
//   );
// }

// export default CatalogSearch;
