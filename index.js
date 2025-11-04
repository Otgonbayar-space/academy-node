import { readFileSync } from 'fs';

export function readUsers() {
  try {
    const data = readFileSync('users.txt', 'utf8');
    const users = data
      .split('\n')
      .map(line => line.trim())
      .filter(line => line !== '');
    return users;
  } catch (err) {
    console.error('Файл уншихад алдаа гарлаа:', err);
    return [];
  }
}
