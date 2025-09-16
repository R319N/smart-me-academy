import { styles } from '@/styles/styles'
import DocumentsData from '@/utils/data/documents'
import { Box, CardHeader, Container, Grid, Typography } from '@mui/material'
import DownloadIcon from '@mui/icons-material/FileDownload';
import React from 'react'
import GlowingButtonOutlined from '../glowingButtonOutlined';
import Description from '@mui/icons-material/Description';

const Documents = () => {
  return (
    <Container
      sx={{
        ...styles.container
      }}
    >
      {/* <Box width="100%">
        <HeadingText
          header="my work"
          subHeader="explore some of the awesome work we have done
for our clients so far"
        /> */}
      <Grid container spacing={2}>
        {
          DocumentsData.map((document, index) => (
            <Grid container key={index} size={{ xs: 12, md: 6 }} padding="1rem" sx={{
              ...styles.glassOutlined, height: '140px', width: '100%',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: "1rem"
            }} >


              <Grid size={2}>
                <Box>
                  <Description />
                  <Typography variant='body2' color="textSecondary">
                    pdf
                  </Typography>
                  <Typography variant='body2' color="textSecondary">
                    {document.size}
                  </Typography>
                </Box>

              </Grid>
              <Grid size={7}>

                <CardHeader
                  title={document.name}
                  subheader={document.description}
                  sx={{ textTransform: "capitalize" }}
                />
                {/* <CardActions>
                <GlowingButtonOutlined endIcon={<DownloadIcon />} size="small" href={document.link} rel="noopener noreferrer">
                  Download
                </GlowingButtonOutlined>
              </CardActions> */}
                {/* {document.name} */}
              </Grid>
              <Grid size={3} sx={{ ...styles.center_flex }}>
                <GlowingButtonOutlined endIcon={<DownloadIcon />} size="small" href={document.link} rel="noopener noreferrer">
                  Download
                </GlowingButtonOutlined>
              </Grid>

            </Grid>

          ))
        }
        {/* <Grid size={{xs:12, md:6}}>
a
    </Grid>
    <Grid size={{xs:12, md:6}}>
        
    </Grid>
    <Grid size={{xs:12, md:6}}>
        
    </Grid>
    <Grid size={{xs:12, md:6}}>
        
    </Grid> */}
      </Grid>
    </Container>
  )
}

export default Documents