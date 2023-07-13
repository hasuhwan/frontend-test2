import { step } from "./elements/mapping";
import SecondStep from "./SecondStep";
export default function FirstStep(props) {
  return (
    <div className={step[props.step][props.order].firstStep}>
      {step[props.step][props.order].secondStep.map((el, idx) => {
        return (
          <SecondStep css={el} key={idx} step={props.step + 1} order={idx} />
        );
      })}
    </div>
  );
}
