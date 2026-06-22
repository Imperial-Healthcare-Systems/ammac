import { fragment, pageMeta } from './content';

/**
 * Renders one screen's extracted markup inside the original `.amm-page` wrapper.
 * The client boot script (public/js/core.bundle.js) finds this wrapper by its
 * data-page attribute and runs the matching per-page init (motion, parts, admin,
 * 3D hero, etc.). The wrapper class comes from the manifest so admin keeps its
 * `amm-page pf-page` class + `data-no-reveal` (needed by the admin CSS/markup).
 */
export function Screen({ name }: { name: string }) {
  const meta = pageMeta(name);
  return (
    <div
      className={meta.cls}
      data-page={name}
      {...(meta.noReveal ? { 'data-no-reveal': '' } : {})}
      dangerouslySetInnerHTML={{ __html: fragment(name) }}
    />
  );
}
