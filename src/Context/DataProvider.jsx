import { createContext, useState, useEffect } from 'react'
import md5 from 'md5';
import Axios from 'axios'
import { getAPI } from '../Helper/Helper';

export const DataProviderContext = createContext(false);

export const DataProvider = ({children}) => {
    const [characters, setCharacters] = useState(null);
    const [hero, setHero ] = useState(null);
    const [comics, setComics ] = useState(null);
    const [series, setSeries ] = useState(null);
    const getHero = async () => {
           let ceros = Math.floor(Math.random() * 10);
           if(ceros === 2 && ceros !== 0){
             ceros = 1000
           }else{ ceros = 100}
           if(ceros === 3 && ceros !== 0){
            ceros = 10000
           }else{ ceros = 100}
           let IDSeries = Math.floor(Math.random() * ceros);
           getAPI(['series', IDSeries], null, setHero);

    }
 

  
    useEffect(() => {
      getAPI(['characters'], 10, setCharacters);
      getHero();
      getAPI(['comics'], 10, setComics);
      getAPI(['series'], 10, setSeries);
    },[])


    return (
        <DataProviderContext.Provider value={{characters, hero, comics, series}} >
            {children}
        </DataProviderContext.Provider>
  
    )
}