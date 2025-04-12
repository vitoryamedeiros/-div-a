import './card.css';

interface BlusinhaProps {
    image: string;
    title: string;
    price: string;
}

const Card = (props: BlusinhaProps) => {
    return (
        <div className="gloss-card">
            <img src={props.image} className="image"/>
            <div className="text">
                <h1>{props.title}</h1>
                <p>{props.price}</p>
            </div>
        </div>
    );
}

export default Card;