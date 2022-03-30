import { useParams } from "react-router-dom"

export default function Profile() {

    const { name } = useParams();

    return(
        <div>
            <h4>
                Profile de {name}
            </h4>
        </div>
    )
};
