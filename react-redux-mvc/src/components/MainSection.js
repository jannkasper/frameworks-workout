import React from "react";
import PropTypes from 'prop-types'
import VisibilityTodoList from "../containers/VisibilityTodoList";
import Footer from "./Footer";


const MainSection = ({ todosCount, completedCount, actions }) => (
    <section className="main">
        {
            !!todosCount &&
                <span>
                    <input
                        className="toggle-all"
                        type="checkbox"
                        checked={completedCount === todosCount}
                        readOnly
                        />
                    <label onClick={actions.completeAllTodos}>Checked all</label>

                </span>
        }
        <VisibilityTodoList />
        {
            !!todosCount &&
            <Footer
                completedCount={completedCount}
                activeCount={todosCount - completedCount}
                onClearCompleted={actions.clearCompleted}
            />
        }
    </section>
)

MainSection.propTypes = {
    todosCount: PropTypes.number.isRequired,
    completedCount: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired
}

export default MainSection;
