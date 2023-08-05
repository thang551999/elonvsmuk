import { FC, SVGProps } from 'react';

const ToggleDrawer: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' {...props}>
      <path d='M1 12H23' stroke='white' strokeWidth='2' strokeMiterlimit='10' strokeLinecap='round' />
      <path d='M1 5H23' stroke='white' strokeWidth='2' strokeMiterlimit='10' strokeLinecap='round' />
      <path d='M12 19H23' stroke='white' strokeWidth='2' strokeMiterlimit='10' strokeLinecap='round' />
    </svg>
  );
};

export default ToggleDrawer;
