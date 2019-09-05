import React, { ReactNode } from 'react';

interface MasonryLayoutProps {
  children?: ReactNode;
  images: any[]; // TODO: typings
}

export default function MasonryLayout(props: MasonryLayoutProps) {
  return <>{props.children}</>;
}
