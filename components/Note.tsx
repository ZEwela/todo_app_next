"use client";
import Link from "next/link";
import { SyntheticEvent } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { usePathname, useRouter } from "next/navigation";

export default function Note({ note }: any) {
  const { id, title, content, created } = note || {};
  const router = useRouter();
  const pathname = usePathname();

  const done = async (e: SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();

    await fetch("http://127.0.0.1:8090/api/collections/history/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });
    await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${id}`, {
      method: "DELETE",
    });

    if (pathname.length > 6) {
      router.refresh();
      router.push("/notes");
    } else {
      router.refresh();
    }
  };
  return (
    <Link href={`/notes/${id}`}>
      <div className="post">
        <div className="postHead">
          <h2>{title}</h2>
          <button onClick={(e) => done(e)} className="done">
            <AiOutlineCheck />
          </button>
        </div>
        <h5>{content} </h5>
        <p>{created.slice(0, 16)}</p>
      </div>
    </Link>
  );
}
