import {id} from './helper';

const createLocation = (label, timeZone) => ({
  id: id(),
  label,
  timeZone
});

export default createLocation;
