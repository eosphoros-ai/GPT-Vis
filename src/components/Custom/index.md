---
order: 2
---

# 自定义标签渲染

## introduce

在AI场景下，有些场景需要根据LLM的输出定制UI，或者更友好的表达LLM内容而需要自定义UI。如知识库索引、文档总结、图表等。
为了能快速定制UI，GPT Vision基于Markdown设计了一套协议以支持自定义UI渲染。

<h4>创建组件</h4>

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

<h4> 渲染自定义标签</h4>

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

<h4>结果</h4>

输入内容

```md | pure
# 开始渲染自定义标签

<custom-view title="自定义标签">自定义标签内容</custom-view>
```

<h4>展示结果</h4>

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

<br>

<h4>TypeScript declare</h4>
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
