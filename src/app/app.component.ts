import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { CourseCardComponent } from "./course-card/course-card.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewInit {
  courses = COURSES;
  // startDate = new Date(2000, 0, 1);
  // title = COURSES[0].description;
  // price = 9.99;
  // rate = 67;
  @ViewChild("cardRef", { read: ElementRef }) card: ElementRef;
  @ViewChild("container") containerDiv: ElementRef;
  @ViewChildren(CourseCardComponent) cards: QueryList<CourseCardComponent>;
  

  constructor() {}

  ngAfterViewInit(): void {
    this.cards.changes.subscribe((cards) => {
      console.log(cards);
    });
  }

  onCoursesEdited() {
    this.courses.push({
      id: 1,
      description: "Angular Core Deep Dive",
      iconUrl:
        "https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png",
      longDescription:
        "A detailed walk-through of the most important part of Angular - the Core and Common modules",
      category: "INTERMEDIATE",
      lessonsCount: 10,
    });
  }

  onCourseSelected(course: Course) {
    console.log("test", this.card);
  }
}
