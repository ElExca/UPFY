import { createContext, useState, useEffect } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const navigate = useNavigate();

    const [users, setUsers] = useState([]);

    const [songs, setSongs] = useState(() => {
        try {
            const SongsInLocalStorage = localStorage.getItem('canciones')
            return SongsInLocalStorage ? SongsInLocalStorage : []
        } catch (error) {
            return [];
        }
    });

    useEffect(() => {
        getUser();
    }, []);

    useEffect(() => {
        getSong();
    }, []);

    useEffect(() =>{
        localStorage.setItem("canciones", JSON.stringify(songs))
    }, [songs]);


    const getUser = async () => {
        await axios
            .get("http://localhost:8080/user")
            .then(({ data }) => setUsers(data.data));
    };


    const getSong = async () => {
        await axios
            .get("http://localhost:8080/song")
            .then(({ data }) => setSongs(data.data));
    };
    
    const createUserPost= async(user) => {
        const { name, email, password } = user;
        await axios.post("http://localhost:8080/user", { name, email, password });
        console.log("Exito");
        alert("Usuario Subido a BD")
        navigate("/login");
        getUser();
    }

    const login = (user) => {
        console.log(user);
        console.log(users);
        const userInDb = users.find((userInDB) => userInDB.name === user.name)
        if (userInDb){
            alert("Tu usuario es correcto")
            navigate("/");
            console.log(userInDb.id)
        }else{
            alert("Tu usuario es incorrecto")
        }

    }

    const canciones = () => {
        console.log(songs)
    }


return (
    <UserContext.Provider
        value={{createUserPost,login,canciones}}>
        {children}
    </UserContext.Provider>
    );
}