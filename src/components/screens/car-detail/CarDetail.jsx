import { useParams } from "react-router-dom"

const CarDetail = () => {
    const {id} = useParams()

    return <div>{id}</div>
}

export default CarDetail