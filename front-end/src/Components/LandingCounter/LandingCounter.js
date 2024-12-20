import React,{useState , useEffect} from "react";
function LandingCounter({count}) {
    const [courseCounter, setCourseCounter] = useState(0);
  useEffect(() => {
    let interval = setInterval(() => {
      setCourseCounter((prev) => prev + 1);
    }, 1);
    if (courseCounter === count) {
      clearInterval(interval);
    }
    

    return () => {
      clearInterval(interval);
    };
  }, [count, courseCounter]);
    return ( 
        <span class="landing-status__count">{courseCounter}</span>
        
     );
}

export default LandingCounter;