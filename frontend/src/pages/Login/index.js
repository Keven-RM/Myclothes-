import { React, Component} from "react"
import api from '../../services/api'

export default function Login(){
    
    function componentDidMount(){
        this.LoadUser();
    }

    async function LoadUser(){
        const response = await api.get("/usuario");
        this.setState({ products: response.data });
        console.log(response.data)
    };
  
    return(
        <>
        <form action="get">
            <input name="nome" type="text" placeholder="Login" />
            <input name="senha" type="text" placeholder="senha"/>
            <button type="submit">Logar</button>
        </form>
        </>

    )

}