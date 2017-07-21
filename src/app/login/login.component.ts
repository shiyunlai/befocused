import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "../service/login.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private loginModel: FormGroup ;
  private fb: FormBuilder = new FormBuilder() ;

  constructor( public router: Router , public loginService: LoginService ) {
  }

  ngOnInit() {
    this.loginModel = this.fb.group({
      // userId 用户id： 必输、且最小6位
      userId: ['', [Validators.required,Validators.minLength(6)] ],
      // password 登陆密码：必输、且最小6位
      password: ['', [Validators.required,Validators.minLength(6)] ]
    }) ;
  }

  doLogin( ) {

    if( this.loginModel.valid ){
      //取出数据
      let userId: FormControl = this.loginModel.get("userId") as FormControl ;
      let password: FormControl = this.loginModel.get("password") as FormControl ;
      //调用登陆服务
      var loginSubscription = this.loginService.doLogin( userId.value, password.value ) ;
      //TODO 如果登陆处理未完成，一直滚动条提示

      //路由 登陆成功，进入home
      this.router.navigateByUrl("/home") ;

    }else{
      console.log("登陆信息不合法！") ;
    }

  }


}
