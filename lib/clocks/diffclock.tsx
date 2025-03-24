import Flaptile, {FlapTileDown} from "@/lib/flapclock/flaptile";

function FlapDiffClock(props:{ntime:Date, otime:Date, msgright?:string, msgleft?:string, up?:boolean}){

  const diff = Math.max(props.up==undefined || props.up==true ? Math.floor((props.ntime.getTime()-props.otime.getTime())/1000): Math.floor((props.otime.getTime()-props.ntime.getTime())/1000),0);
  const day = Math.floor(diff/3600/24);
  const hour = Math.floor(diff/3600)%24;
  const minute = Math.floor(diff/60)%60;
  const second = Math.floor(diff%60);
  if(props.up==false){
  return <>
    <h2>{props.msgleft??""}
      {FlapTileDown(day)}일 {FlapTileDown(hour,2)}시 {FlapTileDown(minute,2)}분 {FlapTileDown(second,2)}초{" "}{props.msgright??""}
    </h2></>
  }

  return (<><h2>{props.msgleft??""}
    {Flaptile(day)}일 {Flaptile(hour,2)}시 {Flaptile(minute,2)}분 {Flaptile(second,2)}초{" "}{props.msgright??""}
  </h2></>)

}

export default FlapDiffClock