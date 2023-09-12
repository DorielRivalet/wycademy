/* eslint-disable @typescript-eslint/no-var-requires */
import bun from 'bun';
import { promises, createReadStream } from 'fs';
import { join, extname } from 'path';
const { ArrayBufferSink, } = bun;

const author = 'Doriel Rivalet'
const licenseMessageLine1 = `© ${new Date().getUTCFullYear()} ${author}.`
const licenseMessageLine2 = 'Use of this source code is governed by a MIT license that can be';
const licenseMessageLine3 = 'found in the LICENSE file.';
const licenseLines = [licenseMessageLine1, licenseMessageLine2, licenseMessageLine3];

/** The extensions to search through. */
const extensions = {
  js: ['/* ', ' */'],
  ts: ['/* ', ' */'],
  css: ['/* ', ' */'],
  yml: '# ',
  svelte: ['<!-- ', ' -->'],
  html: ['<!-- ', ' -->'],
};

/** The folders to ignore. */
const ignoreFolders = ['node_modules', 'docs', '.svelte-kit', 'static'];

async function processDirectory(directory) {
  try {
    const files = await promises.readdir(directory);
    for (const file of files) {
      const absolute = join(directory, file);
      const fileStat = await promises.stat(absolute);
      if (fileStat.isDirectory() && !ignoreFolders.includes(file)) {
        await processDirectory(absolute);
      } else if (Object.keys(extensions).includes(extname(file))) {
        await processFile(absolute);
      }
    }
  } catch (error) {
    console.error(`An error occurred while processing the directory ${directory}: ${error.message}`);
  }
}

async function processFile(filePath) {
  try {
    const sink = new ArrayBufferSink({ stream: true });
    const fileStream = createReadStream(filePath, { encoding: 'utf8' });
    const reader = fileStream.pipe(sink);

    let lineIndex = 0;
    for await (const line of reader) {
      if (lineIndex < 3) {
        const commentSyntax = extensions[extname(filePath).slice(1)];
        const licenseLine = Array.isArray(commentSyntax) 
          ? commentSyntax[0] + licenseLines[lineIndex] + commentSyntax[1]
          : commentSyntax + licenseLines[lineIndex];
        if (line !== licenseLine) {
          sink.write(licenseLine);
        } else {
          sink.write(line);
        }
      } else {
        sink.write(line);
      }
      lineIndex++;
    }

    const newContent = sink.flush();
    await promises.writeFile(filePath, newContent, 'utf8');
  } catch (error) {
    console.error(`An error occurred while processing the file ${filePath}: ${error.message}`);
  }
}

processDirectory('.').catch(error => {
  console.error(`An error occurred: ${error.message}`);
});