---
title: 智能图标推荐
order: 5
---

# Antd/AVA智能图标推荐

案例一

```tsx
/**
 * inline: true
 */
import { Chart } from 'GPT-Vis';

const content = `
根据您的需求，我将统计各个国家的销量，并给出柱状图展示。请稍等，我来为您生成相应的数据分析语句。
\`\`\`chart
{
  "type": "response_bar_chart",
  "sql": "SELECT Country, SUM(Units_Sold) AS Total_Units_Sold FROM excel_data GROUP BY Country",
  "data": [
    {
      "Country": "Canada",
      "Total_Units_Sold": 247428.5
    },
    {
      "Country": "Germany",
      "Total_Units_Sold": 201494
    },
    {
      "Country": "France",
      "Total_Units_Sold": 240931
    },
    {
      "Country": "Mexico",
      "Total_Units_Sold": 203325
    },
    {
      "Country": "United States of America",
      "Total_Units_Sold": 232627.5
    }
  ]
}
\`\`\`
`;

export default () => <Chart content={content} />;
```

案例二

```tsx
/**
 * inline: true
 */
import { Chart } from 'GPT-Vis';

const content = `
为了分析缺陷类型与优先级的关系，并给出一份柱状图，我们可以使用以下SQL查询：

\`\`\`sql
SELECT "缺陷类型" AS "缺陷类型", "优先级" AS "缺陷优先级", COUNT(*) AS "缺陷数量" FROM excel_data GROUP BY "缺陷类型", "优先级";
\`\`\`

这个查询将返回每个缺陷类型和优先级的组合以及对应的缺陷数量。 请执行以SQL查询以分析缺陷类型与优先级的关系：
\`\`\`chart
{
  "type": "response_table",
  "sql": "SELECT \\"缺陷类型\\" AS \\"缺陷类型\\", \\"优先级\\" AS \\"缺陷优先级\\", COUNT(*) AS \\"缺陷数量\\" FROM excel_data GROUP BY \\"缺陷类型\\", \\"优先级\\";",
  "data": [
    {
      "缺陷类型": "优化类",
      "缺陷优先级": "低",
      "缺陷数量": 2
    },
    {
      "缺陷类型": "UI类",
      "缺陷优先级": "低",
      "缺陷数量": 9
    },
    {
      "缺陷类型": "新增/变更需求类",
      "缺陷优先级": "紧急",
      "缺陷数量": 3
    },
    {
      "缺陷类型": "UI类",
      "缺陷优先级": "高",
      "缺陷数量": 12
    },
    {
      "缺陷类型": "优化类",
      "缺陷优先级": "紧急",
      "缺陷数量": 4
    },
    {
      "缺陷类型": "功能类",
      "缺陷优先级": "高",
      "缺陷数量": 4
    },
    {
      "缺陷类型": "UI类",
      "缺陷优先级": "紧急",
      "缺陷数量": 1
    },
    {
      "缺陷类型": "功能类",
      "缺陷优先级": "紧急",
      "缺陷数量": 1
    },
    {
      "缺陷类型": "新增/变更需求类",
      "缺陷优先级": "高",
      "缺陷数量": 5
    },
    {
      "缺陷类型": "优化类",
      "缺陷优先级": "高",
      "缺陷数量": 3
    },
    {
      "缺陷类型": "UI类",
      "缺陷优先级": "中",
      "缺陷数量": 2
    },
    {
      "缺陷类型": null,
      "缺陷优先级": "紧急",
      "缺陷数量": 7
    },
    {
      "缺陷类型": null,
      "缺陷优先级": "高",
      "缺陷数量": 66
    },
    {
      "缺陷类型": null,
      "缺陷优先级": "中",
      "缺陷数量": 61
    },
    {
      "缺陷类型": null,
      "缺陷优先级": "低",
      "缺陷数量": 97
    },
    {
      "缺陷类型": "兼容类",
      "缺陷优先级": "高",
      "缺陷数量": 1
    },
    {
      "缺陷类型": "新增/变更需求类",
      "缺陷优先级": "中",
      "缺陷数量": 2
    },
    {
      "缺陷类型": "功能类",
      "缺陷优先级": "中",
      "缺陷数量": 4
    },
    {
      "缺陷类型": "功能类",
      "缺陷优先级": "低",
      "缺陷数量": 1
    },
    {
      "缺陷类型": null,
      "缺陷优先级": "无关紧要",
      "缺陷数量": 1
    }
  ]
}
\`\`\`
这样，您将获得一个表格，显示每个缺陷类型和优先级的组合以及对应的缺陷数量。同时，我们可以使用柱状图来更直观地展示缺陷类型与优先级的关系。请执行以下SQL查询以生成柱状图：
\`\`\`chart
{
  "type": "response_bar_chart",
  "sql": "SELECT \\"缺陷类型\\" AS \\"缺陷类型\\", \\"优先级\\" AS \\"缺陷优先级\\", COUNT(*) AS \\"缺陷数量\\" FROM excel_data GROUP BY \\"缺陷类型\\", \\"优先级\\";",
  "data": [
    {
      "缺陷类型": "优化类",
      "缺陷优先级": "低",
      "缺陷数量": 2
    },
    {
      "缺陷类型": "UI类",
      "缺陷优先级": "低",
      "缺陷数量": 9
    },
    {
      "缺陷类型": "新增/变更需求类",
      "缺陷优先级": "紧急",
      "缺陷数量": 3
    },
    {
      "缺陷类型": "UI类",
      "缺陷优先级": "高",
      "缺陷数量": 12
    },
    {
      "缺陷类型": "优化类",
      "缺陷优先级": "紧急",
      "缺陷数量": 4
    },
    {
      "缺陷类型": "功能类",
      "缺陷优先级": "高",
      "缺陷数量": 4
    },
    {
      "缺陷类型": "UI类",
      "缺陷优先级": "紧急",
      "缺陷数量": 1
    },
    {
      "缺陷类型": "功能类",
      "缺陷优先级": "紧急",
      "缺陷数量": 1
    },
    {
      "缺陷类型": "新增/变更需求类",
      "缺陷优先级": "高",
      "缺陷数量": 5
    },
    {
      "缺陷类型": "优化类",
      "缺陷优先级": "高",
      "缺陷数量": 3
    },
    {
      "缺陷类型": "UI类",
      "缺陷优先级": "中",
      "缺陷数量": 2
    },
    {
      "缺陷类型": null,
      "缺陷优先级": "紧急",
      "缺陷数量": 7
    },
    {
      "缺陷类型": null,
      "缺陷优先级": "高",
      "缺陷数量": 66
    },
    {
      "缺陷类型": null,
      "缺陷优先级": "中",
      "缺陷数量": 61
    },
    {
      "缺陷类型": null,
      "缺陷优先级": "低",
      "缺陷数量": 97
    },
    {
      "缺陷类型": "兼容类",
      "缺陷优先级": "高",
      "缺陷数量": 1
    },
    {
      "缺陷类型": "新增/变更需求类",
      "缺陷优先级": "中",
      "缺陷数量": 2
    },
    {
      "缺陷类型": "功能类",
      "缺陷优先级": "中",
      "缺陷数量": 4
    },
    {
      "缺陷类型": "功能类",
      "缺陷优先级": "低",
      "缺陷数量": 1
    },
    {
      "缺陷类型": null,
      "缺陷优先级": "无关紧要",
      "缺陷数量": 1
    }
  ]
}
\`\`\`
这样，您将获得一份柱状图，用于展示缺陷类型与优先级的关系。希望这个分析结果和柱状图能对您的工作有所帮助！`;

