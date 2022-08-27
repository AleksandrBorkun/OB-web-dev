import { Breadcrumbs, Divider, Link, Stack, Typography } from "@mui/material"
import { Box } from "@mui/system";

import { ImageConstructor } from "components/Image"
import MetaHead from "components/MetaHead";

import { getEntries } from "contentful/client"
import { renderComponent } from "contentful/utils";
import { SignUpForm } from "pages/about";
import { getTranslation } from "translations";



const BlogArticle = ({cover, title, description, date, content, metaHead, slug}) => {

    return <>
    <MetaHead {...metaHead?.fields} metaUrl={`https://obweb.dev/blog/${slug}`}/>
    <Stack spacing={{ xs: 1, sm: 2, md: 4 }}>
            <ImageConstructor isCover {...cover?.fields}/>
            <Breadcrumbs mt={10} mb={5} separator="›" aria-label="breadcrumb" fontSize={'large'}>
                <Link underline="hover" color="inherit" href="/">
                    Home
                </Link>
                <Link
                    underline="hover"
                    color="text.primary"
                    href="/blog"
                >
                    {getTranslation('blog')}
                </Link>
            </Breadcrumbs>
            <Typography component={'h1'} variant='h2' textAlign={'center'}>{title}</Typography>
            <Typography component={'h5'} variant={'h5'}>{description}</Typography>
            {/* reformat date later */}
            <Typography component={'h6'} variant='h6'>{new Date(date).toDateString()}</Typography>
            {content?.map(component =>renderComponent(component))}
            <Divider variant='middle'/>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
                <SignUpForm/>
            </Box>
        </Stack>
        </>
}

export const getServerSideProps = async props =>{
    const slug = props.query.slug

    const articles = await getEntries({
        content_type: 'blogArticle',
        'fields.slug': slug
      })
    return {
        props: {...articles.items[0]?.fields, slug}
    }
}

export default BlogArticle