function matchMediaQuery(breakPoints,setBreakpoint){
    console.log(Object.keys(breakPoints))

    for(let key of Object.keys(breakPoints)){
        console.log(key, "->", breakPoints[key])

    if (window.matchMedia(`${breakPoints[key]}`).matches){
        setBreakpoint(key)
    }

    }
}

export default function breakpointObserver(breakPoints,setBreakpoint){
    matchMediaQuery(breakPoints, setBreakpoint)

    window.addEventListener("resize",()=> {
        matchMediaQuery(breakPoints, setBreakpoint)
    })
}