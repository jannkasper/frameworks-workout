import React from 'react'
import PropTypes from 'prop-types'
import FilterLink from '../containers/FilterLink'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from "../constants/TodoFilter"

const Footer = (props) => {
    const { activeCount, completedCount, onClearCompleted } = props;
    const itemWord = activeCount === 1 ? 'item' : 'items';

    return (
    <footer className="footer">
          <span className="todo-count">
              <strong>{activeCount || 'No'}</strong> {itemWord} left
          </span>

        <div className="filters">
            <span>Show: </span>
            <FilterLink filter={SHOW_ALL}>
                All
            </FilterLink>
            <FilterLink filter={SHOW_ACTIVE}>
                Active
            </FilterLink>
            <FilterLink filter={SHOW_COMPLETED}>
                Completed
            </FilterLink>
        </div>

        {
            !!completedCount &&
                <button className="clear-completed" onClick={onClearCompleted}>Clear completed</button>
        }

    </footer>
    )
}

Footer.propTypes = {
    completedCount: PropTypes.number.isRequired,
    activeCount: PropTypes.number.isRequired,
    onClearCompleted: PropTypes.func.isRequired,
}

export default Footer;
