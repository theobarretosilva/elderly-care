import * as S from './ErrorText.styles'
import PropTypes from 'prop-types';

export function ErrorText({ children }) {
  return <S.P>{children}</S.P>
}
ErrorText.propTypes = {
    children: PropTypes.node.isRequired,
};