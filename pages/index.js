import MetaHead from "components/MetaHead";
import { getEntries } from "contentful/client";
import { renderComponent } from "contentful/utils";


const Home = ({data, metaHead}) => {

  return (
    <>
    <MetaHead {...metaHead} metaUrl={'https://obweb.dev'}/>
    {data && data.map(content => renderComponent(content))}
    </>
  );
};

export const getStaticProps = async (props)=>{
  const entries = await getEntries({
    content_type: 'page',
    'fields.slug': 'home' 
  })

  return {
    props: {data: entries.items[0].fields.content, metaHead: entries.items[0].fields.metaHead.fields}
  }
}

export default Home