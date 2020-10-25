import React from "react"

export default function Login(){

    return(
        <>
        <form>
            <input name="nome" type="text" placeholder="Login" />
            <input name="senha" type="text" placeholder="senha"/>
            <button type="submit">Logar</button>
        </form>
        </>
        
    )
}