import React from 'react';
import './styles.css';

const Lista = () =>{
    return(
        <>
        <div className="resultado">
            <h1>Resultado por:</h1>
            <p>Calça Jeans</p>
        </div>

        <main>
            <h1>Filtros</h1>
            <div className="preco">
                <form>
                    <h2>Preço</h2>
                    <label for="min">Min</label>
                    <input type="text" id="min" name="min"/>
                    <label for="max">Max</label>
                    <input type="text" id="max" name="max"/>
                    <button type="submit">Aplicar</button>
                </form>
            </div>
            <form className="cor">
                <h2>Cor</h2>
                <input type="text" />
            </form>
        </main>
        </>

    )
}
export default Lista