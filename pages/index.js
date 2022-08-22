import { getEntries } from "contentful/client";
import { renderComponent } from "contentful/utils";


const Home = ({data}) => {

  return (
    data.map(content => renderComponent(content))
  );
};

export const getStaticProps = async (props)=>{
  const entries = await getEntries({
    content_type: 'page',
    'fields.slug': 'home' 
  })

  return {
    props: {data: entries.items[0].fields.content}
  }
}

export default Home