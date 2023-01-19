const CardList = (props) => {
    return (
        <ul>
            {
                props.cards.map((card, index) => {
                    return (
                        <li key={index}>
                            <img src={card.image}
                                alt={card.value} />
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default CardList