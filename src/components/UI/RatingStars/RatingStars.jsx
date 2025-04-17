import css from './RatingStars.module.scss';

function RatingStars({rating}) {

    const filledStar = <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.2 22.06"><g id="Top"><path d="M18.77,22.06l-7.17-5.21-7.17,5.21,2.74-8.43L0,8.43h8.86L11.6,0l2.74,8.43h8.86l-7.17,5.21,2.74,8.43Z" /></g></svg>
    const emptyStar = <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.2 22.06"><g id="Top"><path d="M18.77,22.06l-7.17-5.21-7.17,5.21,2.74-8.43L0,8.43h8.86L11.6,0l2.74,8.43h8.86l-7.17,5.21,2.74,8.43ZM11.6,15.92l5.73,4.17-2.19-6.74,5.73-4.17h-7.09l-2.19-6.74-2.19,6.74H2.32l5.73,4.17-2.19,6.74,5.73-4.17Z"/></g></svg>


    if(rating === undefined || rating === null) {
        return <div className={css.ratingstars}>No rating available</div>;
    } else {

        
    }

    return (

        <div className={css.ratingstars}>
          {/* Filled stars */}
          {Array.from({ length: rating }, (_, i) => (
            <span className={css.star} key={`filled-${i}`}>{filledStar}</span>
          ))} 
      
          {/* Empty stars to make up to 5 total */}
          {Array.from({ length: 5 - rating }, (_, i) => (
            <span className={css.star} key={`empty-${i}`}>{emptyStar}</span>
          ))}
        </div>

      );
    
}

export default RatingStars;