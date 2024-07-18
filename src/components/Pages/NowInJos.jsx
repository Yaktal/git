import React from 'react'
import Dropdown from '../Dropdown';

const NowInJos = () => {
  
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (dropdown) => {
    setOpenDropdown(prev => prev === dropdown ? null : dropdown);
  };
  
  const optionOne = [
    { value: '1', label: 'Current', path: '/' },
    { value: '2', label: 'Upcoming', path: '/'}
  ];
  
  const optionTwo = [
    { value: '1', label: 'Apartments', path: '/' },
    { value: '2', label: 'Hotels', path: '/' },
  ];
  const optionThree = [
    { value: '1', label: 'Shopping Malls', path: '/' },
    { value: '2', label: 'Markets', path: '/' },
  ];
  return (
    <div>
      <h1>Now In Jos</h1>      
    </div>
  )
}

export default NowInJos
