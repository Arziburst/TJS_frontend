import styled from 'styled-components';
import Styles from '!!raw-loader!react-responsive-carousel/lib/styles/carousel.css';


export default {
    ProductCarauselContainer: styled.div`
        ${Styles};
        max-width: 400px;
        border-radius: 10px;
        overflow: hidden;

        .slide {
            display: flex;
            justify-content: center;
            background-color: transparent !important;
        }
    `,
};
