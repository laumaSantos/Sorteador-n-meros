import {useState} from 'react'

export default function Sorteador(props){
    const [qtde, setQtde] = useState(props.qtde || 6)
    const numerosIniciais = gerarNumeros(qtde)
    const [numeros, setNumeros] = useState(numerosIniciais)

    function gerarNumeroNaoContido(min, max, array){
        const aleatorio = parseInt(Math.random() * (max + 1 - min) + min)
        return array.includes(aleatorio) ? 
        gerarNumeroNaoContido(min, max, array) : 
        aleatorio
    }

    function gerarNumeros(qtde){
        const numeros = Array(qtde)
        .fill(0)
        .reduce((nums)=> {
            const novoNumero = gerarNumeroNaoContido(1, 60, nums)
            return [...nums, novoNumero]
        }, [])
        .sort((n1,n2) => n1-n2)

        return numeros
    }

    console.log(gerarNumeroNaoContido(1,5,[1,2,3]))
    return (
        <div>
            <h2>Mega</h2>
            <h3>{numeros.join(' ')}</h3>
           <div>
            <label htmlFor=''>
                Quantidade de números
            </label>
            <input
                type="number" 
                value={qtde}
                onChange={e =>setQtde(+e.target.value)}
             />
            </div>
            <button onClick={()=>setNumeros(gerarNumeros(qtde))}>Gerar números</button>


        </div>
    )
}