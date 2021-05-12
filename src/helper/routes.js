import Calculator from "../pages/Calculator";
import Home from "../pages/Home";
import MemoryGame from "../pages/MemoryGame";
import UserInfo from "../pages/UserInfo";


export const Routes = [
  {
    route: "/",
    component: Home,
    title: 'Home'
  },
  {
    route: "/calculator",
    component: Calculator,
    title: 'Calculator'
  },
  {
    route: "/userInfo",
    component: UserInfo,
    title: 'User Info'
  },
  {
    route: "/memoryGame",
    component: MemoryGame,
    title: 'Memory game'
  },

];