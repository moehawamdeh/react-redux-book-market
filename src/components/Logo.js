import React from 'react';
import { BookHalf } from 'react-bootstrap-icons';
import { navTextColor } from '../app/constants/colors';
import { logoIconLargeSize, logoIconSmallSize, logoTitleLargeSize, logoTitleSmallSize, logoSloganLargeSize, logoSloganSmallSize } from '../app/constants/dimens';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from './Text';
const LogoIcon = styled(BookHalf)`
color: ${navTextColor};
width: auto;
`;
  // const Vertical = styled.div`
  // color: ${navTextColor};
  // `;
  // const Sp = styled.span`
  // color: ${navTextColor};

// `;
// const Vertical = styled.div`

// `;
function Logo ({ orientation, size }) {
  const logoSize = size === 'large' ? logoIconLargeSize : logoIconSmallSize;
  const titleSize = size === 'large' ? logoTitleLargeSize : logoTitleSmallSize;
  const sloganSize = size === 'large' ? logoSloganLargeSize : logoSloganSmallSize;
  const titleStyle = {
    fontSize: titleSize,
    lineHeight: titleSize,
    fontFamily: 'Segoe UI',
    display: 'block'
  };
  const sloganStyle = {
    fontSize: sloganSize,
    fontFamily: 'Segoe UI Light',
    marginTop: '12px!important'
  };
  return (orientation === 'vertical'
    ? <div className="col justify-content-center" style={{ minHeight: '10px' }}>
      <LogoIcon size={logoSize}/>
        <p className="h2 justify-content-center m-y1" style={titleStyle}><Text tid={'logo_name'}/></p>
        <p className="h3 justify-content-center m-y1" style={sloganStyle}><Text tid={'logo_slogan'}/></p>
    </div>
    : <div className="row" style={{ alignItems: 'center' }}>
    <LogoIcon className="col" size={logoSize}/>
    <div className="col"><span className="row bp-2 mb-2" style={titleStyle}><Text tid={'logo_name'}/></span>
    <span className="row mt-2 bt-4" style={sloganStyle}><Text tid={'logo_slogan'}/></span></div>
  </div>
  );
}

Logo.propTypes = {
  orientation: PropTypes.oneOf(['vertical', 'horizantal']),
  size: PropTypes.oneOf(['small', 'large'])
};

export default Logo;
