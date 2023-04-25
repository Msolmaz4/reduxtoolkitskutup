import React from 'react'

import {useSelector,useDispatch} from 'react-redux'
import {disableNight,enableNightMod} from '../redux/slice/slice.js'


const Header = () => {
    {/** selector stodeki seyi alip kullanmaya yarar */}
     const isNight = useSelector((state)=>state.ui.gecemodu)
     console.log(isNight)
    {/** dispatch slice yazdigimiy foksiyonlari cagirmaya yarar */}

    const dispatch = useDispatch()

  return (
    <div style={{marginBottom:20}}>
        <h1>Header {isNight ? 'acik' :'kapali'}</h1>
        <button onClick={()=>dispatch(disableNight())} >Gece Modu Ac</button>
        <button onClick={()=>dispatch(enableNightMod())}>Gece Modu kapa</button>
        
    </div>
  )
}

export default Header