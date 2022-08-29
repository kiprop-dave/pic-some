import { useState, useEffect, useRef } from "react";

function useHover(){
    const [hovered, setHovered] = useState(false)
    const hoverRef = useRef(null)

    function mouseEnter(){
        setHovered(true)
    }

    function mouseLeave(){
        setHovered(false)
    }

    useEffect(()=>{
        const instance = hoverRef.current
        instance.addEventListener("mouseenter",mouseEnter)
        instance.addEventListener("mouseleave", mouseLeave)

        return () =>{
            instance.removeEventListener("mouseenter", mouseEnter)
            instance.removeEventListener("mouseleave", mouseLeave)
        }
    },[])

    return [hovered, hoverRef]
}
export default useHover