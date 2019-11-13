import React from 'react';
import HashLoader from 'react-spinners/HashLoader';
import { css } from '@emotion/core';

const spinner = (props)=>{

	const override = css`
    display: block;
    margin: 0 auto;
    border-color: red; `;

    return(
		<HashLoader
	          css={override}
	          sizeUnit={"px"}
	          size={150}
	          color={'#123abc'}
	          loading={props.loading}
	    />
    )
}

export default spinner;