import { Button, Input, Layout, Menu } from "ant-design-vue"
import { App } from "vue"

const components = [
    Button,
    Input,
    Layout,
    Menu
]

export default function install(app: App) {
    components.forEach(component => {
        app.use(component)
    })
}