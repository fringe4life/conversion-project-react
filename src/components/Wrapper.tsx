import type { PropsWithChildren } from "react"
// biome-ignore lint:
interface WrapperProps   {
      // Prop to accept any ReactNode as children. 
}

export default function Wrapper({children}: PropsWithChildren<WrapperProps>  ){
    return <main className="bg-zinc-100 dark:bg-[#1F2937] flex flex-col gap-y-[1.5rem] py-[1.5rem]">
        {children} 
    </main>
}