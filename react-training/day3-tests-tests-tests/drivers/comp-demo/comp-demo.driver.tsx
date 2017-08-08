
import * as React from 'react';
import { getBaseReactDriver } from 'answers-ui-libby/dist/drivers';
import { renderAndMountComponent } from 'answers-ui-libby/dist/common';
import {CompDemo, CompDemoProps} from './comp-demo.comp';
import { BaseDriver } from 'answers-ui-libby/dist/common/base-driver';

export type CompDemoDriver = {
	getMagicNumbersLength: () => number,
	base: BaseDriver
};

export const createCompDemoDriver = (elem: Element): CompDemoDriver => {
	const base = getBaseReactDriver(elem);
	return {
		getMagicNumbersLength: () => parseInt(base.find('.length').getText(), 10),
		base
	};
};

export const renderCompDemoAndReturnDriver = (props: CompDemoProps): CompDemoDriver => {
	const elem = renderAndMountComponent(<CompDemo {...props} />);
	return createCompDemoDriver(elem);
};
