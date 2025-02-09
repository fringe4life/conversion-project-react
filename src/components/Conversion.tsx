type ConversionProps = {
    input: number
    title: string
    unit1: string
    unit2: string
    convertToUnit2: number
    convertToUnit1: number  // Additional property for conversions where the input is in a different unit.
}

export default function Conversion({input, title, unit1, unit2, convertToUnit1, convertToUnit2}: ConversionProps  ){
    let result1 = (convertToUnit2 * input).toFixed(3)  // Additional property for conversions where the input is in a different unit.
    let result2 = (convertToUnit1 * input).toFixed(3)  // Additional property for conversions where the input is in a different unit.
    if(!input){
        result1 = '?'
        result2 = '?'  // Additional property for conversions where the input is in a different unit.
    }
    return (
        <section className="w-9/10 bg-white dark:bg-[#273549] mx-auto py-2 text-center pt-6 pb-4">
            <h2 className="text-xl text-slate-600 dark:text-pink-200 mb-2">{title}</h2>
            <div className="flex flex-col md:flex-row justify-center text-neutral-700 dark:text-white text-sm">
                <p className="md:border-r md:pr-2">{input} {unit1} = {result1} {unit2}</p><p className="pl-2">{input} {unit2} = {result2} {unit1}</p>
            </div>
            
        </section>
    )
}