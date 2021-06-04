import {ExelComponent} from '@core/ExelComponent';

export class Header extends ExelComponent {
     static className = 'excel__header'
  toHTML() {
    return `<input class="input" type="text" value="Нова таблиця"/>
            <div class="button__container">
                <div class="button">
                    <span class="material-icons">delete</span>
                </div>
                <div class="button">
                    <span class="material-icons">exit_to_app</span>
                </div>
            </div>`
  }
}
