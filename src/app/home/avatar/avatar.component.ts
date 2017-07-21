import {Component, OnInit} from '@angular/core';

@Component ( {
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: [ './avatar.component.scss' ]
} )
export class AvatarComponent implements OnInit {

  public user: User;

  constructor () {
  }

  ngOnInit () {
    this.user = new User ( 'test009', '测试员', 'assets/img/user.jpg', 0, 0, 0, 0 );
  }

}

/**
 * 用户信息
 * 包括当前登陆员工的信息
 */
export class User {

  constructor (public code: string,
               public name: string,
               public picture: string,
               public totleItem: number,
               public totleDays: number,
               public doneItem: number,
               public doingItem: number) {
  }

}

