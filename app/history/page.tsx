"use client";
import HistoryNotes from "@/components/HistoryNotes";
import { useRouter } from "next/navigation";

async function getHistory() {
  const rescheck = await fetch(
    `http://127.0.0.1:8090/api/collections/history/records?page=1&perPage=1`
  );
  const dataCheck = await rescheck.json();

  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/history/records?page=1&perPage=${dataCheck.totalItems}`
  );
  const data = await res.json();
  return data;
}
export default async function HistoryPage() {
  const router = useRouter();

  let data = await getHistory();

  const handleDeleteAll = () => {
    alert("Do you really want to delete your history?");
    data.items.map(async (item: any) => {
      await fetch(
        `http://127.0.0.1:8090/api/collections/history/records/${item.id}`,
        {
          method: "DELETE",
        }
      );
    });

    router.refresh();
  };
  return (
    <div>
      {data.totalItems ? (
        <>
          <button
            onClick={() => handleDeleteAll()}
            type="button"
            className="rounded-lg border border-blue-400 bg-blue-300 p-2 focus:ring  hover:border-blue-600 hover:bg-blue-500 cursor-pointer"
          >
            Delete all
          </button>
          <HistoryNotes items={data.items} />
        </>
      ) : (
        <p className="m-5">
          Please complete your tasks to see them in history.
        </p>
      )}
    </div>
  );
}
