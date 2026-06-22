import fs from 'node:fs';
import path from 'node:path';

const dir = path.join(process.cwd(), 'content');

/** Read a pre-extracted HTML fragment (server-only). */
export function fragment(name: string): string {
  return fs.readFileSync(path.join(dir, `${name}.html`), 'utf8');
}
