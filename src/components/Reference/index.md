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
\`\`\`references
{
  "title": "References",
  "references": [{
    "name": "mysql-dba.txt",
    "chunks": [
      {
        "id": 17611,
        "content": "1.判断主从延迟的方法 可以通过命令 show slave status 查看 比如通过seconds_behind_master的值来判断 NULL - 表示io_thread或是sql_thread有任何一个发生故障，也就是该线程的Running状态是No,而非Yes. 0 - 该值为零，是我们极为渴望看到的情况，表示主从复制状态正常 2.主从延迟产生的原因及解决方案？ 主库的并发比较高的时候，产生的DDL数量超过了从库的一个sql线程所承受的范围，那么延时就产生了。 还有可能是与从库的大型query语句产生的了锁等待 。 网络抖动 解决方案： 1)、架构方面 1.业务的持久化层的实现采用分库架构，mysql服务可平行扩展，分散压力。 2.单个库读写分离，一主多从，主写从读，分散压力。这样从库压力比主库高，保护主库。 3.服务的基础架构在业务和mysql之间加入memcache或者redis的cache层。降低mysql的读压力。 4.不同业务的mysql物理上放在不同机器，分散压力。 5.使用比主库更好的硬件设备作为slave总结，mysql压力小，延迟自然会变小。",
        "meta_info": "{'source': '/Users/chenketing/Desktop/project/DB-GPT-NEW/DB-GPT/pilot/data/chromascore/mysql-dba.txt'}",
        "recall_score": 0.5179764628410339
      },
      {
        "id": 17612,
        "content": "2)、mysql主从同步加速 1.sync_binlog在slave端设置为0 2.–logs-slave-updates 从服务器从主服务器接收到的更新不记入它的二进制日志。 3.直接禁用slave端的binlog",
        "meta_info": "{'source': '/Users/chenketing/Desktop/project/DB-GPT-NEW/DB-GPT/pilot/data/chromascore/mysql-dba.txt'}",
        "recall_score": 0.47952836751937866
      }
    ]
  }]
}
\`\`\`
`;

export default () => <Reference content={content} />;
```

## 标签协议

### 协议说明

使用code + 自定义language的方式定义标签

````| pure
```references
{
  "title": "References",
  "references": [{
    "name": "mysql-dba.txt",
    "chunks": [
      {
        "id": 17611,
        "content": "1.判断主从延迟的方法 可以通过命令 show slave status 查看 比如通过seconds_behind_master的值来判断 NULL - 表示io_thread或是sql_thread有任何一个发生故障，也就是该线程的Running状态是No,而非Yes. 0 - 该值为零，是我们极为渴望看到的情况，表示主从复制状态正常 2.主从延迟产生的原因及解决方案？ 主库的并发比较高的时候，产生的DDL数量超过了从库的一个sql线程所承受的范围，那么延时就产生了。 还有可能是与从库的大型query语句产生的了锁等待 。 网络抖动 解决方案： 1)、架构方面 1.业务的持久化层的实现采用分库架构，mysql服务可平行扩展，分散压力。 2.单个库读写分离，一主多从，主写从读，分散压力。这样从库压力比主库高，保护主库。 3.服务的基础架构在业务和mysql之间加入memcache或者redis的cache层。降低mysql的读压力。 4.不同业务的mysql物理上放在不同机器，分散压力。 5.使用比主库更好的硬件设备作为slave总结，mysql压力小，延迟自然会变小。",
        "meta_info": "{'source': '/Users/chenketing/Desktop/project/DB-GPT-NEW/DB-GPT/pilot/data/chromascore/mysql-dba.txt'}",
        "recall_score": 0.5179764628410339
      },
      {
        "id": 17612,
        "content": "2)、mysql主从同步加速 1.sync_binlog在slave端设置为0 2.–logs-slave-updates 从服务器从主服务器接收到的更新不记入它的二进制日志。 3.直接禁用slave端的binlog",
        "meta_info": "{'source': '/Users/chenketing/Desktop/project/DB-GPT-NEW/DB-GPT/pilot/data/chromascore/mysql-dba.txt'}",
        "recall_score": 0.47952836751937866
      }
    ]
  }]
}
```
````

### 自定义code language处理

```tsx | pure
import React from 'react';
import ReactMarkdown from 'react-markdown';
import ReferencesView from './ReferencesView';

type MarkdownComponent = Parameters<typeof ReactMarkdown>['0']['components'];

const basicComponents: MarkdownComponent = {
  code({ className, children }) {
    const lang = className?.replace('language-', '');

    if (lang === 'references') {
      try {
        const data = JSON.parse(String(children)) as {
          title: string;
          references: {
            name: string;
            chunks: number[];
          }[];
        };
        return <ReferencesView {...data} />;
      } catch (error) {
        return <p className="text-sm text-red-500">Render Reference Error!</p>;
      }
    }
  },
};
```

### 创建 ReferencesView 组件

```tsx | pure
import { LinkOutlined } from '@ant-design/icons';
import { Popover } from 'antd';
import React from 'react';

type Reference = {
  name: string;
  chunks: number[];
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

function ReferencesView({
  title,
  references,
}: {
  title: string;
  references: Reference[];
}) {
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
}

export default ReferencesView;
```
