import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from "@angular/core";

@Directive({
  selector: "[highlighted]",
  exportAs: "hl",
})
export class HighlightedDirective {
  @Input("highlighted") isHighLighted = false;
  @Output() toggleHighlight = new EventEmitter();

  constructor() {
    console.log("directive");
  }

  @HostBinding("class.highlighted") get cssClasses() {
    return this.isHighLighted;
  }

  @HostListener("mouseover", ["$event"]) mouseOver($event) {
    console.log($event);
    this.isHighLighted = true;
    this.toggleHighlight.emit(this.isHighLighted);
  }

  @HostListener("mouseleave") mouseLeave() {
    this.isHighLighted = false;
    this.toggleHighlight.emit(this.isHighLighted);
  }

  toggle() {
    this.isHighLighted = !this.isHighLighted;
    this.toggleHighlight.emit(this.isHighLighted);
  }
}
