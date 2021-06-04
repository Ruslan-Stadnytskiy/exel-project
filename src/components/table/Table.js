import {ExelComponent} from '@core/ExelComponent';

export class Table extends ExelComponent {
     static className = 'excel__table'
  toHTML() {
    return `
    <div class="row">
    <div class="row-info"></div>
    <div class="row-data">
        <div class="column">A</div>
        <div class="column">B</div>
        <div class="column">C</div>
         <div class="column">A</div>
        <div class="column">B</div>
        <div class="column">C</div>
         <div class="column">A</div>
        <div class="column">B</div>
        <div class="column">C</div>
         <div class="column">A</div>
        <div class="column">B</div>
        <div class="column">C</div>
         <div class="column">A</div>
        <div class="column">B</div>
        <div class="column">C</div>
         <div class="column">A</div>
        <div class="column">B</div>
        <div class="column">C</div>
         <div class="column">A</div>
        <div class="column">B</div>
        <div class="column">C</div>
    </div>
</div>
            <div class="row">
    <div class="row-info">1</div>
    <div class="row-data">
        <div class="cell selected"  contenteditable>A</div>
        <div class="cell" contenteditable>B</div>
        <div class="cell" contenteditable>C</div>
    </div>
</div>
             <div class="row">
    <div class="row-info">2</div>
    <div class="row-data">
        <div class="cell"  contenteditable>A</div>
        <div class="cell" contenteditable>B</div>
        <div class="cell" contenteditable>C</div>
    </div>
</div>
    `;
  }
}
