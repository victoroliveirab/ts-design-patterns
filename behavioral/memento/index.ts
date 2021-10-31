import utils from '../../utils';
import { Caretaker } from './caretaker';
import { BaseOriginator } from './originator';

class StringHistory extends BaseOriginator<string> {}

const history = new StringHistory('default');
const keeper = new Caretaker(history);

keeper.store();
history.state = 'string #2';

keeper.store();
history.state = 'jump me';

history.state = 'string #3';

keeper.store();
history.state = 'string #4';

keeper.store();

utils.printWithTime(`Current string: ${keeper.current}`);
keeper.undo();
utils.printWithTime(`Current string: ${keeper.current}`);
keeper.undo();
utils.printWithTime(`Current string: ${keeper.current}`);
keeper.undo();
utils.printWithTime(`Current string: ${keeper.current}`);
keeper.undo();
utils.printWithTime(`Current string: ${keeper.current}`);
