import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout/index'

export const constantRoutes = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                hidden: true,
                path: 'index',
                component: () =>
                    import('@/views/my-hotel/index'),


            },
            {
                path: '/all-hotels',
                component: () =>
                    import('@/views/my-hotel/index'),
                name: 'All Hotels'

            },
            {
                path: '/my-hotels',
                component: () =>
                    import('@/views/my-hotel/index'),
                name: 'My Hotels',

            },
            {
                hidden: true,
                path: '/my-hotels/:id/rooms',
                component: () =>
                    import('@/views/hotel-rooms/index'),
                name: 'Hotel Rooms',
            }

        ]

    }];

const createRouter = () => new Router({
    mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()


export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router