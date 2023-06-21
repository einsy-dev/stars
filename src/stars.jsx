import Star from "./star"

export default function Stars(props) {
    if (props.count > 5 || props.count < 1 || typeof (props.count) != 'number') return

    const arrayStars = [];

    for (let index = 0; index < props.count; index++) {
        arrayStars.push(<li key={index}><Star /></li>)
    }
    return (
        <ul>
            {arrayStars}
        </ul>
    )
}
