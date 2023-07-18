import SquareDrawing from "./SquareDrawing";
export default function SquareLayout(props) {
  return (
    <div className="square-layout">
      {props.step.next.map((el, idx) => {
        return <SquareDrawing key={idx} step={el} />;
      })}
    </div>
  );
}
