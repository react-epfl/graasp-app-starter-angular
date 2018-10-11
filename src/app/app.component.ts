import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, filter, skipWhile, skipUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mode = 'student';

  constructor(private route: ActivatedRoute) { }

  ngOnInit () {
    this.route.queryParamMap.pipe(
      map(params => params.get('mode')),
      skipWhile(mode => !Boolean(mode))
    ).subscribe(mode => {
      this.mode = mode;
      console.log(this.mode);
    });
  }
}
