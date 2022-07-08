import ArticleItem from '../components/ArticleItem'
import articleSyle from '../styles/Article.module.css'


const ArticleList = ({ articles }) => {
    return (
        <div className={articleSyle.grid}>
            {articles.map((article) => (
                <ArticleItem key={article} article={article} />
            ))}
        </div>
    )
}

export default ArticleList;