import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { actorsActions } from 'store/actors.slice';
import { Actor } from 'api/actors';
import { Select } from 'antd';
import { filterOptions } from 'utils/filters';
import classes from './MovieFilters.module.scss';

const { Option } = Select;

interface Props {
  filter: (value: string) => void;
}

export const MovieFilters = ({ filter }: Props) => {
  const { actors } = useSelector((state: RootState) => state.actors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actorsActions.getAll());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <h4>Filter by Actor</h4>
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select an Actor"
        data-testid="filter-actors"
        optionFilterProp="children"
        onChange={filter}
        filterOption={
          (input, option) => filterOptions(input, option?.children)
        }
      >
        <Option value="all">All</Option>
        {actors.map((actor: Actor) => (
          <Option key={actor.id} value={actor.id}>
            {actor.name}
          </Option>
        ))}
      </Select>
    </div>
  );
};
