import React, { ReactElement } from 'react'

export default function BuyMeCoffe(props: any): ReactElement {
  return (
    <a {...props}>
        <span className="font-cookie text-2xl">Buy me a coffee ?</span>
    </a>
  )
}
