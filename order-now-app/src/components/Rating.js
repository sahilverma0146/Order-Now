function Rating({ rating, vl, style, onClick }) {
  return (
    <>
      <div>{vl}</div>
      {/* {rating>i ?(<i class="fa-regular fa-star"></i>) : (<i class="fa-solid fa-star"></i>)} */}

      {[
        ...Array(5)].map((_, i) => (
          <span key={i} onClick={() => onClick(i)} style={style}>
            {rating > i ? (
             <i class="fa-solid fa-star"></i>
            ) : (
                <i class="fa-regular fa-star"></i>
            )}
          </span>
        ))
    }
    </>
  );
}

export default Rating;
