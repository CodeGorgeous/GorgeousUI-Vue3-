import { ICgUI } from './interfaces';
import CgSelector from './components/Selector/index.vue';
import CgIcon from './components/Icon/index.vue'
import CgButton from './components/Button/index.vue'

const CgUIPond = [CgSelector, CgIcon, CgButton];

const CgUI: ICgUI = {
    install(Vue): void {
        for (const component of CgUIPond) {
            Vue.component(component.name, component)
        }
    }
};

export default CgUI;
