import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

import './TimerForm.css';

const TimerForm = ({addNewTimer}: any) => {
  const [ title, setTitle ] = useState<string>('');
  const [ icon, setIcon ] = useState<string>('');
  const [ showForm, SetShowForm ] = useState<boolean>(false);

  const handleShowForm = useCallback((): void => SetShowForm(true), []);
  const handleHideForm = useCallback((): void => SetShowForm(false), []);
  const handleTitleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value), []);
  const handleIconChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setIcon(e.target.value), []);

  const handleAddTimer = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewTimer({
      id: Date.now(),
      title,
      icon,
      time: 0
    });
    handleHideForm();
  };

  return (
    <div className="timer">
      <div className="timer__title">
        <div className="timer__add">
          {
            showForm ? (
              <form onSubmit={handleAddTimer}>
                <input
                  id="title"
                  type="text"
                  name="title"
                  value={title}
                  onChange={handleTitleChange}
                  required
                  placeholder="Enter title"
                />
                <input
                  id="icon"
                  type="text"
                  name="icon"
                  value={icon}
                  placeholder="Enter icon"
                  onChange={handleIconChange}
                />
                <div className="timer__navAdd">
                  <input className="btn" type="submit" value="Add"/>
                  <input className="btn" type="button" value="Cancel" onClick={handleHideForm}/>
                </div>
              </form>
            ) : (

              <FaPlusCircle
                color="#FFCF54"
                size="110"
                className="timer__addButton"
                onClick={handleShowForm}
              />
            )
          }
        </div>
      </div>
    </div>
  );
};

export default React.memo(TimerForm);