export default () => <Chart content={content} />;
```

## 标签协议

### 协议说明

使用code + 自定义language的方式定义标签

````| pure
```chart
{
  "type": "response_bar_chart",
  "sql": "SELECT Country, SUM(Units_Sold) AS Total_Units_Sold FROM excel_data GROUP BY Country",
  "data": [
    {
      "Country": "Canada",
      "Total_Units_Sold": 247428.5
    },
    {
      "Country": "Germany",
      "Total_Units_Sold": 201494
    },
    {
      "Country": "France",
      "Total_Units_Sold": 240931
    },
    {
      "Country": "Mexico",
      "Total_Units_Sold": 203325
    },
    {
      "Country": "United States of America",
      "Total_Units_Sold": 232627.5
    }
  ]
}
```
````

### 自定义code language处理

```tsx | pure
import React from 'react';
import ReactMarkdown from 'react-markdown';
import ChartView from './ChartView';
import { Datum } from '@antv/ava';

type MarkdownComponent = Parameters<typeof ReactMarkdown>['0']['components'];

const basicComponents: MarkdownComponent = {
  code({ className, children }) {
    const lang = className?.replace('language-', '');

    if (lang === 'chart') {
      let data: {
        data: Datum[];
        type: BackEndChartType;
        sql: string;
      };
      try {
        data = JSON.parse(String(children));
      } catch (e) {
        data = {
          type: 'response_table',
          sql: '',
          data: [],
        };
      }

      return <ChartView {...data} />;
    }
  },
};
```
