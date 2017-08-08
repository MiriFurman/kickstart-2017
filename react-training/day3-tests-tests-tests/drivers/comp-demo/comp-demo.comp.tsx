
import * as React from 'react';

export type CompDemoProps = {
	magic: number[]
};

export const CompDemo: React.SFC<CompDemoProps> = (props) => {
	return <h1>Magic numbers length - {props.magic.length}</h1>;
};
