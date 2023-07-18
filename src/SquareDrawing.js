import SquareLayout from "./SquareLayout";
export default function SquareDrawing(props) {
  return (
    <div className={`square-drawing ${props.step.value}`}>
      {props.step.next.length !== 0 ? <SquareLayout step={props.step} /> : null}
    </div>
  );
}
