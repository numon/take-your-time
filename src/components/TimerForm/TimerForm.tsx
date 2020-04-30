import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';

const TimerForm = ({addTimer}: any) => {
  const [ title, setTitle ] = useState<string>('');
  const [ icon, setIcon ] = useState<string>('');
  const [ showForm, SetShowForm ] = useState<boolean>(false);

  const handleShowForm = useCallback((): void => SetShowForm(true), []);
  const handleHideForm = useCallback((): void => SetShowForm(false), []);
  const handleTitleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value), []);
  const handleIconChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setIcon(e.target.value), []);

  const handleAddTimer = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTimer({
      id: Date.now(),
      title,
      icon,
      time: 0
    });
    handleHideForm();
  };

  return (
    <div>
      <button onClick={handleShowForm}>Add timer</button>
      {
        showForm ? (
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
            <input type="submit" value="Add"/>
            <input type="button" value="Cancel" onClick={handleHideForm}/>
          </form>
        ) : null
      }

    </div>
  );
};

export default React.memo(TimerForm);
