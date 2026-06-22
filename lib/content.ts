import fs from 'node:fs';
import path from 'node:path';

const dir = path.join(process.cwd(), 'content');

/** Read a pre-extracted HTML fragment (server-only). */
export function fragment(name: string): string {
  return fs.readFileSync(path.join(dir, `${name}.html`), 'utf8');
}

export type PageMeta = { cls: string; noReveal?: boolean };

let manifest: Record<string, PageMeta> | null = null;

/** Wrapper class + no-reveal flag for a screen (admin uses "amm-page pf-page"). */
export function pageMeta(name: string): PageMeta {
  if (!manifest) {
    manifest = JSON.parse(fs.readFileSync(path.join(dir, '_manifest.json'), 'utf8'));
  }
  return manifest![name] ?? { cls: 'amm-page' };
}
