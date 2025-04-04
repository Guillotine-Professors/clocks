import Container from "react-bootstrap/Container";
import FlapDiffClock from "./diffclock";
import React from "react";

function FlapDiffClockTile(props:{ntime:Date, otime:Date, msgTop?:string, msgBottom?:string, msgleft?:string, msgright?:string, up?:boolean, desc?:string}){

    return <Container>
        {props.msgTop?<><h2>{props.msgTop}</h2></>:<></>}
        <FlapDiffClock ntime={props.ntime} otime={props.otime} msgright={props.msgright} msgleft={props.msgleft} up={props.up}/>
        {props.msgBottom?<><br/><h2>{props.msgBottom}</h2></>:<></>}
        {<p>{props.desc}</p>}
        {/* { props.desc instanceof String ? <p>{props.desc}</p>:<></>
        } */}
        {/* { props.desc instanceof Element ? props.desc :<></>
        } */}
    </Container>

}

export default FlapDiffClockTile;