import React, { useState } from 'react';
import { Button, Col, Image } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from './Text';
import { primaryLightColor, secondaryColor } from '../app/constants/colors';
import { ArrowsAngleExpand } from 'react-bootstrap-icons';
import { Placeholder } from 'semantic-ui-react';
const ThemedButton = styled(Button)`
background-color: ${primaryLightColor} !important;

`;
const PriceTag = styled.span`
background-color: ${secondaryColor} !important;
position:absolute;
color: ${primaryLightColor};
font-weight: bold;
top:0;
left:0;
`;
export default function BookCard ({ book }) {
  const [loading, setLoading] = useState(true);
  const imageStyle = loading ? { display: 'none' } : { background: 'white', width: '200px', height: '280px', objectFit: 'none' };
  return (
      <>
    {book && <Col className="m-3 flex-column d-flex justify-content-center" md="auto" style={{ alignItems: 'center', padding: '0px', width: '200px' }}>
    {loading && <Placeholder className="shadow-sm row mb-2" style={{ height: 280, width: 200 }}>
    <Placeholder.Image />
  </Placeholder>}
    <Image onLoad={() => setLoading(false)} className="shadow-sm row mb-2" style={imageStyle} src={book.image ? book.image : '#'} />
    <PriceTag className="shadow-sm rounded-bottom mx-2 px-2">{book.price === '$0.00' ? 'Free' : book.price}</PriceTag>
    <ThemedButton disabled={loading} className="row w-100"><ArrowsAngleExpand className="mx-2" onClick={alert}></ArrowsAngleExpand><Text tid="details_text"></Text></ThemedButton>
    </Col>}
    </>
  );
}

BookCard.propTypes = {
  book: PropTypes.object.isRequired
};
