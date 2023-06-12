import HistoryNote from "./HistoryNote";

export default function HistoryNotes({ items }: any) {
  return (
    <div>
      <div className="flex flex-col flex-wrap md:flex-row">
        {items?.map((note: any) => {
          return <HistoryNote key={note.id} note={note} />;
        })}
      </div>
    </div>
  );
}
