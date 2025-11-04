// Import specific methods from the 'node:fs/promises' module
import { writeFile, readFile } from 'node:fs/promises';
// Import the 'path' module for handling file paths if needed
import * as path from 'node:path'; 

// Define the file name and content
const fileName = 'example.txt';
const fileContent = 'Hello, Node.js ES Modules! This is a simple text file.';

async function createAndReadFile() {
  try {
    // 1. Create/Write the text file
    // The writeFile method will create a new file or overwrite an existing one
    await writeFile(fileName, fileContent, { encoding: 'utf8' });
    console.log(`Successfully created and wrote to "${fileName}"`);

    // 2. Read the text file
    // Specify the encoding to get a string instead of a Buffer
    const data = await readFile(fileName, { encoding: 'utf8' });
    console.log(`\nContent of "${fileName}":`);
    console.log(data);
  } catch (error) {
    // Handle any errors that occur during the process
    console.error('An error occurred:', error.message);
  }
}

// Run the async function
createAndReadFile();
