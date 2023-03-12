import path from "path";
import fs from "fs";

export function getFilePathRecursively(baseInputUrl: string) {
	const files: string[] = [];
	const inputFiles = fs.readdirSync(baseInputUrl);
	inputFiles.forEach((file) => {
		const filePath = path.join(baseInputUrl, file);
		// check if the file is a file or directory
		const stat = fs.statSync(filePath);
		if (stat.isDirectory()) {
			// if the file is a directory, recursively call the function again
			const subFiles = getFilePathRecursively(filePath);
			files.push(...subFiles);
		} else {
			// if the file is a file, read the content utf8
			files.push(filePath);
		}
	});

	return files;
}

export function parseFileContents(filePaths: string[]) {
	const contents = [];
	for (const filePath of filePaths) {
		contents.push(fs.readFileSync(filePath, "utf8"));
	}
	return contents;
}
