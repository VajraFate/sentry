import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';

import space from 'app/styles/space';

const shouldForwardProp = p => p !== 'disabled' && isPropValid(p);

const FieldLabel = styled('div', {shouldForwardProp})<{disabled?: boolean}>`
  color: ${p => (!p.disabled ? p.theme.textColor : p.theme.disabled)};
  display: grid;
  grid-gap: ${space(0.5)};
  grid-template-columns: repeat(2, auto);
  line-height: 16px;
`;

export default FieldLabel;
