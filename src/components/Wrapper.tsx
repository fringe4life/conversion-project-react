import type { PropsWithChildren } from "react"
// biome-ignore lint:
interface WrapperProps   {
      // Prop to accept any ReactNode as children. 
}

export default function Wrapper({children}: PropsWithChildren<WrapperProps>  ){
    return <main className="w-lg">
        {children}  {/* Replace this with your actual children components */}
    </main>
}