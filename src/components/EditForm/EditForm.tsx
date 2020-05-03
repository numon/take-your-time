import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';

const EditForm = ({timeInfo, editForm, setEditForm, updateTimer}: any) => {
  const [ newTitle, setTitle ] = useState(timeInfo.title);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value), []);
  const handleSubmit = useCallback((e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateTimer({
      id: timeInfo.id,
      title: newTitle,
    });
    setEditForm(false);
  }, [ timeInfo, newTitle, updateTimer, setEditForm ]);

  const inputEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if(inputEl && inputEl.current) {
      inputEl.current.focus();
    }
  });

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputEl}
        type="text"
        value={newTitle}
        onChange={handleChange}
        disabled={!editForm}
        className={`timer__inputTitle ${editForm ? "active" : null}`}
      />
    </form>
  );

};
export default React.memo(EditForm);
