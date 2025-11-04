import { Box, Paper } from "@mui/material";

export default function BusinessMap() {
  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        height: 200,
        cursor: "pointer",
        "&:hover": { opacity: 0.95 },
      }}
      component="a"
      href="https://maps.app.goo.gl/kdT2Pon53TnAGssU7" target="_blank"
      rel="noopener noreferrer"
    >
      {/* <Box
        component="iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509497!2d144.953735315904!3d-37.81627974201107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577fbaea3dfb07b!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sau!4v1696500000000!5m2!1sen!2sau"
        sx={{ border: 0, width: "100%", height: "100%", pointerEvents: "none" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      /> */}

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14276.792282458837!2d28.01155038829236!3d-26.54590409538259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e94feaebb433051%3A0x4f15650d6c28904d!2s6%20Loerie%20St%2C%20Meyerton%20Park%20(Farms)%2C%20Meyerton%2C%201961!5e0!3m2!1sen!2sza!4v1762222635560!5m2!1sen!2sza" width="600" height="450" style={{border:0}} loading="lazy" ></iframe>
     </Paper>
  );
}
