import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Components, Conversation } from '../src';
import * as markdowns from './demo';

const select = document.getElementById('selector') as HTMLSelectElement;
select.onchange = () => {
  const { value } = select;
  history.pushState({ value }, '', `?name=${value}`);
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  render();
};
select.style.display = 'block';
select.style.minWidth = '120px';

Object.keys(markdowns).forEach((d) => {
  const option = document.createElement('option');
  option.textContent = d;
  option.value = d;
  select.append(option);
});

let root;
/**
 * 渲染 markdown 组件
 */
function render() {
  if (root) root.unmount();
  const markdown = markdowns[select.value];

  root = createRoot(document.getElementById('root')!);

  root.render(
    <StrictMode>
      <Conversation components={Components}>{markdown}</Conversation>
    </StrictMode>,
  );
}

const initialValue = new URL(location as any).searchParams.get(
  'name',
) as string;
if (markdowns[initialValue]) select.value = initialValue;

render();
