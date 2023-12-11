---
order: 0
title: 基础Markdown展示
---

# 基础Markdown展示

> 基础依赖: React-Markdown + Antd + TailWindCss

## 基础标签类型

### 示例

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

- student_id
- student_name
- major
- year_of_enrollment
- student_age

## 有序序列

1. student_id
2. student_name
3. major
4. year_of_enrollment
5. student_age

## 表格

<table>
  <thead>
    <tr>
      <th>缺陷类型</th>
      <th>缺陷优先级</th>
      <th>缺陷数量</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="ant-table-cell">优化类</td>
      <td class="ant-table-cell">低</td>
      <td class="ant-table-cell">2</td>
    </tr>
    <tr>
      <td class="ant-table-cell">UI类</td>
      <td class="ant-table-cell">低</td>
      <td class="ant-table-cell">9</td>
    </tr>
    <tr>
      <td class="ant-table-cell">新增/变更需求类</td>
      <td class="ant-table-cell">紧急</td>
      <td class="ant-table-cell">3</td>
    </tr>
    <tr>
      <td class="ant-table-cell">UI类</td>
      <td class="ant-table-cell">高</td>
      <td class="ant-table-cell">12</td>
    </tr>
    <tr>
      <td class="ant-table-cell">优化类</td>
      <td class="ant-table-cell">紧急</td>
      <td class="ant-table-cell">4</td>
    </tr>
    <tr>
      <td class="ant-table-cell">功能类</td>
      <td class="ant-table-cell">高</td>
      <td class="ant-table-cell">4</td>
    </tr>
    <tr>
      <td class="ant-table-cell">UI类</td>
      <td class="ant-table-cell">紧急</td>
      <td class="ant-table-cell">1</td>
    </tr>
    <tr>
      <td class="ant-table-cell">功能类</td>
      <td class="ant-table-cell">紧急</td>
      <td class="ant-table-cell">1</td>
    </tr>
    <tr>
      <td class="ant-table-cell">新增/变更需求类</td>
      <td class="ant-table-cell">高</td>
      <td class="ant-table-cell">5</td>
    </tr>
    <tr>
      <td class="ant-table-cell">优化类</td>
      <td class="ant-table-cell">高</td>
      <td class="ant-table-cell">3</td>
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

### h1

```tsx | pure
h1({ children }) {
  return (
    <h1 className="text-2xl font-bold my-4 border-b border-slate-300 pb-4">
      {children}
    </h1>
  );
}
```

### h2

```tsx | pure
h2({ children }) {
  return <h2 className="text-xl font-bold my-3">{children}</h2>;
}
```

### h3

```tsx | pure
h3({ children }) {
  return <h3 className="text-lg font-semibold my-2">{children}</h3>;
}
```

### h4

```tsx | pure
h4({ children }) {
  return <h4 className="text-base font-semibold my-1">{children}</h4>;
}
```

### a

```tsx | pure
a({ children, href }) {
  return (
    <div className="inline-block text-blue-600 dark:text-blue-400">
      <LinkOutlined className="mr-1" />
      <a href={href} target="_blank">
        {children}
      </a>
    </div>
  );
}
```

### ul

```tsx | pure
ul({ children }) {
  return <ul className="py-1">{children}</ul>;
}
```

### ol

```tsx | pure
ol({ children }) {
  return <ol className="py-1">{children}</ol>;
}
```

### li

```tsx | pure
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
}
```

### table

```tsx | pure
table({ children }) {
  return (
    <table className="my-2 rounded-tl-md rounded-tr-md max-w-full bg-white dark:bg-gray-900 text-sm rounded-lg overflow-hidden">
      {children}
    </table>
  );
}
```

### thead

```tsx | pure
thead({ children }) {
  return (
    <thead className="bg-[#fafafa] dark:bg-black font-semibold">
      {children}
    </thead>
  );
}
```

### th

```tsx | pure
th({ children }) {
  return <th className="!text-left p-4">{children}</th>;
}
```

### td

```tsx | pure
td({ children }) {
  return (
    <td className="p-4 border-t border-[#f0f0f0] dark:border-gray-700">
      {children}
    </td>
  );
}
```

### img

```tsx | pure
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
}
```

### blockquote

```tsx | pure
blockquote({ children }) {
  return (
    <blockquote className="py-4 px-6 border-l-4 border-blue-600 rounded bg-white my-2 text-gray-500 dark:bg-slate-800 dark:text-gray-200 dark:border-white shadow-sm">
      {children}
    </blockquote>
  );
}
```

### code

```tsx | pure
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
}
```

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

## 完整代码

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
