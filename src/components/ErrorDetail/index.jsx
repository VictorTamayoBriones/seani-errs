import { TextError } from "./styled"

export const ErrorDetail = ({error}) =>{

    return(
        <TextError>
            <p>{error?.solution}</p>
            <p><span>NOTA:</span> {error?.nota}</p>
        </TextError>
    )
}