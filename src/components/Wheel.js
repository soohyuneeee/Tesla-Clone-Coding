import WheelBasic from "./WheelBasic"
import WheelPerform from "./WheelPerform"

export default function Wheel(props){
    if(props.isPer) return <WheelBasic carImg={props.carImg}/>
    else return <WheelPerform carImg={props.carImg}/>
}