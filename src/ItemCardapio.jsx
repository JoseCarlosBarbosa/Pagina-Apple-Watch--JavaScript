//import { enroladinhoMignon } from "./cardapio";

export function ItemCardapio(props) {
    return <div className="container-item-cardapio">
        <div>
            <h2>{props.nome}</h2>
            <p>{props.preco}</p>
            <p>{props.descricao}</p>
        </div>
        <img src={props.imagem} alt=""></img>
    </div>

}
// map, permite pegar qualquer lista de valores, e diz oque quer fazer com cada um dos elementos