import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTitle = styled.h2 `
     font-family: 'Courier New', Courier, monospace;
    font-size: xx-large;
    color: #f93a13;
    display: flex;
    justify-content: center;
    align-items: center;
`


export const Notification = ({message}) => {
    return (
        <StyledTitle>{ message }</StyledTitle>
)
}

Notification.propTypes = {
    message: PropTypes.string
}