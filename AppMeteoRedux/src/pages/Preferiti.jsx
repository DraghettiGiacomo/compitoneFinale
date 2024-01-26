import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { REMOVE_FAVORITE } from "../action/favoriteActions";
import { useEffect, useState } from "react";

const Preferiti = () => {

    /* let storeCitta = useSelector((state) => state.city.list) */
    
    let navigate = useNavigate()
    const dispatch = useDispatch();
    
    let store = useSelector((state) => state)
    let preferiti = useSelector((state) => state.list)
    console.log(store);
    console.log(preferiti);
    
    let i = 0
    console.log(preferiti[i]);

    const [nomeDaCercare, setnodeDaCercare] = useState()

    function nuovoNome(){
        setnodeDaCercare(preferiti[i])
    }nuovoNome

    const APIkey = 'c7zheuja4UuojgEv6QkBOizP1TUZCFW2Jj8nyUsf511jxblpckGjrKnv';
    const url = `https://api.pexels.com/v1/search?query=${nomeDaCercare}`

    const [photos, setphotos] = useState()

    const fetchData = async () => {
        try{
            const risposta = await fetch(url ,{
                
                headers: {
                    'Authorization': APIkey 
                }}
            )
            if(risposta.ok){
                let data = await risposta.json()
                setphotos(data.photos)
                console.log(photos[i].src.original);
            } else {
              console.log('errore nella risposta fetch');
            }
        }
        catch(error){
            console.log('L\'errore è' + error);
        }
    }

    /* let singlephoto
    function spostafoto() {
        photos?.length > 0 ?
        singlephoto = photos[0]?.src?.original :
        console.log('non ci sono foto')
    } */

    useEffect(() => {
        fetchData()
        /* spostafoto() */
    }, [])

    return(
        <>
            <div id="containerSearchBar" className="container d-flex justify-content-between align-items-center mt-4">
                <i className="iconSearch bi bi-house-door" onClick={() => navigate('/')}></i>
                <i className="iconSearch bi bi-list-stars" onClick={() => navigate('/preferiti')}></i>
            </div>
            <div className="container mt-5" id="contenitorecitypreferite">
                <div className="row d-flex gap-4 justify-content-center">
                    {preferiti?.length > 0 ? preferiti.map((citta, index) =>
                    <div style={{width: '18rem', /* backgroundImage: `url(${photos[i]?.src?.original})` */}} key={index} className="cardCity col-2 rounded text-light card">
                        <div>
                            <h4 className="text-light card-title">{citta}</h4>
                        </div>
                        <i onClick={() => dispatch({ type: REMOVE_FAVORITE, payload: citta })} className="bi bi-trash3"></i>
                    </div>
                    ) : <p style={{marginTop: '12%'}} className="text-center display-6">Non ci sono città preferite</p>}
                </div>
            </div>
        </>
    )
}
export default Preferiti