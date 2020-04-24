import React, { ChangeEvent, useState } from 'react';

const TimerForm = ({addTimer}: any) => {
  const [ title, setTitle ] = useState('');
  const [ icon, setIcon ] = useState('');

  const handleAddTimer = (e: any) => {
    e.preventDefault();
    addTimer({
      title,
      icon,
      time: 0
    })
  };
  const handleTitleChange = (e:ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const handleIconChange = (e:ChangeEvent<HTMLInputElement>) => setIcon(e.target.value);

  return (
    <form onSubmit={handleAddTimer}>
      <input
        type="text"
        name='title'
        value={title}
        onChange={handleTitleChange}
        required
      />
      <input
        type="text"
        name='icon'
        value={icon}
        onChange={handleIconChange}
      />
      <input type="submit" value="Add" />
      <input type="button" value="Cancel" />
    </form>
  );
};

export default TimerForm;
