
import { lazy } from 'react'
import type { Routes } from '@/@types/routes'

const sharedRoutes: Routes = [
    {
        key: 'homePage',
        path: `/hello`,
        component: lazy(() => import('@/views/Home')),
        authority: [],
    },
    // Add more shared routes here when needed
]

export default sharedRoutes;
