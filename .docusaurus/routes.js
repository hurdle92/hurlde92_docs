import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/about',
    component: ComponentCreator('/about', '9ba'),
    routes: [
      {
        path: '/about',
        component: ComponentCreator('/about', '952'),
        routes: [
          {
            path: '/about',
            component: ComponentCreator('/about', '623'),
            routes: [
              {
                path: '/about/category/포트폴리오-경력기술',
                component: ComponentCreator('/about/category/포트폴리오-경력기술', '63d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/category/포트폴리오-경력기술-1',
                component: ComponentCreator('/about/category/포트폴리오-경력기술-1', 'd0b'),
                exact: true,
                sidebar: "sideprojectSidebar"
              },
              {
                path: '/about/Introduction',
                component: ComponentCreator('/about/Introduction', '7bc'),
                exact: true,
                sidebar: "sideprojectSidebar"
              },
              {
                path: '/about/portfolio/admin_company',
                component: ComponentCreator('/about/portfolio/admin_company', '106'),
                exact: true,
                sidebar: "sideprojectSidebar"
              },
              {
                path: '/about/portfolio/admin_plus',
                component: ComponentCreator('/about/portfolio/admin_plus', 'fab'),
                exact: true,
                sidebar: "sideprojectSidebar"
              },
              {
                path: '/about/portfolio/adot_on',
                component: ComponentCreator('/about/portfolio/adot_on', '3da'),
                exact: true,
                sidebar: "sideprojectSidebar"
              },
              {
                path: '/about/portfolio/ai_prototype',
                component: ComponentCreator('/about/portfolio/ai_prototype', '138'),
                exact: true,
                sidebar: "sideprojectSidebar"
              },
              {
                path: '/about/portfolio/apost',
                component: ComponentCreator('/about/portfolio/apost', 'ade'),
                exact: true,
                sidebar: "sideprojectSidebar"
              },
              {
                path: '/about/portfolio/app_v1',
                component: ComponentCreator('/about/portfolio/app_v1', 'd31'),
                exact: true,
                sidebar: "sideprojectSidebar"
              },
              {
                path: '/about/portfolio/blendin',
                component: ComponentCreator('/about/portfolio/blendin', '53a'),
                exact: true,
                sidebar: "sideprojectSidebar"
              },
              {
                path: '/about/portfolio/reboot',
                component: ComponentCreator('/about/portfolio/reboot', '502'),
                exact: true,
                sidebar: "sideprojectSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'e8e'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '1ed'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'f6b'),
            routes: [
              {
                path: '/docs/Deploy',
                component: ComponentCreator('/docs/Deploy', 'b1c'),
                exact: true,
                sidebar: "defaultSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/sideproject',
    component: ComponentCreator('/sideproject', '6a5'),
    routes: [
      {
        path: '/sideproject',
        component: ComponentCreator('/sideproject', '254'),
        routes: [
          {
            path: '/sideproject',
            component: ComponentCreator('/sideproject', '8cb'),
            routes: [
              {
                path: '/sideproject/category/개발하며-고민한-부분',
                component: ComponentCreator('/sideproject/category/개발하며-고민한-부분', '609'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sideproject/category/개발하며-고민한-부분-1',
                component: ComponentCreator('/sideproject/category/개발하며-고민한-부분-1', '3c8'),
                exact: true,
                sidebar: "sideprojectSidebar"
              },
              {
                path: '/sideproject/features',
                component: ComponentCreator('/sideproject/features', '172'),
                exact: true,
                sidebar: "sideprojectSidebar"
              },
              {
                path: '/sideproject/feedback',
                component: ComponentCreator('/sideproject/feedback', 'f9e'),
                exact: true,
                sidebar: "sideprojectSidebar"
              },
              {
                path: '/sideproject/insights/flutter',
                component: ComponentCreator('/sideproject/insights/flutter', '548'),
                exact: true,
                sidebar: "sideprojectSidebar"
              },
              {
                path: '/sideproject/insights/mvvm',
                component: ComponentCreator('/sideproject/insights/mvvm', 'a22'),
                exact: true,
                sidebar: "sideprojectSidebar"
              },
              {
                path: '/sideproject/insights/sentry',
                component: ComponentCreator('/sideproject/insights/sentry', '4c6'),
                exact: true,
                sidebar: "sideprojectSidebar"
              },
              {
                path: '/sideproject/insights/supabase',
                component: ComponentCreator('/sideproject/insights/supabase', 'c65'),
                exact: true,
                sidebar: "sideprojectSidebar"
              },
              {
                path: '/sideproject/insights/update',
                component: ComponentCreator('/sideproject/insights/update', 'ef9'),
                exact: true,
                sidebar: "sideprojectSidebar"
              },
              {
                path: '/sideproject/introduction',
                component: ComponentCreator('/sideproject/introduction', '340'),
                exact: true,
                sidebar: "sideprojectSidebar"
              },
              {
                path: '/sideproject/tech_stacks',
                component: ComponentCreator('/sideproject/tech_stacks', '225'),
                exact: true,
                sidebar: "sideprojectSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
