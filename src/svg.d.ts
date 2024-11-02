// TypeScript에서 SVG 파일을 React 컴포넌트로 인식하도록 추가적인 타입 정의
declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}
