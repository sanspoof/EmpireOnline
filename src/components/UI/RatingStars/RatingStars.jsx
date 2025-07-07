

function RatingStars({rating}) {

    const filledStar = <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.2 22.06"><g id="Top"><path d="M18.77,22.06l-7.17-5.21-7.17,5.21,2.74-8.43L0,8.43h8.86L11.6,0l2.74,8.43h8.86l-7.17,5.21,2.74,8.43Z" /></g></svg>
    const emptyStar = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.2 22.06"><g id="Top"><path d="M23.2,8.43h-8.86L11.6,0l-2.74,8.43H0l7.17,5.21-2.74,8.43,7.17-5.21,7.17,5.21-2.74-8.43,7.17-5.21ZM12.48,15.64l-.88-.64-.88.64-3.43,2.49,1.31-4.04.34-1.04-.88-.64-3.43-2.49h5.33l.34-1.04,1.31-4.04,1.31,4.04.34,1.04h5.33l-3.43,2.49-.88.64.34,1.04,1.31,4.04-3.43-2.49Z"/></g></svg>


    if(rating === undefined || rating === null) {
        return <div className="">No rating available</div>;
    } else {

        return (

            <div className="flex items-center gap-0.5">
              {/* Filled stars */}
              {Array.from({ length: rating }, (_, i) => (
                <span className="size-6 fill-white" key={`filled-${i}`}>{filledStar}</span>
              ))} 
          
              {/* Empty stars to make up to 5 total */}
              {Array.from({ length: 5 - rating }, (_, i) => (
                <span className="size-6 fill-white" key={`empty-${i}`}>{emptyStar}</span>
              ))}
            </div>
    
          );
    }


    
}

export default RatingStars;