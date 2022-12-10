import { createContext, useContext,useState } from "react";
import "../../Index.css"

const initialState = {temas: {
  light: {
    backgroundHome: "white",
    backgroundNav: "rgb(204, 204, 204)",
    color: "black",
    inverted: "invert(0)",
    cardBackground: "transparent",
    themeButtonIcon: "☀"
  },
  dark: {
    backgroundNav: "rgba(19, 20, 19, 0.7)",
    backgroundHome: "rgba(18, 18, 18, 0.59)",
    inverted: "invert(1)",
    color: "white",
    cardBackground: "#222",
    themeButtonIcon: "🌙",
  },
 },
}
export const GlobalStates = createContext(initialState);

export const Context = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  
  const [tema, setTema]=useState(initialState.temas.light)
  const handleTema = () => {
    if (tema === initialState.temas.dark) {
      setTema(initialState.temas.light)
    }
    if (tema === initialState.temas.light) {
      setTema(initialState.temas.dark)

    }
  };
  const [Favs, setFavs] = useState(
    JSON.parse(localStorage.getItem("favs") || "[]")
  );
  return (
    <GlobalStates.Provider value={{tema,handleTema,setTema,Favs,setFavs}}>
      {children}
    </GlobalStates.Provider>
  )
}

export default Context;
export const useGlobalStates=()=>{
    return useContext(GlobalStates)
};