# Ava智能图标推荐

案例一

```tsx
/**
 * inline: true
 */
import { Chart } from 'GPT-Vis';

const content = `
根据您的需求，我将统计各个国家的销量，并给出柱状图展示。请稍等，我来为您生成相应的数据分析语句。
<chart-view content="{&quot;type&quot;: &quot;response_bar_chart&quot;, &quot;sql&quot;: &quot;SELECT Country, SUM(Units_Sold) AS Total_Units_Sold FROM excel_data GROUP BY Country&quot;, &quot;data&quot;: [{&quot;Country&quot;: &quot;Canada&quot;, &quot;Total_Units_Sold&quot;: 247428.5}, {&quot;Country&quot;: &quot;Germany&quot;, &quot;Total_Units_Sold&quot;: 201494.0}, {&quot;Country&quot;: &quot;France&quot;, &quot;Total_Units_Sold&quot;: 240931.0}, {&quot;Country&quot;: &quot;Mexico&quot;, &quot;Total_Units_Sold&quot;: 203325.0}, {&quot;Country&quot;: &quot;United States of America&quot;, &quot;Total_Units_Sold&quot;: 232627.5}]}"></chart-view>
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
sql SELECT "缺陷类型" AS "缺陷类型", "优先级" AS "缺陷优先级", COUNT(*) AS "缺陷数量" FROM excel_data GROUP BY "缺陷类型", "优先级";
\`\`\`

这个查询将返回每个缺陷类型和优先级的组合以及对应的缺陷数量。 请执行以SQL查询以分析缺陷类型与优先级的关系：
<chart-view content="{&quot;type&quot;:&quot;response_table&quot;,&quot;sql&quot;:&quot;SELECT \\&quot;缺陷类型\\&quot; AS \\&quot;缺陷类型\\&quot;, \\&quot;优先级\\&quot; AS \\&quot;缺陷优先级\\&quot;, COUNT(*) AS \\&quot;缺陷数量\\&quot; FROM excel_data GROUP BY \\&quot;缺陷类型\\&quot;, \\&quot;优先级\\&quot;;&quot;,&quot;data&quot;:[{&quot;缺陷类型&quot;:&quot;优化类&quot;,&quot;缺陷优先级&quot;:&quot;低&quot;,&quot;缺陷数量&quot;:2},{&quot;缺陷类型&quot;:&quot;UI类&quot;,&quot;缺陷优先级&quot;:&quot;低&quot;,&quot;缺陷数量&quot;:9},{&quot;缺陷类型&quot;:&quot;新增/变更需求类&quot;,&quot;缺陷优先级&quot;:&quot;紧急&quot;,&quot;缺陷数量&quot;:3},{&quot;缺陷类型&quot;:&quot;UI类&quot;,&quot;缺陷优先级&quot;:&quot;高&quot;,&quot;缺陷数量&quot;:12},{&quot;缺陷类型&quot;:&quot;优化类&quot;,&quot;缺陷优先级&quot;:&quot;紧急&quot;,&quot;缺陷数量&quot;:4},{&quot;缺陷类型&quot;:&quot;功能类&quot;,&quot;缺陷优先级&quot;:&quot;高&quot;,&quot;缺陷数量&quot;:4},{&quot;缺陷类型&quot;:&quot;UI类&quot;,&quot;缺陷优先级&quot;:&quot;紧急&quot;,&quot;缺陷数量&quot;:1},{&quot;缺陷类型&quot;:&quot;功能类&quot;,&quot;缺陷优先级&quot;:&quot;紧急&quot;,&quot;缺陷数量&quot;:1},{&quot;缺陷类型&quot;:&quot;新增/变更需求类&quot;,&quot;缺陷优先级&quot;:&quot;高&quot;,&quot;缺陷数量&quot;:5},{&quot;缺陷类型&quot;:&quot;优化类&quot;,&quot;缺陷优先级&quot;:&quot;高&quot;,&quot;缺陷数量&quot;:3},{&quot;缺陷类型&quot;:&quot;UI类&quot;,&quot;缺陷优先级&quot;:&quot;中&quot;,&quot;缺陷数量&quot;:2},{&quot;缺陷类型&quot;:null,&quot;缺陷优先级&quot;:&quot;紧急&quot;,&quot;缺陷数量&quot;:7},{&quot;缺陷类型&quot;:null,&quot;缺陷优先级&quot;:&quot;高&quot;,&quot;缺陷数量&quot;:66},{&quot;缺陷类型&quot;:null,&quot;缺陷优先级&quot;:&quot;中&quot;,&quot;缺陷数量&quot;:61},{&quot;缺陷类型&quot;:null,&quot;缺陷优先级&quot;:&quot;低&quot;,&quot;缺陷数量&quot;:97},{&quot;缺陷类型&quot;:&quot;兼容类&quot;,&quot;缺陷优先级&quot;:&quot;高&quot;,&quot;缺陷数量&quot;:1},{&quot;缺陷类型&quot;:&quot;新增/变更需求类&quot;,&quot;缺陷优先级&quot;:&quot;中&quot;,&quot;缺陷数量&quot;:2},{&quot;缺陷类型&quot;:&quot;功能类&quot;,&quot;缺陷优先级&quot;:&quot;中&quot;,&quot;缺陷数量&quot;:4},{&quot;缺陷类型&quot;:&quot;功能类&quot;,&quot;缺陷优先级&quot;:&quot;低&quot;,&quot;缺陷数量&quot;:1},{&quot;缺陷类型&quot;:null,&quot;缺陷优先级&quot;:&quot;无关紧要&quot;,&quot;缺陷数量&quot;:1}]}"></chart-view>
这样，您将获得一个表格，显示每个缺陷类型和优先级的组合以及对应的缺陷数量。同时，我们可以使用柱状图来更直观地展示缺陷类型与优先级的关系。请执行以下SQL查询以生成柱状图：
<chart-view content="{&quot;type&quot;: &quot;response_bar_chart&quot;, &quot;sql&quot;: &quot;SELECT \\&quot;缺陷类型\\&quot; AS \\&quot;缺陷类型\\&quot;, \\&quot;优先级\\&quot; AS \\&quot;缺陷优先级\\&quot;, COUNT(*) AS \\&quot;缺陷数量\\&quot; FROM excel_data GROUP BY \\&quot;缺陷类型\\&quot;, \\&quot;优先级\\&quot;;&quot;, &quot;data&quot;: [{&quot;缺陷类型&quot;: &quot;优化类&quot;, &quot;缺陷优先级&quot;: &quot;低&quot;, &quot;缺陷数量&quot;: 2}, {&quot;缺陷类型&quot;: &quot;UI类&quot;, &quot;缺陷优先级&quot;: &quot;低&quot;, &quot;缺陷数量&quot;: 9}, {&quot;缺陷类型&quot;: &quot;新增/变更需求类&quot;, &quot;缺陷优先级&quot;: &quot;紧急&quot;, &quot;缺陷数量&quot;: 3}, {&quot;缺陷类型&quot;: &quot;UI类&quot;, &quot;缺陷优先级&quot;: &quot;高&quot;, &quot;缺陷数量&quot;: 12}, {&quot;缺陷类型&quot;: &quot;优化类&quot;, &quot;缺陷优先级&quot;: &quot;紧急&quot;, &quot;缺陷数量&quot;: 4}, {&quot;缺陷类型&quot;: &quot;功能类&quot;, &quot;缺陷优先级&quot;: &quot;高&quot;, &quot;缺陷数量&quot;: 4}, {&quot;缺陷类型&quot;: &quot;UI类&quot;, &quot;缺陷优先级&quot;: &quot;紧急&quot;, &quot;缺陷数量&quot;: 1}, {&quot;缺陷类型&quot;: &quot;功能类&quot;, &quot;缺陷优先级&quot;: &quot;紧急&quot;, &quot;缺陷数量&quot;: 1}, {&quot;缺陷类型&quot;: &quot;新增/变更需求类&quot;, &quot;缺陷优先级&quot;: &quot;高&quot;, &quot;缺陷数量&quot;: 5}, {&quot;缺陷类型&quot;: &quot;优化类&quot;, &quot;缺陷优先级&quot;: &quot;高&quot;, &quot;缺陷数量&quot;: 3}, {&quot;缺陷类型&quot;: &quot;UI类&quot;, &quot;缺陷优先级&quot;: &quot;中&quot;, &quot;缺陷数量&quot;: 2}, {&quot;缺陷类型&quot;: null, &quot;缺陷优先级&quot;: &quot;紧急&quot;, &quot;缺陷数量&quot;: 7}, {&quot;缺陷类型&quot;: null, &quot;缺陷优先级&quot;: &quot;高&quot;, &quot;缺陷数量&quot;: 66}, {&quot;缺陷类型&quot;: null, &quot;缺陷优先级&quot;: &quot;中&quot;, &quot;缺陷数量&quot;: 61}, {&quot;缺陷类型&quot;: null, &quot;缺陷优先级&quot;: &quot;低&quot;, &quot;缺陷数量&quot;: 97}, {&quot;缺陷类型&quot;: &quot;兼容类&quot;, &quot;缺陷优先级&quot;: &quot;高&quot;, &quot;缺陷数量&quot;: 1}, {&quot;缺陷类型&quot;: &quot;新增/变更需求类&quot;, &quot;缺陷优先级&quot;: &quot;中&quot;, &quot;缺陷数量&quot;: 2}, {&quot;缺陷类型&quot;: &quot;功能类&quot;, &quot;缺陷优先级&quot;: &quot;中&quot;, &quot;缺陷数量&quot;: 4}, {&quot;缺陷类型&quot;: &quot;功能类&quot;, &quot;缺陷优先级&quot;: &quot;低&quot;, &quot;缺陷数量&quot;: 1}, {&quot;缺陷类型&quot;: null, &quot;缺陷优先级&quot;: &quot;无关紧要&quot;, &quot;缺陷数量&quot;: 1}]}"></chart-view>
这样，您将获得一份柱状图，用于展示缺陷类型与优先级的关系。希望这个分析结果和柱状图能对您的工作有所帮助！`;

