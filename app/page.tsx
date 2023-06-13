import Image from "next/image";
async function getData() {
  const res = await fetch("https://zenquotes.io/api/random");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const backupQuotes = [
  {
    q: "If you believe it will work, you'll see opportunities. If you believe it won't, you will see obstacles.",
    a: "Wayne Dyer",
  },
  {
    q: "Believe you can and you're halfway there.",
    a: "Theodore Roosevelt",
  },
  {
    q: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    a: "Winston Churchill",
  },
  {
    q: "Do one thing every day that scares you.",
    a: "Eleanor Roosevelt",
  },
  {
    q: "Success usually comes to those who are too busy looking for it.",
    a: "Henry David Thoreau",
  },
  {
    q: "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
    a: "Thomas Edison",
  },
];
export default async function Home() {
  let quote = (await getData())[0];
  if (quote.a === "zenquotes.io") {
    quote = backupQuotes[Math.floor(Math.random() * 6)];
  }
  // console.log("jhf");
  return (
    <div>
      <div className="flex  md:flex-row flex-col p-3 m-auto boxMotivation">
        {quote && (
          <div className="flex flex-col p-2 m-2 align-middle justify-center">
            <h1 className="text-lg font-bold">{quote.q}</h1>
            <p className=" flex text-xs justify-self-end mt-1">{quote.a}</p>
          </div>
        )}
        <Image
          className="rounded-3xl"
          src="/brett-patzke-pYeO_rIZ1EM-unsplash.jpg"
          width={400}
          height={400}
          alt="Picture of the road"
        />
      </div>
    </div>
  );
}
