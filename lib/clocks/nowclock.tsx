import Container from "react-bootstrap/Container";
import Flapclock from "@/lib/flapclock/flaptile";

function FlapNowtime(props:{ntime:Date}){ return <Container>
<h3>현재 시각은</h3>
<h2>
{
  Flapclock(props.ntime.getFullYear(),4)
}년{" "}
{
  Flapclock(props.ntime.getMonth()+1,2)
}월{" "}
{
  Flapclock(props.ntime.getMonth()+1,2)
}일{" "}
{
  Flapclock(props.ntime.getHours(),2)
}시{" "}
{
  Flapclock(props.ntime.getMinutes(),2)
}분{" "}
{
  Flapclock(props.ntime.getSeconds(),2)
}초 입니다.{" "}
</h2>
</Container>
}

export default FlapNowtime