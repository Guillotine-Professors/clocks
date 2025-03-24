"use client"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { FlapDisplay } from 'react-split-flap-effect'

import 'react-split-flap-effect/extras/themes.css'
import css from "./flaptile.module.css"

function FlapTile(value:number, length?:number, up?:boolean){
    return <FlapDisplay 
    className={`L ${css.inblock}`}
    chars={up==true||up==undefined?'1234567890 ':'0987654321 '}
    value={String(value)}
    length={value>1000?undefined:(length??3)}
    padMode={"start"}
    style={{display: "inline-block"}}
  />
}

export function FlapTileDown(value:number, length?:number){
  return FlapTile(value, length, false)
}

export default FlapTile;