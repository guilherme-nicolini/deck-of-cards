import { useState, useEffect } from "react";
import CardList from "../card-list/card-list";
import Form from "../forms/form";

async function createDeck() {
    const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    const deck = await response.json()
    return deck.deck_id
}

async function getCards(deckId) {
    const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    return await response.json()
}



const DeckOfCards = () => {
    const [deck, setDeck] = useState({
        cards: []
    })

    useEffect(() => {
        const fetchData = async () => {
            const deckId = await createDeck()
            const data = await getCards(deckId)

            setDeck({
                cards: data.cards
            })

        }
        fetchData()
    }, [])

    const addCard = (newCard) => {
        setDeck({
            cards: [...deck.cards, newCard]
        })
    }

    return (
        <section>
            <Form addCard={addCard} />
            <CardList cards={deck.cards}/>
        </section>
    )

}

export default DeckOfCards