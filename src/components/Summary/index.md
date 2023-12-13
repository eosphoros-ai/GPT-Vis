---
order: 4
---

```tsx
/**
 * inline: true
 */
import { Summary } from 'GPT-Vis';

let content = `
<summary-view>
1. 钙钛矿材料在光电探测、激光、电致发光等领域表现出良好的应用前景。本文主要围绕钙钛矿光电探测器的研究展开，包括光电导型、光伏型、晶体管型及光电倍增型等四类，并介绍了其在阵列化、柔性、窄带、自驱动等特殊性能方面的重要突破。此外，有机-无机杂化钙钛矿材料结合了有机分子与无机分子的优势，提高了热稳定性、机械稳定性，并降低了制备成本。\n\n2. 钙钛矿光电探测器性能与形貌有关，光电导型探测器制作步骤简单，有多种形貌的报道。例如，Hu等在ITO电极图案的PET柔性衬底上制作了MAPbI3薄膜，实现了宽谱光电探测。Guo等通过在光电导型探测器上旋涂一层CYTOP薄膜，改善了器件稳定性和响应时间。Zhang等研究了MAPbI3薄膜形貌对探测器性能的影响，发现岛状网络结构有利于提高亮电流，使亮暗电流比提高一个数量级。\n\n3. 针对单晶钙钛矿光电探测器的性能优化，研究者们进行了多种尝试，包括替换有机阳离子、卤素和金属阳离子等。单晶钙钛矿具有陡峭的吸收带边，但存在亚带隙，其光电导响应来源于晶体表面缺陷态导致的吸收。相较于块体单晶钙钛矿，纳米线和纳米片状的单晶钙钛矿具有较低的缺陷态密度和天然形成的结构边界，可用于制备柔性器件。研究者通过控制溶液流动方向、油酸处理和光刻胶模板等方法，成功提高了器件的响应率、探测率和响应速度等性能。未来研究将集中在提高光吸收系数和载流子传输性能，以实现更优秀的光电电子器件。</summary-view>
`;

export default () => <Summary content={content} />;
```

## 如何使用

`global.d.ts`声明自定义标签

```tsx | pure
declare namespace JSX {
  interface IntrinsicElements {
    'references-view': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
  }
}
```

markdown自定义标签处理

```tsx | pure
import { ReadOutlined } from '@ant-design/icons';
import ReactMarkdown from 'react-markdown';

type MarkdownComponent = Parameters<typeof ReactMarkdown>['0']['components'];

const extraComponents: MarkdownComponent = {
  'summary-view': function ({ children }) {
    return (
      <div>
        <p className="mb-2">
          <ReadOutlined className="mr-2" />
          <span className="font-semibold">Document Summary</span>
        </p>
        <div>{children}</div>
      </div>
    );
  },
};
```

## 协议规范

### ⚠️Tip

**最好是一个闭合标签**

```tsx | pure
// BAD
<summary-view />

// GOOD
<summary-view></summary-view>
```
