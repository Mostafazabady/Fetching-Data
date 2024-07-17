import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})

export class UserDetailComponent implements OnInit {
  user: any;
  loading = true;

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(Number(userId)).subscribe(data => {
      this.user = data;
      this.loading = false;
    });
  }
}
