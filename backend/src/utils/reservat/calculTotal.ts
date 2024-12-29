import { Article } from "src/entities/article";

export function calculateTotal(articles: Article[]): number {
  return articles.reduce((sum: number, article: Article) => {
    const price = article.food?.price ? Number(article.food.price) : 0;
    return sum + price; 
  }, 0);
}
