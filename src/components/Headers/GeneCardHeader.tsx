import { Stack, Typography } from '@mui/material'
import React from 'react'

interface Props {
    title?: string,
    subTitle?: string
}

const GeneCardHeader: React.FC<Props> = ({ title, subTitle }) => {
    return (
        <Stack gap={0.5}>
            <Typography variant="h4" textTransform="capitalize" fontWeight="regular">{title}</Typography>
            <Typography variant="body2" textTransform="capitalize" fontWeight="regular">{subTitle}</Typography>
        </Stack >
    )
}

export default GeneCardHeader