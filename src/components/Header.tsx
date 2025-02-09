import type { Ref } from "react"

type HeaderProps = {
    ref: Ref<HTMLInputElement>
    handleClick: React.MouseEventHandler<HTMLButtonElement>
}

export default function Header({ref, handleClick}: HeaderProps  ){
    return (
        <header className="h-2xs flex items-center justify-around flex-col">
            <h1>Metric/Imperial Unit Conversion</h1>
            <input type="number" placeholder="10" required ref={ref}  />
            <button type="button" onClick={handleClick}>Convert</button>
        </header>
    )
}