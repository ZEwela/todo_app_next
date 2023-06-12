import Note from "@/components/Note";

async function getNote(noteId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`
  );
  const data = await res.json();
  return data;
}
export default async function NotesPage({ params }: any) {
  const note = await getNote(params.id);
  return (
    <div className="mt-2">
      <h1>notes/{note.id}</h1>
      <Note key={note.id} note={note} />
    </div>
  );
}
