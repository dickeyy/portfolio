import SEOHead from "@/comps/seoHead";
import { getPostData, getAllPostIds } from "../../utils/posts";
import BlogLayout from "@/comps/blogLayout";
import BlogDate from "@/comps/blogDate";
import BlogAuthor from "@/comps/blogAuthor";

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
      paths,
      fallback: false,
    };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id);
    console.log(postData);
    return {
      props: {
        postData,
      },
    };
}

export default function BlogPost({ postData }: any) {

    console.log(postData);

    // process contentHtml to add styles
    const contentHtml = postData.contentHtml.replace(/<h2>/g, '<h2 class="text-3xl font-bold mt-8 mb-4">');
    const contentHtml2 = contentHtml.replace(/<p>/g, '<p class=" text-zinc-300 text-lg">');
    const contentHtml3 = contentHtml.replace(/<code>/g, '<code class="text-zinc-300">');
    const contentHtml4 = contentHtml.replace(/<pre>/g, '<pre class="bg-zinc-500/20 p-5 rounded-[8px] mb-5">')

    postData.contentHtml = contentHtml;
    postData.contentHtml = contentHtml2;
    postData.contentHtml = contentHtml3;
    postData.contentHtml = contentHtml4;

    return (

        <div className='
            flex 
            dark
            flex-col
            h-screen
            sm:p-10
            pt-5
            px-5
        '>
            
            <SEOHead title={postData.title} />
            
            <article className="
                flex
                flex-col
                justify-center
                items-center
                text-center
            ">
                
                <div className="
                    bg-zinc-500/20 
                    p-5
                    rounded-[8px]
                    mb-2
                    text-left
                    sm:w-[70vw]
                    md:w-[70vw]
                    lg:w-[60vw]
                ">
                    <h1 className="text-4xl font-bold">{postData.title}</h1>
                    
                    <hr className='
                        border-zinc-800
                        my-5
                    '/>

                    <BlogAuthor name={postData.author} date={postData.date} />

                </div>

                <div className=" 
                    bg-zinc-500/20 
                    p-5
                    rounded-[8px]
                    text-left
                    mb-10
                    sm:w-[70vw]
                    md:w-[70vw]
                    lg:w-[60vw]
                "
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                >
                    
                </div>

                
                
            </article>

        </div>

    )

}