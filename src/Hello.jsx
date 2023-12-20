import { useState } from "react"

function Hello({name = "World", children}) {
    const [idade, setIdade] = useState(18)
    const [occ, setOcc] = useState("Professor")
    return (
        <>
            <h1>Hello, {name}!</h1>
            <h2>Seu filho é {children}</h2>
            <p>Sua idade é {idade}</p>
            <p>Sua profissão é {occ}</p>
            <button
                onClick={() => setIdade(i => ++i)}
            >
                + 01 ano
            </button>
            <input type="text" value={occ} onChange={(e) => setOcc(e.target.value)} />
        </>
    )
}

export default Hello