import { Injectable } from '@angular/core';

/**
 * 登陆服务
 */
@Injectable()
export class LoginService {

  constructor() { }

  /**
   * 登陆（密码方式）
   * 请求服务端登陆服务，并获取服务返回的用户信息
   * @param useId 用户
   * @param password 密码
   * @returns {null}
   */
  doLogin( useId: string , password: string ): any {

    console.log("LoginService.doLogin : " + useId + "," + password ) ;
    return null ;
  }
}
