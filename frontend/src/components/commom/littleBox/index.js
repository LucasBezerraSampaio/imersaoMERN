import { StyledLittleBox } from "./styled";

export default function LittleBox(props) {
     return (
         <StyledLittleBox>
             <div className="language"> {props.textTop} </div>
             <div className="schedule"> {props.textCenter} </div>
             <div className="language"> {props.textBottom} </div>
         </StyledLittleBox>
     )
}