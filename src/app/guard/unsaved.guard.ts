import {CanDeactivate} from '.4.4.6@@angular/router';
import { ProductComponent } from "../product/product.component";

export class UnsavedGuard implements CanDeactivate<ProductComponent>{
    canDeactivate(component: ProductComponent){
        return window.confirm("您还没有保存，确定要离开么？")
    }

}