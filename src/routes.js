import Home from './pages/Home.vue'
import Apps from './pages/Apps.vue'
import Contact from './pages/Contact.vue'
import About from './pages/About.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/apps', component: Apps },
    { path: '/contact', component: Contact },
    { path: '/about', component: About },
]

export default routes;