import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';

const TimerForm = ({addTimer, closeForm}: any) => {
  const [ title, setTitle ] = useState<string>('');
  const [ icon, setIcon ] = useState<string>('');

  const handleAddTimer = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTimer({
      id: Date.now(),
      title,
      icon,
      time: 0
    });
    closeForm();
  };
  const handleTitleChange = useCallback((e:ChangeEvent<HTMLInputElement>) => setTitle(e.target.value), []);
  const handleIconChange =  useCallback((e:ChangeEvent<HTMLInputElement>) => setIcon(e.target.value), []);

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
      <input type="button" value="Cancel" onClick={closeForm}/>
    </form>
  );
};

export default React.memo(TimerForm);
