import { createContext} from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) =>{

    const produtosBar = [
        { id: 1, nome: 'Cerveja lata', valor: 8.00 },
        { id: 2, nome: 'Cerveja long neck', valor: 10.00 },
        { id: 3, nome: 'Refrigerante lata', valor: 6.00 },
        { id: 4, nome: 'Água mineral', valor: 4.00 },
        { id: 5, nome: 'Caipirinha', valor: 15.00 },
        { id: 6, nome: 'Dose de cachaça', valor: 7.00 },
        { id: 7, nome: 'Porção de batata frita', valor: 20.00 },
        { id: 8, nome: 'Porção de calabresa', valor: 25.00 },
        { id: 9, nome: 'Amendoim torrado', valor: 5.00 },
        { id: 10, nome: 'Energético', valor: 12.00 }]
    return(
        <GlobalContext.Provider value={{produtosBar}}>
            {children}
        </GlobalContext.Provider>
    )      

}


