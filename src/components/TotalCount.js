import React from 'react'

import { SH1 } from '../styledComponents/Heading'
import { GridContainerCenter } from '../styledComponents/GridContainerCenter';
import { TotalCountBox } from '../styledComponents/TotalCountBox';


export const TotalCount = ({total}) => {
    return (
        <TotalCountBox>
            <SH1>{total}</SH1>
        </TotalCountBox>
    )
};