export default () => <Chart content={content} />;
```

## 如何使用

`global.d.ts`声明自定义标签

```tsx | pure
declare namespace JSX {
  interface IntrinsicElements {
    'chart-view': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
  }
}
```

组件渲染处理逻辑

```tsx | pure
import ReactMarkdown from 'react-markdown';
import { format } from 'sql-formatter';
import { AutoChart, BackEndChartType, getChartType } from './AutoChart';

type MarkdownComponent = Parameters<typeof ReactMarkdown>['0']['components'];

const extraComponents: MarkdownComponent = {
  'chart-view': ({ children, content }) => {
    let data: {
      data: Datum[];
      type: BackEndChartType;
      sql: string;
    };
    try {
      data = JSON.parse(content as string);
    } catch (e) {
      console.log(e, content);
      data = {
        type: 'response_table',
        sql: '',
        data: [],
      };
    }

    const columns = data?.data?.[0]
      ? Object.keys(data?.data?.[0])?.map((item) => {
          return {
            title: item,
            dataIndex: item,
            key: item,
          };
        })
      : [];

    const ChartItem = {
      key: 'chart',
      label: 'Chart',
      children: (
        <AutoChart data={data?.data} chartType={getChartType(data?.type)} />
      ),
    };
    const SqlItem = {
      key: 'sql',
      label: 'SQL',
      children: (
        <CodePreview
          code={format(data?.sql, { language: 'mysql' }) as string}
          language={'sql'}
        />
      ),
    };
    const DataItem = {
      key: 'data',
      label: 'Data',
      children: <Table dataSource={data?.data} columns={columns} />,
    };
    const TabItems: TabsProps['items'] =
      data?.type === 'response_table'
        ? [DataItem, SqlItem]
        : [ChartItem, SqlItem, DataItem];

    return (
      <div>
        <Tabs
          defaultActiveKey={data?.type === 'response_table' ? 'data' : 'chart'}
          items={TabItems}
          size="small"
        />
        {children}
      </div>
    );
  },
};
```

## 协议规范

### ⚠️Tip

**最好是一个闭合标签**

```tsx | pure
<chart-view></chart-view>
```

**最好是通过标签属性传值**

```tsx | pure
<chart-view content="xxx"></chart-view>
```

**最好是JSON序列化内容**

```tsx | pure
<chart-view content="[{}]"></chart-view>
```

**字符转译**

> 如果是序列化后的JSON需要将 `"` 转译为 `&quot;` 否则react-markdown无法正常识别完整的标签

`<chart-view content="[{&quot;name&quot;: &quot;GPT-Vis&quot;}]"></chart-view>`
