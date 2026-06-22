import { fragment } from './content';

/**
 * Renders one screen's extracted markup inside the original `.amm-page` wrapper.
 * The client boot script (public/js/core.bundle.js) finds this wrapper by its
 * data-page attribute and runs the matching per-page init (motion, parts, admin,
 * 3D hero, etc.). Admin's fragment is empty — __ammBootAdmin populates it.
 */
export function Screen({ name }: { name: string }) {
  return (
    <div
      className="amm-page"
      data-page={name}
      dangerouslySetInnerHTML={{ __html: fragment(name) }}
    />
  );
}
