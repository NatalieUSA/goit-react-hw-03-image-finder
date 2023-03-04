import { Component } from 'react';
import propTypes from 'prop-types';
import {
  Header,
  Button,
  Form,
  ButtonLabel,
  FormInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit({ ...this.state });
    this.reset();
  };

  reset() {
    this.setState({
      search: '',
    });
  }

  render() {
    const { search } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <Header>
        <Form onSubmit={handleSubmit}>
          <Button type="submit">
            <ButtonLabel></ButtonLabel>
          </Button>

          <FormInput
            onChange={handleChange}
            value={search}
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            required
          />
        </Form>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: propTypes.func.isRequired,
};
