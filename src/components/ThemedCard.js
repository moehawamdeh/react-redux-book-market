import { cardBackgroundColor } from '../app/constants/colors';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
const ThemedCard = styled(Card)`
background-color: ${cardBackgroundColor}
`;

export default ThemedCard;
