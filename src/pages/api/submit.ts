import { writeFileSync } from "fs";

export default async function submit(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405);
  }

  const uuid = Math.random().toString(26).slice(2);
  await writeFileSync(
    `./public/db/${uuid}.json`,
    JSON.stringify({ ...req.body, createdAt: Date.now() })
  );
  res.status(201).json({ uuid });
}
