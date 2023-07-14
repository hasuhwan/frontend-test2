import SquareLayout from "./SquareLayout";
export default function SquareDrawing(props) {
  return (
    <div
      className={`square-drawing w-full h-full row-span-2 col-span-2 outline outline-4  ountline-blackColor ${props.step.value}`}
    >
      {props.step.next.length !== 0 ? <SquareLayout step={props.step} /> : null}
    </div>
  );
}
