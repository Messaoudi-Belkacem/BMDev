import PropTypes from 'prop-types';
import './tag.css'

function Tag({ text }) {
    return(
        <div className='bmdev__tag'>
                <p>{text}</p>
        </div>
    )
}

Tag.propTypes = {
    text: PropTypes.string.isRequired
}

export default Tag