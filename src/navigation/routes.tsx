import type { ComponentType, JSX } from 'react';
import { IndexPage } from '../pages/IndexPage/IndexPage';
import { InitDataPage } from '../pages/InitDataPage/InitDataPage';
import { LaunchParamsPage } from '../pages/LaunchParamsPage/LaunchParamsPage';
import { ThemeParamsPage } from '../pages/ThemeParamsPage/ThemeParamsPage';
import { TONConnectPage } from '../pages/TONConnectPage/TONConnectPage';


interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
}

export const routes: Route[] = [
  { path: '/', Component: IndexPage },
  { path: '/init-data', Component: InitDataPage, title: 'Init Data' },
];
