import Container from "react-bootstrap/Container";
import FlapDiffClock from "./diffclock";

function FlapDiffClockTile(props:{ntime:Date, otime:Date, msgTop?:string, msgBottom?:string, msgleft?:string, msgright?:string, up?:boolean, desc?:string}){

    return <Container>
        {props.msgTop?<><h2>{props.msgTop}</h2></>:<></>}
        <FlapDiffClock ntime={props.ntime} otime={props.otime} msgright={props.msgright} msgleft={props.msgleft} up={props.up}/>
        {props.msgBottom?<><br/><h2>{props.msgBottom}</h2></>:<></>}
        {props.desc?<p>{props.desc}</p>:<></>}
    </Container>

}

export default FlapDiffClockTile;