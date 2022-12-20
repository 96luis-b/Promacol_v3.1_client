import React from 'react'

import { SH1, H5, H4} from '../styledComponents/Heading'
import { GridContainerCenter } from '../styledComponents/GridContainerCenter';
import { TotalCountBox } from '../styledComponents/TotalCountBox';


export const TotalCount = ({total}) => {
    return (
        <TotalCountBox>
            {window.innerWidth > 540
                ? <SH1>{total}</SH1>
                : <H4>{total}</H4>
            }
        </TotalCountBox>
    )
};