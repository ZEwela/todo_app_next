"use client";
import Link from "next/link";
import { SyntheticEvent } from "react";
import { BsTrash3 } from "react-icons/bs";
import { usePathname, useRouter } from "next/navigation";

export default function HistoryNote({ note }: any) {
  const { id, title, content, created } = note || {};
  const router = useRouter();
  const pathname = usePathname();

  const dispose = async (e: SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
    await fetch(`http://127.0.0.1:8090/api/collections/history/records/${id}`, {
      method: "DELETE",
    });
    router.refresh();
  };
  return (
    <div className="post">
      <div className="postHead">
        <h2>{title}</h2>
        <button onClick={(e) => dispose(e)} className="done">
          <BsTrash3 />
        </button>
      </div>
      <h5>{content} </h5>
      <p>{created.slice(0, 16)}</p>
    </div>
  );
}
