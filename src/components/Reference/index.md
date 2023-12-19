---
title: 知识库来源
order: 3
---

# 知识库来源表达

## Example

```tsx
/**
 * inline: true
 */
import { Reference } from 'GPT-Vis';

const content = `
1.如何判断MySQL主从延迟？
可以通过命令 \`show slave status\` 查看，比如通过 \`seconds_behind_master\` 的值来判断。\`NULL\` 表示 io_thread 或 sql_thread 中的任何一个发生故障，也就是该线程的 Running 状态是 No，而非 Yes。\`0\` 表示该值为零，是我们极为渴望看到的情况，表示主从复制状态正常。
2.主从延迟产生的原因及解决方案？
主库的并发比较高的时候，产生的 DDL 数量超过了从库的一个 sql 线程所承受的范围，那么延时就产生了。还有可能是与从库的大型 query 语句产生的了锁等待。网络抖动也可能导致主从延迟。
解决方案包括：
1) 架构方面：
- 业务的持久化层的实现采用分库架构，MySQL 服务可平行扩展，分散压力。
- 单个库读写分离，一主多从，主写从读，分散压力。这样从库压力比主库高，保护主库。
- 在业务和 MySQL 之间加入 Memcache 或者 Redis 的 cache 层，降低 MySQL 的读压力。
- 不同业务的 MySQL 物理上放在不同机器，分散压力。
- 使用比主库更好的硬件设备作为 slave，MySQL 压力小，延迟自然会变小。
2) MySQL 主从同步加速：
- 将 sync_binlog 在 slave 端设置为 0。
- 使用 \`--logs-slave-updates\` 参数，从服务器从主服务器接收到的更新不记入它的二进制日志。
- 直接禁用 slave 端的 binlog。
3.关于知识库的说明。
知识库中提供的内容可以用于回答用户的问题，但需要注意的是，知识库中的内容可能不足以回答所有问题。当无法从提供的内容中获取答案时，需要告诉用户 \"知识库中提供的内容不足以回答此问题\"。此外，回答问题时应按照 1.2.3. 点进行总结，避免胡乱编造。
<references-view title=\"References\" references=\"[{&quot;name&quot;: &quot;mysql-dba.txt&quot;, &quot;chunks&quot;: [{&quot;id&quot;: 17611, &quot;content&quot;: &quot;1.\\u5224\\u65ad\\u4e3b\\u4ece\\u5ef6\\u8fdf\\u7684\\u65b9\\u6cd5 \\u53ef\\u4ee5\\u901a\\u8fc7\\u547d\\u4ee4 show slave status \\u67e5\\u770b \\u6bd4\\u5982\\u901a\\u8fc7seconds_behind_master\\u7684\\u503c\\u6765\\u5224\\u65ad NULL - \\u8868\\u793aio_thread\\u6216\\u662fsql_thread\\u6709\\u4efb\\u4f55\\u4e00\\u4e2a\\u53d1\\u751f\\u6545\\u969c\\uff0c\\u4e5f\\u5c31\\u662f\\u8be5\\u7ebf\\u7a0b\\u7684Running\\u72b6\\u6001\\u662fNo,\\u800c\\u975eYes. 0 - \\u8be5\\u503c\\u4e3a\\u96f6\\uff0c\\u662f\\u6211\\u4eec\\u6781\\u4e3a\\u6e34\\u671b\\u770b\\u5230\\u7684\\u60c5\\u51b5\\uff0c\\u8868\\u793a\\u4e3b\\u4ece\\u590d\\u5236\\u72b6\\u6001\\u6b63\\u5e38 2.\\u4e3b\\u4ece\\u5ef6\\u8fdf\\u4ea7\\u751f\\u7684\\u539f\\u56e0\\u53ca\\u89e3\\u51b3\\u65b9\\u6848\\uff1f \\u4e3b\\u5e93\\u7684\\u5e76\\u53d1\\u6bd4\\u8f83\\u9ad8\\u7684\\u65f6\\u5019\\uff0c\\u4ea7\\u751f\\u7684DDL\\u6570\\u91cf\\u8d85\\u8fc7\\u4e86\\u4ece\\u5e93\\u7684\\u4e00\\u4e2asql\\u7ebf\\u7a0b\\u6240\\u627f\\u53d7\\u7684\\u8303\\u56f4\\uff0c\\u90a3\\u4e48\\u5ef6\\u65f6\\u5c31\\u4ea7\\u751f\\u4e86\\u3002 \\u8fd8\\u6709\\u53ef\\u80fd\\u662f\\u4e0e\\u4ece\\u5e93\\u7684\\u5927\\u578bquery\\u8bed\\u53e5\\u4ea7\\u751f\\u7684\\u4e86\\u9501\\u7b49\\u5f85 \\u3002 \\u7f51\\u7edc\\u6296\\u52a8 \\u89e3\\u51b3\\u65b9\\u6848\\uff1a 1)\\u3001\\u67b6\\u6784\\u65b9\\u9762 1.\\u4e1a\\u52a1\\u7684\\u6301\\u4e45\\u5316\\u5c42\\u7684\\u5b9e\\u73b0\\u91c7\\u7528\\u5206\\u5e93\\u67b6\\u6784\\uff0cmysql\\u670d\\u52a1\\u53ef\\u5e73\\u884c\\u6269\\u5c55\\uff0c\\u5206\\u6563\\u538b\\u529b\\u3002 2.\\u5355\\u4e2a\\u5e93\\u8bfb\\u5199\\u5206\\u79bb\\uff0c\\u4e00\\u4e3b\\u591a\\u4ece\\uff0c\\u4e3b\\u5199\\u4ece\\u8bfb\\uff0c\\u5206\\u6563\\u538b\\u529b\\u3002\\u8fd9\\u6837\\u4ece\\u5e93\\u538b\\u529b\\u6bd4\\u4e3b\\u5e93\\u9ad8\\uff0c\\u4fdd\\u62a4\\u4e3b\\u5e93\\u3002 3.\\u670d\\u52a1\\u7684\\u57fa\\u7840\\u67b6\\u6784\\u5728\\u4e1a\\u52a1\\u548cmysql\\u4e4b\\u95f4\\u52a0\\u5165memcache\\u6216\\u8005redis\\u7684cache\\u5c42\\u3002\\u964d\\u4f4emysql\\u7684\\u8bfb\\u538b\\u529b\\u3002 4.\\u4e0d\\u540c\\u4e1a\\u52a1\\u7684mysql\\u7269\\u7406\\u4e0a\\u653e\\u5728\\u4e0d\\u540c\\u673a\\u5668\\uff0c\\u5206\\u6563\\u538b\\u529b\\u3002 5.\\u4f7f\\u7528\\u6bd4\\u4e3b\\u5e93\\u66f4\\u597d\\u7684\\u786c\\u4ef6\\u8bbe\\u5907\\u4f5c\\u4e3aslave\\u603b\\u7ed3\\uff0cmysql\\u538b\\u529b\\u5c0f\\uff0c\\u5ef6\\u8fdf\\u81ea\\u7136\\u4f1a\\u53d8\\u5c0f\\u3002&quot;, &quot;meta_info&quot;: &quot;{'source': '/Users/chenketing/Desktop/project/DB-GPT-NEW/DB-GPT/pilot/data/chromascore/mysql-dba.txt'}&quot;, &quot;recall_score&quot;: 0.5179764628410339}, {&quot;id&quot;: 17612, &quot;content&quot;: &quot;2)\\u3001mysql\\u4e3b\\u4ece\\u540c\\u6b65\\u52a0\\u901f 1.sync_binlog\\u5728slave\\u7aef\\u8bbe\\u7f6e\\u4e3a0 2.\\u2013logs-slave-updates \\u4ece\\u670d\\u52a1\\u5668\\u4ece\\u4e3b\\u670d\\u52a1\\u5668\\u63a5\\u6536\\u5230\\u7684\\u66f4\\u65b0\\u4e0d\\u8bb0\\u5165\\u5b83\\u7684\\u4e8c\\u8fdb\\u5236\\u65e5\\u5fd7\\u3002 3.\\u76f4\\u63a5\\u7981\\u7528slave\\u7aef\\u7684binlog&quot;, &quot;meta_info&quot;: &quot;{'source': '/Users/chenketing/Desktop/project/DB-GPT-NEW/DB-GPT/pilot/data/chromascore/mysql-dba.txt'}&quot;, &quot;recall_score&quot;: 0.47952836751937866}]}]\"></references-view>`;

