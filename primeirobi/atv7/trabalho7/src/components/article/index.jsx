export default function Article({ title, author, date, content, imageUrl, imageAlt }) {
  return (
    <article>
      <h2>{title}</h2>
      <p><strong>Autor:</strong> {author}</p>
      <time dateTime={date}>{date}</time>
      <p>{content}</p>
      {imageUrl && (
        <figure>
          <img src={imageUrl} alt={imageAlt || title} />
        </figure>
      )}
    </article>
  );
}
