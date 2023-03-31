import {ChangeDetectionStrategy, Component, ElementRef, inject, Input, OnDestroy, OnInit} from '@angular/core';
import {FocusMonitor} from '@angular/cdk/a11y';

@Component({
  selector: '[byt-button]',
  standalone: true,
  imports: [],
  template: `
    <ng-content/>`,
  styles: [`
    :host {
      height: 2rem;
      padding: 0 0.75rem;
      box-sizing: border-box;
      border-radius: 8px;
    }

    :host(.byt-primary) {
      background-color: #e6f4ff;
      border: 1px solid #bfe3ff;
      color: #008dff;
    }

    :host(.byt-negative) {
      background-color: #fce8ee;
      border: 1px solid #f7c6d4;
      color: #de1a51;
    }
    :host(:focus) {
      outline: none;
    }
    :host(.byt-primary.cdk-keyboard-focused) {
      box-shadow: 0 0 0 3px rgba(0, 141, 255, 20%);
    }
    :host(.byt-negative.cdk-keyboard-focused) {
      box-shadow: 0 0 0 3px rgba(222, 26, 81, 20%);
    }

  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.byt-primary]': 'color === "primary"',
    '[class.byt-negative]': 'color === "negative"'
  }
})
export class BytButtonComponent implements OnInit, OnDestroy {


  /**
   * Define the appearance of the button
   */
  @Input() color: 'primary' | 'negative' = 'primary';

  #elementRef = inject(ElementRef<HTMLButtonElement>);
  #focusMonitor = inject(FocusMonitor);

  ngOnInit(): void {
    this.#focusMonitor.monitor(this.#elementRef);
  }

  ngOnDestroy(): void {
    this.#focusMonitor.stopMonitoring(this.#elementRef);
  }
}
