import Flaptile from "@/lib/flapclock/flaptile";

function FlapDiffClock(props:{ntime:Date, otime:Date, msgright?:string, msgleft?:string}){
  const diff = Math.floor((props.ntime.getTime()-props.otime.getTime())/1000);
  const day = Math.floor(diff/3600/24);
  const hour = Math.floor(diff/3600)%24;
  const minute = Math.floor(diff/60)%60;
  const second = Math.floor(diff%60);
  return <>
<h2>{props.msgleft??""}
  {Flaptile(day)}일 {Flaptile(hour,2)}시 {Flaptile(minute,2)}분 {Flaptile(second,2)}초{" "}{props.msgright??""}
</h2></>
}

export default FlapDiffClock