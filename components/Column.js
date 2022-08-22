import { Stack } from "@mui/material"
import { renderComponent } from "contentful/utils"

const Column = ({content}) => {
    return (

    <Stack spacing={{ xs: 1, sm: 2, md: 4 }}>{content.map(component =>renderComponent(component))}</Stack>
    
    )
}

export default Column