import React from "react";
import { FilterButton } from "../filter-button";
import actions from "../../redux/actions/creators";
import { useSelector } from "react-redux";
import { getFilter } from "../../redux/selectors";
import { FILTER_CONFIG } from "../../constants";
import styles from "./index.module.css";

export const TodoFilter = () => {
  const todosFilter = useSelector(getFilter);

  const { setFilter } = actions;
  return (
    <div className={styles.wrapper} onClick={() => console.log(todosFilter)}>
      <FilterButton
        clickHandler={setFilter}
        isActive={todosFilter === FILTER_CONFIG.ALL}
        filterLabel={FILTER_CONFIG.ALL}
      >
        All
      </FilterButton>
      <FilterButton
        clickHandler={setFilter}
        isActive={todosFilter === FILTER_CONFIG.DONE}
        filterLabel={FILTER_CONFIG.DONE}
      >
        Done
      </FilterButton>
      <FilterButton
        clickHandler={setFilter}
        isActive={todosFilter === FILTER_CONFIG.UNDONE}
        filterLabel={FILTER_CONFIG.UNDONE}
      >
        Undone
      </FilterButton>
    </div>
  );
};
