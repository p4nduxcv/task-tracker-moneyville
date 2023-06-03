import { readdirSync, statSync, readFileSync } from "fs";
import path from "path";

export default async function submit(req: any, res: any) {
    if (req.method !== "GET") {
        return res.status(405);
    }

    const files: any = [];
    const dir = "./public/db";

    readdirSync(dir).forEach((filename) => {
        const name = path.parse(filename).name;
        const ext = path.parse(filename).ext;
        const filepath = path.resolve(dir, filename);
        const stat = statSync(filepath);
        const isFile = stat.isFile();

        if (isFile && ext === ".json") {
            const data = readFileSync(`${dir}/${filename}`, "utf-8");
            files.push({ id: name, data: JSON.parse(data) });
        }
    });
    files.sort((a: any, b: any) => {
        return a.data.createdAt - b.data.createdAt;
    });
    res.status(200).json({ data: files });
}