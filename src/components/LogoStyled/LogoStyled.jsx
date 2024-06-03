import PropTypes from 'prop-types';

export const LogoStyled = ({src, alt}) => {
    return <LogoStyled src={src} alt={alt} />
}

LogoStyled.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};