import SquareDrawing from "./SquareDrawing";
export default function SquareLayout(props) {
  return (
    <div className="square-layout w-full h-full grid grid-cols-4 grid-rows-4 gap-[4px]">
      {props.step.next.map((el, idx) => {
        return <SquareDrawing key={idx} step={el} />;
      })}
    </div>
  );
}
