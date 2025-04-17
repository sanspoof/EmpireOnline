import css from './GoArrow.module.scss';

function GoArrow() {

    return (
        <svg className={css.goarrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29">
            <g id="Top">
                <path d="M14.5,0C6.49,0,0,6.49,0,14.5s6.49,14.5,14.5,14.5,14.5-6.49,14.5-14.5S22.51,0,14.5,0ZM20.22,14.68l-5.51,5.51-.18.18-.18-.18-.58-.58-.18-.18.18-.18,4.1-4.1h-9.16v-1.32h9.16l-4.1-4.1-.18-.18.18-.18.58-.58.18-.18.18.18,5.51,5.51.18.18-.18.18Z" />
            </g>
        </svg>
    )

}

export default GoArrow;
