import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from "../services/database.service";


@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css'],
  providers:[DatabaseService]
})
export class ConfirmComponent implements OnInit {

  id: string;
  name: string;
  private sub: any;

  constructor(private route: ActivatedRoute, private database: DatabaseService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
    this.id = params['id'];
  });
    this.database.getInfo(this.id).subscribe(data => this.name = data);
  }
}
