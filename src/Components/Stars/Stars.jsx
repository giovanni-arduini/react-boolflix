export default function Stars({ stars }) {
  const emptyStars = 5 - stars;
  return (
    <>
      <div>
        <p>stars: {stars}</p>
        {Array(stars)
          .fill("")
          .map((_, index) => (
            <div key={index}>
              <p>{"Stella piena"}</p>
            </div>
          ))}
        {emptyStars &&
          Array(emptyStars)
            .fill("")
            .map((_, index) => (
              <div key={index}>
                <p>{"Stella vuota"}</p>
              </div>
            ))}
      </div>
    </>
  );
}
