# 基础MarkDown展示

> 基础依赖: React-Markdown + Antd + TailWindCss

```tsx
/**
 * inline: true
 */
import { Basic } from 'GPT-Vis';

const content = `
# H1 标签

## H2 标签

### H3 标签

#### H4 标签

## 引用块

> 这里是引用块内容

## 加粗

**这里是加粗内容**

## 无序序列

- 可以对问题进行分类，统计不同类型的问题数量

## 有序序列

1. 可以对问题进行分类，统计不同类型的问题数量

## 表格

<table>
  <thead>
    <tr>
      <td>name</td>
      <td>content</td>
      <td>description</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>测试</td>
      <td>测试</td>
      <td>测试</td>
    </tr>
  </tbody>
</table>

## 代码块

\`\`\`
import React from 'react';

function Component() {
  return <div>Hello World</div>;
}

export default Component;
\`\`\`

## 行内代码块
\`inline block\`
`;

export default () => <Basic content={content} />;
```

## 基础标签配置代码

CodePreview.tsx

```tsx | pure
import { CopyOutlined } from '@ant-design/icons';
import { Button, message } from 'antd';
import copy from 'copy-to-clipboard';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function CodePreview({
  code,
  language,
}: {
  code: string;
  language: string;
}) {
  return (
    <div className="relative">
      <Button
        className="absolute right-3 top-2 text-gray-300 hover:!text-gray-200 bg-gray-700"
        type="text"
        icon={<CopyOutlined />}
        onClick={() => {
          const success = copy(code);
          message[success ? 'success' : 'error'](
            success ? 'Copy success' : 'Copy failed',
          );
        }}
      />
      <SyntaxHighlighter language={language} style={oneDark}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
```

markdownComponents.tsx

```tsx | pure
import { LinkOutlined, SyncOutlined } from '@ant-design/icons';
import { Datum } from '@antv/ava';
import { Image, Table, Tabs, TabsProps, Tag } from 'antd';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { CodePreview } from './CodePreview';

type MarkdownComponent = Parameters<typeof ReactMarkdown>['0']['components'];

const basicComponents: MarkdownComponent = {
  code({ inline, className, children, style, ...props }) {
    const lang = /language-(\w+)/.exec(className || '');

    return (
      <>
        {!inline ? (
          <CodePreview
            code={String(children)}
            language={lang?.[0] || 'javascript'}
          />
        ) : (
          <code
            {...props}
            style={style}
            className="px-[6px] py-[2px] rounded bg-gray-700 text-gray-100 dark:bg-gray-100 dark:text-gray-800 text-sm"
          >
            {children}
          </code>
        )}
      </>
    );
  },
  ul({ children }) {
    return <ul className="py-1">{children}</ul>;
  },
  ol({ children }) {
    return <ol className="py-1">{children}</ol>;
  },
  li({ children, ordered }) {
    return (
      <li
        className={`text-sm leading-7 ml-5 pl-2 text-gray-600 dark:text-gray-300 ${
          ordered ? 'list-decimal' : 'list-disc'
        }`}
      >
        {children}
      </li>
    );
  },
  table({ children }) {
    return (
      <table className="my-2 rounded-tl-md rounded-tr-md max-w-full bg-white dark:bg-gray-900 text-sm rounded-lg overflow-hidden">
        {children}
      </table>
    );
  },
  thead({ children }) {
    return (
      <thead className="bg-[#fafafa] dark:bg-black font-semibold">
        {children}
      </thead>
    );
  },
  th({ children }) {
    return <th className="!text-left p-4">{children}</th>;
  },
  td({ children }) {
    return (
      <td className="p-4 border-t border-[#f0f0f0] dark:border-gray-700">
        {children}
      </td>
    );
  },
  h1({ children }) {
    return (
      <h1 className="text-2xl font-bold my-4 border-b border-slate-300 pb-4">
        {children}
      </h1>
    );
  },
  h2({ children }) {
    return <h2 className="text-xl font-bold my-3">{children}</h2>;
  },
  h3({ children }) {
    return <h3 className="text-lg font-semibold my-2">{children}</h3>;
  },
  h4({ children }) {
    return <h4 className="text-base font-semibold my-1">{children}</h4>;
  },
  a({ children, href }) {
    return (
      <div className="inline-block text-blue-600 dark:text-blue-400">
        <LinkOutlined className="mr-1" />
        <a href={href} target="_blank">
          {children}
        </a>
      </div>
    );
  },
  img({ src, alt }) {
    return (
      <div>
        <Image
          className="min-h-[1rem] max-w-full max-h-full border rounded"
          src={src}
          alt={alt}
          placeholder={
            <Tag icon={<SyncOutlined spin />} color="processing">
              Image Loading...
            </Tag>
          }
          fallback="/images/fallback.png"
        />
      </div>
    );
  },
  blockquote({ children }) {
    return (
      <blockquote className="py-4 px-6 border-l-4 border-blue-600 rounded bg-white my-2 text-gray-500 dark:bg-slate-800 dark:text-gray-200 dark:border-white shadow-sm">
        {children}
      </blockquote>
    );
  },
};

};

const markdownComponents = {
  ...basicComponents,
};

export default markdownComponents;
```
