import React from 'react';
import PropTypes from 'prop-types'


const ButtonModal = ({title, onClick}) => {
    return (
        <button 
            className = 'buttonModal'
            onClick = {onClick}>
            {title}
        </button>
    )
}

ButtonModal.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default ButtonModal;