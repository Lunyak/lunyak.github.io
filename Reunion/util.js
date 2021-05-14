// import { renderer } from 'storypug';

export const loadAssets = () => {
  return (file) => {
    let fileName = file.replace(/^.*[\\\/]/, '');
    if (fileName.indexOf('.svg') !== -1) {
      fileName = fileName.replace('.svg', '');
      return `<svg><use xlink:href="/assets/sprite.svg?${fileName}-usage#${fileName}-usage"/></svg>`;
    }
    return `/asssets/images/${fileName}`;
  };
};

const html = (templateFn, data) => templateFn({
  props: data,
  loadAssets: loadAssets(),
});

// const { html } = renderer({ loadAssets: loadAssets() });

export default html;