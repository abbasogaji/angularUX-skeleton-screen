import { Subject, observable } from 'rxjs';

export class UserService {
  repodata = [
    {title : 'Get the best out of bootstrap 4', description: 'i dunno this is demo bro', imageUrl : '/assets/img/1.jpg'},
    {title : 'Love is free shipping away', description: 'learn all you need in this', imageUrl : '/assets/img/4.jpg'},
    {title : 'Exploring the grass lands of Africa', description: 'the grass the green', imageUrl : '/assets/img/6.jpg'},
    {title : 'Roman PSD stuffs and more', description: 'learn all you need in this', imageUrl : '/assets/img/7.jpg'}
  ]
  userdata = { name: "Abbas Ogaji", email: "abbasogaji@example.com"}
  obs = new Subject()
  fetchData(){
    setTimeout(() => {
        this.obs.next({userdata : this.userdata, repodata : this.repodata });
    }, 5000)
    return this.obs;
  }
}