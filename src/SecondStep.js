import FirstStep from "./FirstStep";
export default function SecondStep(props) {
  return (
    <div className={props.css}>
      {props.step !== 2 ? (
        <FirstStep step={props.step} order={props.order} />
      ) : null}
    </div>
  );
}