export default () => <Reference content={content} />;
```

## 如何使用

`global.d.ts`声明自定义标签

```tsx | pure
declare namespace JSX {
  interface IntrinsicElements {
    'references-view': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        references: any;
      },
      HTMLElement
    >;
  }
}
```

markdown自定义标签处理

```tsx | pure
import { LinkOutlined } from '@ant-design/icons';
import ReactMarkdown from 'react-markdown';
import { Popover } from 'antd';

type MarkdownComponent = Parameters<typeof ReactMarkdown>['0']['components'];
type Reference = {
  name: string;
  chunks: Array<number>;
};
type IChunk = {
  content: string;
  doc_name: string;
  doc_type: string;
  document_id: string | number;
  gmt_created: string;
  gmt_modified: string;
  id: string | number;
  meta_info: string;
  recall_score?: string | number;
};

const extraComponents: MarkdownComponent = {
  'references-view': ({ title, references, children }) => {
    let referenceData;
    // Low version compatibility, read data from children
    if (children) {
      try {
        referenceData = JSON.parse(children as string);
        title = referenceData.title;
        references = referenceData.references;
      } catch (error) {
        console.log('parse references failed', error);
        return <p className="text-sm text-red-500">Render Reference Error!</p>;
      }
    } else {
      // new version, read from tag props.
      try {
        references = JSON.parse(references as string);
      } catch (error) {
        console.log('parse references failed', error);
        return <p className="text-sm text-red-500">Render Reference Error!</p>;
      }
    }
    if (!references || references?.length < 1) {
      return null;
    }
    return (
      <div className="border-t-[1px] border-gray-300 mt-3 py-2">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          <LinkOutlined className="mr-2" />
          <span className="font-semibold">{title}</span>
        </p>
        {references.map((reference: Reference, index: number) => (
          <div
            key={`file_${index}`}
            className="text-sm font-normal block ml-2 h-6 leading-6 overflow-hidden"
          >
            <span className="inline-block w-6">[{index + 1}]</span>
            <span className="mr-2 lg:mr-4 text-blue-400">{reference.name}</span>
            {reference?.chunks?.map((chunk: IChunk | number, index) => (
              <span key={`chunk_${index}`}>
                {typeof chunk === 'object' ? (
                  <Popover
                    content={
                      <div className="max-w-4xl">
                        <p className="mt-2 font-bold mr-2 border-t border-gray-500 pt-2">
                          Content:
                        </p>
                        <p>{chunk?.content || 'No Content'}</p>
                        <p className="mt-2 font-bold mr-2 border-t border-gray-500 pt-2">
                          MetaData:
                        </p>
                        <p>{chunk?.meta_info || 'No MetaData'}</p>
                        <p className="mt-2 font-bold mr-2 border-t border-gray-500 pt-2">
                          Score:
                        </p>
                        <p>{chunk?.recall_score || ''}</p>
                      </div>
                    }
                    title="Chunk Information"
                  >
                    <span
                      className="cursor-pointer text-blue-500 ml-2"
                      key={`chunk_content_${chunk?.id}`}
                    >
                      {chunk?.id}
                    </span>
                  </Popover>
                ) : (
                  <span
                    className="cursor-pointer text-blue-500 ml-2"
                    key={`chunk_id_${chunk}`}
                  >
                    {chunk}
                  </span>
                )}
                {index < reference?.chunks.length - 1 && (
                  <span key={`chunk_comma_${index}`}>,</span>
                )}
              </span>
            ))}
          </div>
        ))}
      </div>
    );
  },
};
```

输出

```tsx | pure
<ReactMarkdown></ReactMarkdown>
```

## 协议规范

:::warning{title=Tip}
最好是一个闭合标签
:::

```tsx | pure
// BAD
<references-view />

// GOOD
<references-view></references-view>
```

:::warning{title=Tip}
最好是通过标签属性传值
:::

```tsx | pure
<references-view content="xxx"></references-view>
```

:::warning{title=Tip}
最好是JSON序列化内容
:::

```tsx | pure
<references-view content="[{}]"></references-view>
```

:::warning{title=Tip}
如果是序列化后的JSON需要将 `"` 转译为 `&quot;` 否则react-markdown无法正常识别完整的标签
:::

`<references-view content="[{&quot;name&quot;: &quot;GPT-Vis&quot;}]"></references-view>`
