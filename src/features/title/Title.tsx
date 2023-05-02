import { useAppSelector } from "../../app/hooks";

function Title(){
    const title=useAppSelector(state=>state.title.title);
    return title ? <p>
        {title}
    </p> : <>Loading...</>
}

export default Title;