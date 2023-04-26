
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/slice/slice'

function Counter() {
  const count = useSelector((state) => state.cou.nacht)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>gece modu {count ? 'kapali ':'acik'}</h1>
      <div>
        <button
          aria-label="gece modu"
          onClick={() => dispatch(increment())}
        >
        gece modu
        </button>
        <span>{count}</span>
        <button
          aria-label="gunduz modu"
          onClick={() => dispatch(decrement())}
        >
         gunduz modu
        </button>
      </div>
    </div>
  )
}

export default Counter