import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { Course } from "../model/course";
import { CourseImageComponent } from "../course-image/course-image.component";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent
  implements OnInit, AfterViewInit, AfterContentInit
{
  @Input({ required: true }) course: Course;
  @Input() cardIndex: number;
  @Input() noImageTemplate: TemplateRef<any>;
  @Output() courseSelected = new EventEmitter<Course>();
  // @ContentChild("courseImage") image;
  @ContentChild(CourseImageComponent, { read: ElementRef })
  image: ElementRef;

  @ContentChildren(CourseImageComponent, { read: ElementRef })
  images: QueryList<CourseImageComponent>;

  constructor() {}

  ngOnInit() {}

  onCourseViewed() {
    console.log("my test");
    this.courseSelected.emit(this.course);
  }
  ngAfterViewInit() {
    console.log("image", this.image);
  }
  ngAfterContentInit(): void {
    console.log("images", this.images);
  }
  isImageVisible() {
    return this.course?.iconUrl;
  }
  cardClasses() {
    if (this.course.category === "BEGINNER") {
      return "beginner";
    }
  }
  cardStyles() {
    return {
      "text-decoration": "underline",
    };
  }
}
