import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const customMap = new CustomMap("map");
const company = new Company();
const user = new User();

const santoDomingo = {
  lat: 18.4776381,
  lng: -69.9910697
};

customMap.addMaker(company);
customMap.addMaker(user);
