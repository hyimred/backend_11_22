import { Get, Controller, Render } from '@nestjs/common';



@Controller()
export class AppController {
  @Get()
  @Render('index')
  root() {
    const Name = ['Amogus','Noob','Sus','XD','NEV'];
    const Credit = [10, 0, 3, -2, 0];
    const Online = [true, false, false, true, true]

    const UsersOut_1 = [];
    const UsersOut_2 = [];
    
    for (let i = 0; i < Online.length; i++) {
      if (Online[i] == true) {
        UsersOut_1[i] = Name[i];
        UsersOut_2[i] = Credit[i]; 
      }
    }
    return {UsersOut_1, UsersOut_2 };
  }
}