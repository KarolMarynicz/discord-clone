import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";
import { ServiceBase } from "src/api/service-base";
import { UserModel } from "src/models/user.model";
import { StateService } from "src/app/state/state.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService extends ServiceBase<UserModel> {
  constructor(http: HttpClient,
              private state: StateService) {
    super('users', http);
  }

  public async loadUserById(id: number) {
    const user: UserModel = await lastValueFrom(this.getById(id.toString()));
    this.state.changeUserSettings({ id: user.id, user: { name: user.user.name } } as Partial<UserModel>);
  }
}
