---
order: 2
---

# 自定义标签渲染

## 如何自定义需要渲染的标签

在`global.d.ts`中添加自定义标签，为了更好的ts语法提醒

```tsx | pure
declare namespace JSX {
  interface IntrinsicElements {
    'custom-view': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
  }
}
```

### 创建组件

```tsx | pure
import React, { FC, PropsWithChildren } from 'react';

interface Props {
  title: string;
}

const CustomComponent: FC<PropsWithChildren<Props>> = ({ title, children }) => {
  return (
    <div className="bg-white rounded overflow-hidden border border-gray-100 max-w-md">
      <div className="py-2 px-4 bg-green-500 text-white">{title}</div>
      <div className="p-4">{children}</div>
    </div>
  );
};

export default CustomComponent;
```

### 渲染自定义标签

```tsx | pure
import ReactMarkdown from 'react-markdown';

type MarkdownComponent = Parameters<typeof ReactMarkdown>['0']['components'];

const extraComponents: MarkdownComponent = {
  'custom-view': ({ children, title }) => {
    try {
      return <CustomComponent title={title}>{children}</CustomComponent>;
    } catch (e) {
      return children;
    }
  },
};
```

### 结果

输入内容

```md | pure
# 开始渲染自定义标签

<custom-view title="自定义标签">自定义标签内容</custom-view>
```

展示结果

```tsx
/**
 * inline: true
 */
import { Custom } from 'GPT-Vis';

const content = `
## 开始渲染自定义标签
<custom-view title="自定义标签">自定义标签内容</custom-view>
`;

export default () => <Custom content={content} />;
```
