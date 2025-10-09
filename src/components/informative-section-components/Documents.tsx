import { styles } from '@/styles/styles'
import DocumentsData from '@/utils/data/documents'
import { Box, CardHeader, Container, Grid, IconButton, Stack, Typography } from '@mui/material'
import DownloadIcon from '@mui/icons-material/FileDownload';
import React from 'react'
import Heading4 from '../UI/Heading4';

const Documents = () => {
  return (
    <Container
      sx={{
        ...styles.container
      }}
    >
      <Stack gap={4}>
        <Heading4 title='policy documents & forms' subTitle='download our policy documents' />
        <Grid container spacing={2}>
          {
            DocumentsData.map((document, index) => (
              <Grid key={index} size={{ xs: 12, md: 6 }}
              >
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  sx={{
                    ...styles.glassOutlined,
                    padding: "1rem",
                    height: "100px",
                  }}
                >
                  <CardHeader
                    title={document.name}
                    subheader={document.description}
                    sx={{ textTransform: "capitalize" }}
                  />
                  <Box
                    sx={{ display: "flex", alignItems: "flex-end", justifyContent: "right", p: "0 1rem 1rem" }}
                  >
                    <Box
                      sx={{ ...styles.center_flex, cursor: "pointer" }}
                      gap={1}
                    >
                      <Typography
                        variant='body1'
                        textTransform={"capitalize"}
                      >
                        download
                      </Typography>
                      <IconButton size="small" sx={{ borderRadius: "50%" }} href={document.link}>
                        <DownloadIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </Box>
                </Stack>
              </Grid>
            ))
          }
        </Grid>
      </Stack>
    </Container >
  )
}

export default Documents