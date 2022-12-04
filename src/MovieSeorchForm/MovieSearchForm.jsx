import React from 'react';
import {
  Button,
  ButtonLabel,
  Form,
  Header,
  Input,
} from './MovieSearchForm.styled';
import { AiOutlineSearch } from 'react-icons/ai';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { useState } from 'react';


function MovieSearchForm({ onSubmit, state }) {
    const [pageName, setPageName] = useState('');
    

  const handleInputChange = e => {
    setPageName(e.currentTarget.value.toLowerCase());
    console.log(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (pageName.trim() === '') {
      toast.error('Search field is empty!');
      return;
    }
    onSubmit(pageName);
    setPageName('');
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <AiOutlineSearch size="26px" />
          <ButtonLabel>Поиск</ButtonLabel>
        </Button>
        <Input
          value={pageName}
          type="text"
          className="input"
          autocomplete="off"
          onChange={handleInputChange}
          placeholder="Search movies"
        ></Input>
      </Form>
    </Header>
  );
}
MovieSearchForm.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};
export default MovieSearchForm;