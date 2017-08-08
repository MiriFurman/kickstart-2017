
import {expect} from 'chai';
import { renderCompDemoAndReturnDriver } from './comp-demo.driver';

describe('CompDemo', () => {
	it('should show the length of magic numbers!', () => {
		const props = {magic: [1, 2]};
		const driver = renderCompDemoAndReturnDriver(props);
		expect(driver.getMagicNumbersLength()).to.eql(2);
	});
});
