import Accordion from "./component/Accordion";
import "./styles.css";

export interface IAccordionData {
  heading: string;
  content: string;
}

export default function App() {
  const data: IAccordionData[] = [
    { heading: "Heading 1", content: "Content 1" },
    { heading: "Heading 2", content: "Content 2" },
    { heading: "Heading 3", content: "Content 3" },
    { heading: "Heading 4", content: "Content 4" },
  ];
  return (
    <div className="App">
      <Accordion data={data} />
    </div>
  );
}
