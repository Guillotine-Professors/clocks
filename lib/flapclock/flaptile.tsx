"use client"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { FlapDisplay } from 'react-split-flap-effect'

import 'react-split-flap-effect/extras/themes.css'
import css from "./flaptile.module.css"

function FlapTile(value:number, length?:number){
    return <FlapDisplay 
    className={`L ${css.inblock}`}
    chars={'1234567890 '}
    value={String(value)}
    length={value>1000?undefined:(length??3)}
    padMode={"start"}
    style={{display: "inline-block"}}
  />
}

export default FlapTile;