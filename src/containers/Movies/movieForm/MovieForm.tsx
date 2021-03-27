import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { moviesActions } from 'store/movies.slice';
import { ErrorMessage } from 'containers/errorMessage';
import {
  Form,
  Input,
  InputNumber,
  Select,
  Button,
  message,
} from 'antd';
import { Actor } from 'api/actors';
import { Genre } from 'api/genres';
import { MoviePayload } from 'api/movies';
import classes from './MovieForm.module.scss';

const { Option } = Select;

interface Props {
  actors: Actor[];
  genres: Genre[];
}

export const MovieForm = ({ actors, genres }: Props) => {
  const { error } = useSelector((state: RootState) => state.movies);
  const { success } = useSelector((state: RootState) => state.movies);

  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const submitMovie = (values: any) => {
    message.loading('Creating Movie');

    const {
      title,
      year,
      runtime,
      director,
      plot,
      poster,
      actorsIds,
      genresIds,
    } = values;

    const movieData: MoviePayload = {
      title,
      year: parseInt(year, 10),
      runtime: parseInt(runtime, 10),
      director,
      plot,
      posterUrl: poster,
      actorIds: actorsIds,
      genreIds: genresIds,
    };

    dispatch(moviesActions.create(movieData));
  };

  useEffect(() => {
    if (success) {
      message.success(success);
    }
  }, [success]);

  const filterOptions = (input: string, option: string) => (
    option.toLowerCase().indexOf(input.toLowerCase()) >= 0
  );

  return (
    <Form
      className={classes.root}
      form={form}
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 16 }}
      layout="horizontal"
      onFinish={submitMovie}
    >
      <div style={{}}>
        <Form.Item
          label="Title"
          name="title"
          required
          rules={[{ required: true, message: 'Please insert a movie title.' }]}
        >
          <Input placeholder="Insert movie title" aria-label="title" />
        </Form.Item>
      </div>

      <Form.Item
        label="Year"
        name="year"
        rules={[{ required: true, message: 'Please insert movie year release.' }]}
      >
        <InputNumber
          aria-label="year"
          placeholder={new Date().getFullYear().toString()}
        />
      </Form.Item>

      <Form.Item
        label="Runtime (min)"
        name="runtime"
        rules={[{ required: true, message: 'Please insert movie runtime.' }]}
      >
        <InputNumber
          aria-label="runtime"
          placeholder="100"
        />
      </Form.Item>

      <Form.Item
        label="Director"
        name="director"
        rules={[{ required: true, message: 'Please insert a movie director.' }]}
      >
        <Input placeholder="Insert director's name" aria-label="director" />
      </Form.Item>
      <Form.Item
        label="Plot"
        name="plot"
        rules={[{ required: true, message: 'Please insert a movie plot.' }]}
      >
        <Input.TextArea placeholder="Insert movie plot description" aria-label="plot" />
      </Form.Item>
      <Form.Item
        label="Poster Image"
        name="poster"
        rules={[{ required: true, message: 'Please insert a movie poster image url.' }]}
      >
        <Input placeholder="Insert poster image URL" aria-label="poster" />
      </Form.Item>

      <Form.Item
        label="Starring Actors"
        name="actorsIds"
        rules={[{ required: true, message: 'Please select starring actors.' }]}
      >
        <Select
          mode="multiple"
          showSearch
          placeholder="Select Actors"
          data-testid="select-actors"
          filterOption={(input, option) => filterOptions(input, option?.children)}
        >
          {actors.map((actor: Actor) => (
            <Option key={actor.id} value={actor.id}>
              {actor.name}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Genre"
        name="genresIds"
        rules={[{ required: true, message: 'Please select movie genre or genres.' }]}
      >
        <Select
          mode="multiple"
          showSearch
          placeholder="Select Genres"
          data-testid="select-genres"
          filterOption={(input, option) => filterOptions(input, option?.children)}
        >
          {genres.map((genre: Genre) => (
            <Option key={genre.id} value={genre.id}>
              {genre.name}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      <ErrorMessage error={error} />
    </Form>

  );
};
