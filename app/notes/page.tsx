import CreateNote from "@/components/CreateNote";
import Note from "@/components/Note";

async function getNotes() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30",
    { cache: "no-cache" }
  );
  const data = await res.json();
  return data?.items as any[];
}
export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <div>
      <CreateNote />
      <div className="flex flex-col flex-wrap md:flex-row">
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>
    </div>
  );
}
