import type { Ref } from "react"

type HeaderProps = {
    ref: Ref<HTMLInputElement>
    handleClick: React.MouseEventHandler<HTMLButtonElement>
}

export default function Header({ref, handleClick}: HeaderProps  ){
    return (
        <header className="text-white text-center min-h-[17.8125rem] flex items-center justify-center flex-col gap-y-[1.75rem] bg-indigo-600">
            <h1 className="font-extrabold text-2xl  leading-[1.25] tracking-tight">Metric/Imperial Unit Conversion</h1>
            <input className="placeholder-text-white text-center form-input text-6xl w-[3ch] min-w-[3ch] resize-x max-w-[8ch]"type="number" placeholder="10" required ref={ref}  />
            <button className="px-6 py-2 bg-white text-indigo-600 rounded-sm hover:cursor-pointer" type="button" onClick={handleClick}>Convert</button>
        </header>
    )
}