import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    title = 'app works!';

    obj: {
        [index: string]: any;
    } = {};

    constructor() {
        console.log(this.obj.test);
    }
}
