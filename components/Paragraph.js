import { Box, Typography } from "@mui/material"
import MuiMarkdown from 'mui-markdown';
import { ImageConstructor } from "components/Image";

const mapping = {
    h2: params=><Typography component={'h2'} variant='h4' {...params} mb={5} mt={5}/>,
    h3: params=><Typography component={'h3'} variant='h6' {...params} mb={5} mt={5}/>,
    p: params=><Typography component={'p'} variant='body1' {...params} mb={2} mt={2}/>,
    img: params => <Box textAlign={'center'}><ImageConstructor {...params}/></Box>
}
const Paragraph = ({title, content}) =>(
    <Box sx={{padding: {md: "0 200px", xs: 0}}}>
        <Typography component={'h2'} variant='h4' mb={5} textAlign={'center'}>{title}</Typography>
        {/* override headers */}
        <MuiMarkdown overrides={
            {
                img: {component: mapping.img},
                h2: {component: mapping.h2},
                p: {component: mapping.p}
            }
            }>{content}</MuiMarkdown>
    </Box>
)

export default Paragraph