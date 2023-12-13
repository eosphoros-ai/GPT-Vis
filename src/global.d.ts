declare namespace JSX {
  interface IntrinsicElements {
    'chart-view': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
    'custom-view': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
    'references-view': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        references: any;
      },
      HTMLElement
    >;
    'summary-view': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
  }
}
