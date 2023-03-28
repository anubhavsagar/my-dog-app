import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { getDogBreeds, getRandomDogImage } from '../services/dogService';

const AddDog = () => {
  const [breeds, setBreeds] = useState([]);
  const [breed, setBreed] = useState('');
  const [dogImage, setDogImage] = useState('');

  useEffect(() => {
    const fetchDogBreeds = async () => {
      const result = await getDogBreeds();
      setBreeds(result);
    };
    fetchDogBreeds();
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    const image = await getRandomDogImage(breed);
    setDogImage(image);
  };

  return (
    <Container>
      <h1>Add Dog</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Select Dog Breed</Form.Label>
          <Form.Control
            as="select"
            value={breed}
            onChange={e => setBreed(e.target.value)}
            required
          >
            <option value="">Select Breed</option>
            {breeds.map(breed => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Get Random Image
        </Button>
      </Form>
      {dogImage && (
        <div className="mt-3">
          <img src={dogImage} alt="Dog" width="400" />
        </div>
      )}
    </Container>
  );
};

export default AddDog;