import Container from "react-bootstrap/Container";
import FlapDiffClock from "./diffclock";

function FlapDiffClockTile(props:{ntime:Date, otime:Date, msgTop?:string, msgBottom?:string, msgleft?:string, msgright?:string}){

    return <Container>
        {props.msgTop?<><h2>{props.msgTop}</h2></>:<></>}
        {props.msgleft?<>{props.msgTop}</>:<></>}
        <FlapDiffClock ntime={props.ntime} otime={props.otime} msgright={props.msgright} msgleft={props.msgleft}/>
        {props.msgBottom?<><br/><h2>{props.msgBottom}</h2></>:<></>}
    </Container>

}

export default FlapDiffClockTile;