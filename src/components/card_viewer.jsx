import "../../styles/main.css";
import {useRef, useEffect} from "react";
import * as d3 from "d3";

function CardViewer(props){

    const width = 1000;
    const height = 600;
    const margin = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 100
    };
    const containerRef = useRef(null);
    useEffect(()=> { 
        let svg = d3.select(containerRef.current).select("svg");
        if (svg.empty())
            svg = d3.select(containerRef.current).append("svg");
        // svg.selectAll("*").remove();
        // svg.attr("width", width + margin.left + margin.right)
        //     .attr("height", height + margin.top + margin.bottom )
        //     .append("g")
        //     .attr("transform", `translate(${margin.left},${margin.top})`);
        // svg.append("rect")
        //     .attr("width", "100%")
        //     .attr("height", "100%")
        //     .attr("fill", "pink");
    }, [props.launchPads]);

    return (
        <div className='cardViewer' ref={containerRef}>
            
        </div>
    )
}

export {CardViewer}